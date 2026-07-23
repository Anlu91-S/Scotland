const CACHE_PREFIX="sr-v53:";
const defaultConfig={apiBase:"",liveEnrichment:false};
function loadConfig(){try{return {...defaultConfig,...JSON.parse(localStorage.getItem(CACHE_PREFIX+"config")||"{}")}}catch{return {...defaultConfig}}}
function saveConfig(config){localStorage.setItem(CACHE_PREFIX+"config",JSON.stringify(config))}
function cacheGet(key,maxAge){try{const raw=JSON.parse(localStorage.getItem(CACHE_PREFIX+key)||"null");if(!raw)return null;if(Date.now()-raw.time>maxAge)return null;return raw.value}catch{return null}}
function cacheSet(key,value){try{localStorage.setItem(CACHE_PREFIX+key,JSON.stringify({time:Date.now(),value}))}catch{}}
function dedupeMedia(media){const seen=new Set();return media.filter(x=>{if(!x?.url||seen.has(x.url))return false;seen.add(x.url);return true})}
async function workerFetch(path,body){const cfg=loadConfig();if(!cfg.apiBase)throw new Error("Integration service is not configured");const url=cfg.apiBase.replace(/\/$/,"")+path;const res=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});if(!res.ok)throw new Error((await res.text())||`Request failed (${res.status})`);return res.json()}
export const Integrations={
 getConfig:loadConfig,setConfig:saveConfig,
 async health(){const cfg=loadConfig();if(!cfg.apiBase)return {ok:false,message:"Not configured"};const res=await fetch(cfg.apiBase.replace(/\/$/,"")+"/api/health");if(!res.ok)throw new Error("Service unavailable");return res.json()},
 async place(item){const key=`place:${item.id}`;const cached=cacheGet(key,1000*60*60*24);if(cached)return cached;const data=await workerFetch("/api/place",{query:item.googleQuery,itemId:item.id});cacheSet(key,data);return data},
 async metadata(item){if(!item.officialUrl)return null;const key=`meta:${item.id}`;const cached=cacheGet(key,1000*60*60*24*7);if(cached)return cached;const data=await workerFetch("/api/metadata",{url:item.officialUrl,itemId:item.id});cacheSet(key,data);return data},
 async pageSummary(url,question){return workerFetch("/api/page-summary",{url,question})},
 async ai(payload){return workerFetch("/api/ai",payload)},
 async media(item,region,{includeLive=true}={}){
   const curated=(item.localImages||[]).map(url=>({url,source:"Curated roadbook image",sourceUrl:null,credit:""}));
   const fallback=region?.image?[{url:region.image,source:"Regional roadbook image",sourceUrl:region.source?.url||null,credit:""}]:[];
   let official=[];const cfg=loadConfig();
   if(includeLive&&cfg.liveEnrichment&&cfg.apiBase){
     try{
       const meta=await this.metadata(item);
       official=(meta?.images||[]).slice(0,8).map(x=>({url:x.url,source:"Official website",sourceUrl:item.officialUrl,credit:x.credit||""}));
     }catch{}
   }
   const media=curated.length?curated:[...official,...fallback];
   return dedupeMedia(media).slice(0,8);
 },
 async live(item){const cfg=loadConfig();if(!cfg.liveEnrichment||!cfg.apiBase)return null;try{return await this.place(item)}catch{return null}},
 clearCache(){Object.keys(localStorage).filter(k=>k.startsWith(CACHE_PREFIX)&&k!==CACHE_PREFIX+"config").forEach(k=>localStorage.removeItem(k))}
};
