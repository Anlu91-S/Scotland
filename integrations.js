
const CACHE_PREFIX="sr-v52:";
const defaultConfig={apiBase:"",liveEnrichment:true};
function loadConfig(){try{return {...defaultConfig,...JSON.parse(localStorage.getItem(CACHE_PREFIX+"config")||"{}")}}catch{return {...defaultConfig}}}
function saveConfig(config){localStorage.setItem(CACHE_PREFIX+"config",JSON.stringify(config))}
function cacheGet(key,maxAge){try{const raw=JSON.parse(localStorage.getItem(CACHE_PREFIX+key)||"null");if(!raw)return null;if(Date.now()-raw.time>maxAge)return null;return raw.value}catch{return null}}
function cacheSet(key,value){try{localStorage.setItem(CACHE_PREFIX+key,JSON.stringify({time:Date.now(),value}))}catch{}}
function absoluteImage(url){return typeof url==="string"&&/^https?:\/\//.test(url)}
function dedupeMedia(media){const seen=new Set();return media.filter(x=>{if(!x?.url||seen.has(x.url))return false;seen.add(x.url);return true})}
async function workerFetch(path,body){const cfg=loadConfig();if(!cfg.apiBase)throw new Error("Integration service is not configured");const url=cfg.apiBase.replace(/\/$/,"")+path;const res=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});if(!res.ok)throw new Error((await res.text())||`Request failed (${res.status})`);return res.json()}
async function wikimedia(item,region){const key=`commons:${item.id}`;const cached=cacheGet(key,1000*60*60*24*30);if(cached)return cached;const query=`${item.name} ${region.name} Scotland`;
 const params=new URLSearchParams({action:"query",generator:"search",gsrsearch:query,gsrnamespace:"6",gsrlimit:"8",prop:"imageinfo",iiprop:"url|extmetadata",iiurlwidth:"1600",format:"json",origin:"*"});
 try{const res=await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);if(!res.ok)throw new Error();const data=await res.json();const pages=Object.values(data.query?.pages||{});const result=pages.map(p=>{const info=p.imageinfo?.[0];const meta=info?.extmetadata||{};return {url:info?.thumburl||info?.url,source:"Wikimedia Commons",sourceUrl:info?.descriptionurl,credit:(meta.Artist?.value||"").replace(/<[^>]+>/g,""),license:meta.LicenseShortName?.value||""}}).filter(x=>x.url&&!/logo|icon|map|coat.of.arms/i.test(x.url)).slice(0,5);cacheSet(key,result);return result}catch{return []}}

async function officialPreview(item){if(!item.officialUrl)return [];const key=`official-preview:${item.id}`;const cached=cacheGet(key,1000*60*60*24*30);if(cached)return cached;try{const params=new URLSearchParams({url:item.officialUrl,meta:"true",prerender:"true"});const res=await fetch(`https://api.microlink.io/?${params}`);if(!res.ok)throw new Error();const payload=await res.json(),image=payload.data?.image;const result=image?.url&&!/logo|icon|favicon|avatar/i.test(image.url)?[{url:image.url,source:"Official website preview",sourceUrl:item.officialUrl,credit:payload.data?.publisher||""}]:[];cacheSet(key,result);return result}catch{return []}}
export const Integrations={
 getConfig:loadConfig,setConfig:saveConfig,
 async health(){const cfg=loadConfig();if(!cfg.apiBase)return {ok:false,message:"Not configured"};const res=await fetch(cfg.apiBase.replace(/\/$/,"")+"/api/health");if(!res.ok)throw new Error("Service unavailable");return res.json()},
 async place(item){const key=`place:${item.id}`;const cached=cacheGet(key,1000*60*60*24);if(cached)return cached;const data=await workerFetch("/api/place",{query:item.googleQuery,itemId:item.id});cacheSet(key,data);return data},
 async metadata(item){if(!item.officialUrl)return null;const key=`meta:${item.id}`;const cached=cacheGet(key,1000*60*60*24*7);if(cached)return cached;const data=await workerFetch("/api/metadata",{url:item.officialUrl,itemId:item.id});cacheSet(key,data);return data},
 async pageSummary(url,question){return workerFetch("/api/page-summary",{url,question})},
 async ai(payload){return workerFetch("/api/ai",payload)},
 async media(item,region,{includeLive=true}={}){
   const local=(item.localImages||[]).map(url=>({url,source:"Roadbook collection",sourceUrl:null,credit:""}));
   let official=[],publicOfficial=[],google=[],commons=[];const cfg=loadConfig();
   if(item.officialUrl)publicOfficial=await officialPreview(item);
   if(includeLive&&cfg.liveEnrichment&&cfg.apiBase){
     const [m,p]=await Promise.allSettled([this.metadata(item),this.place(item)]);
     if(m.status==="fulfilled"&&m.value)official=(m.value.images||[]).map(x=>({url:x.url,source:"Official website",sourceUrl:item.officialUrl,credit:x.credit||""}));
     if(p.status==="fulfilled"&&p.value)google=(p.value.photos||[]).map(x=>({url:x.url,source:"Google Places",sourceUrl:p.value.googleMapsUri,credit:x.attribution||""}));
   }
   if(item.category==="hike"||item.category==="experience")commons=await wikimedia(item,region);
   const fallback=[{url:region.image,source:"Regional roadbook image",sourceUrl:region.source?.url,credit:""}];
   return dedupeMedia([...local,...official,...publicOfficial,...google,...commons,...fallback]).slice(0,8);
 },
 async live(item){const cfg=loadConfig();if(!cfg.liveEnrichment||!cfg.apiBase)return null;try{return await this.place(item)}catch{return null}},
 clearCache(){Object.keys(localStorage).filter(k=>k.startsWith(CACHE_PREFIX)&&k!==CACHE_PREFIX+"config").forEach(k=>localStorage.removeItem(k))}
};
