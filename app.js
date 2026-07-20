const itinerary = [
  {id:'all', label:'Hela resan', dates:'5–17 aug', area:'Skottland', center:[57.18,-5.05], zoom:7},
  {id:'d1', label:'Dag 1', dates:'5 aug', area:'Loch Lomond', center:[56.06,-4.59], zoom:11, overnight:'Loch Lomond'},
  {id:'d2', label:'Dag 2', dates:'6 aug', area:'Glencoe', center:[56.68,-5.05], zoom:11, overnight:'Glencoe'},
  {id:'d3', label:'Dag 3', dates:'7 aug', area:'Glencoe', center:[56.61,-4.97], zoom:11, overnight:'Glencoe'},
  {id:'d4', label:'Dag 4', dates:'8 aug', area:'Skye söder', center:[57.25,-6.26], zoom:10, overnight:'Skye'},
  {id:'d5', label:'Dag 5', dates:'9 aug', area:'Skye nord', center:[57.55,-6.27], zoom:10, overnight:'Skye'},
  {id:'d6', label:'Dag 6', dates:'10 aug', area:'Skye väster', center:[57.42,-6.56], zoom:10, overnight:'Skye'},
  {id:'d7', label:'Dag 7', dates:'11 aug', area:'Harris', center:[57.90,-6.91], zoom:10, overnight:'Harris'},
  {id:'d8', label:'Dag 8', dates:'12 aug', area:'Harris', center:[57.93,-6.95], zoom:10, overnight:'Harris'},
  {id:'d9', label:'Dag 9', dates:'13 aug', area:'Lewis', center:[58.29,-6.55], zoom:9, overnight:'Lewis'},
  {id:'d10', label:'Dag 10', dates:'14 aug', area:'Pitlochry', center:[56.71,-3.80], zoom:10, overnight:'Pitlochry'},
  {id:'d11', label:'Dag 11', dates:'15 aug', area:'Stirling', center:[56.12,-3.94], zoom:12, overnight:'Stirling'},
  {id:'d12', label:'Dag 12', dates:'16 aug', area:'Culross', center:[56.04,-3.72], zoom:11, overnight:'Stirling'},
  {id:'d13', label:'Hemresa', dates:'17 aug', area:'Glasgow', center:[55.86,-4.25], zoom:11, overnight:'Återlämning'}
];

const places = [
{name:'Glasgow',area:'Glasgow',day:'d13',lat:55.8642,lng:-4.2518,type:'shopping',emoji:'🛍️',rating:4,desc:'Start och avslut. Bra för shopping, restauranger och sista kvällen.',time:'2–4 tim',weather:'rain'},
{name:'Luss',area:'Loch Lomond',day:'d1',lat:56.101,lng:-4.6406,type:'history',emoji:'🏡',rating:4,desc:'Vacker historisk by med strandpromenad och klassisk Loch Lomond-känsla.',time:'45–75 min',best:'Eftermiddag'},
{name:'Conic Hill',area:'Loch Lomond',day:'d1',lat:56.0868,lng:-4.5393,type:'hike',emoji:'🥾',rating:5,desc:'Kortare vandring med stor utdelning och utsikt över sjöns öar.',time:'2–3 tim',best:'Morgon'},
{name:'Loch Lomond Shores',area:'Loch Lomond',day:'d1',lat:56.0036,lng:-4.5906,type:'shopping',emoji:'🛍️',rating:3,desc:'Praktiskt första stopp med café, shopping och service.',time:'45 min',weather:'rain'},
{name:'Duck Bay Marina',area:'Loch Lomond',day:'d1',lat:56.0132,lng:-4.6068,type:'food',emoji:'🍽️',rating:4,desc:'Middag eller drink vid vattnet.',time:'1–2 tim',weather:'rain'},
{name:'Three Sisters',area:'Glencoe',day:'d2',lat:56.6663,lng:-4.9867,type:'photo',emoji:'📸',rating:5,desc:'Dramatisk och lättillgänglig utsikt över Glencoes berg.',time:'20–40 min',best:'Tidig morgon'},
{name:'Lost Valley',area:'Glencoe',day:'d2',lat:56.6504,lng:-4.999,type:'hike',emoji:'🥾',rating:5,desc:'Klassisk vandring in i Coire Gabhail.',time:'3–4 tim',best:'Morgon'},
{name:'Clachaig Inn',area:'Glencoe',day:'d2',lat:56.6696,lng:-5.0125,type:'food',emoji:'🍺',rating:5,desc:'Legendarisk Highland-pub med rustik stämning.',time:'1–3 tim',weather:'rain'},
{name:'Glen Etive',area:'Glencoe',day:'d3',lat:56.594,lng:-4.93,type:'nature',emoji:'🌲',rating:5,desc:'Vild, filmisk dal med vattenfall, berg och många spontana stopp.',time:'3–5 tim',best:'Eftermiddag'},
{name:'Glenfinnan Viaduct',area:'Mot Skye',day:'d4',lat:56.8763,lng:-5.4318,type:'history',emoji:'🏰',rating:5,desc:'Ikonisk järnvägsviadukt och bra stopp på vägen mot Skye.',time:'1–2 tim'},
{name:'Fairy Pools',area:'Skye',day:'d4',lat:57.2504,lng:-6.2563,type:'nature',emoji:'🌲',rating:4,desc:'Klara pooler nedanför Cuillinbergen.',time:'2–3 tim',best:'Tidig morgon'},
{name:'Elgol',area:'Skye',day:'d4',lat:57.146,lng:-6.1073,type:'photo',emoji:'📸',rating:5,desc:'Lugn kustby med magnifik utsikt mot Cuillin.',time:'1–2 tim',best:'Kväll'},
{name:'Old Man of Storr',area:'Skye',day:'d5',lat:57.5073,lng:-6.1741,type:'hike',emoji:'🥾',rating:5,desc:'En av Skyes mest kända vandringar och bästa morgonljus.',time:'2–3 tim',best:'🌅 Soluppgång'},
{name:'Quiraing',area:'Skye',day:'d5',lat:57.6434,lng:-6.2653,type:'hike',emoji:'🥾',rating:5,desc:'Dramatiskt landskap med både kort utsiktspromenad och längre tur.',time:'2–4 tim',best:'Tidig morgon'},
{name:'Fairy Glen',area:'Skye',day:'d5',lat:57.5838,lng:-6.3262,type:'quirky',emoji:'✨',rating:4,desc:'Märkligt miniatyrlandskap med sagokänsla.',time:'45–75 min'},
{name:'Portree',area:'Skye',day:'d5',lat:57.4125,lng:-6.194,type:'shopping',emoji:'🛍️',rating:4,desc:'Färgstark hamn, lokala butiker, restauranger och pubar.',time:'2–3 tim',weather:'rain'},
{name:'Neist Point',area:'Skye',day:'d6',lat:57.4234,lng:-6.7886,type:'photo',emoji:'🌇',rating:5,desc:'Dramatiska klippor och ett av resans bästa solnedgångsstopp.',time:'2–3 tim',best:'🌇 Solnedgång'},
{name:'Uig Ferry Terminal',area:'Skye',day:'d7',lat:57.586,lng:-6.358,type:'ferry',emoji:'⛴️',rating:3,desc:'Färja från Uig till Tarbert.',time:'Var i god tid'},
{name:'Tarbert',area:'Harris',day:'d7',lat:57.8988,lng:-6.8088,type:'ferry',emoji:'⛴️',rating:3,desc:'Ankomsthamn och central ort på Harris.',time:'30–60 min'},
{name:'Harris Distillery',area:'Harris',day:'d7',lat:57.8976,lng:-6.8081,type:'food',emoji:'🥃',rating:5,desc:'Modern destillerimiljö med lokal design, gin och whisky.',time:'1–2 tim',weather:'rain'},
{name:'Luskentyre Beach',area:'Harris',day:'d7',lat:57.8991,lng:-6.9507,type:'beach',emoji:'🏖️',rating:5,desc:'Vidsträckt vit sand, turkost vatten och berg i bakgrunden.',time:'2–4 tim',best:'Sen eftermiddag'},
{name:'Hushinish Beach',area:'Harris',day:'d8',lat:57.9981,lng:-7.0883,type:'beach',emoji:'🏖️',rating:5,desc:'Avlägsen strand med dramatisk väg och vacker kust.',time:'3–5 tim'},
{name:'Northton Saltmarsh',area:'Harris',day:'d8',lat:57.806,lng:-6.971,type:'nature',emoji:'🌲',rating:4,desc:'Saltängar och tidvattenlandskap på södra Harris.',time:'45–90 min'},
{name:'Scarista Beach',area:'Harris',day:'d8',lat:57.813,lng:-6.999,type:'beach',emoji:'🏖️',rating:4,desc:'Vild strand med vågor och utsikt mot Harrisbergen.',time:'1–2 tim'},
{name:'Calanais Standing Stones',area:'Lewis',day:'d9',lat:58.1973,lng:-6.745,type:'history',emoji:'🏰',rating:5,desc:'Förhistorisk stencirkel och en av Hebridernas starkaste kulturupplevelser.',time:'1–2 tim',best:'Kväll'},
{name:'Gearrannan Blackhouse Village',area:'Lewis',day:'d9',lat:58.2952,lng:-6.7931,type:'history',emoji:'🏡',rating:5,desc:'Restaurerad by med traditionella svartstenhus och kustlandskap.',time:'1–2 tim',weather:'rain'},
{name:'Butt of Lewis',area:'Lewis',day:'d9',lat:58.515,lng:-6.261,type:'nature',emoji:'🌲',rating:5,desc:'Vindpinad nordspets med fyr och Atlantklippor.',time:'1–2 tim'},
{name:'Stornoway',area:'Lewis',day:'d9',lat:58.2093,lng:-6.3865,type:'shopping',emoji:'🛍️',rating:3,desc:'Service, caféer, butiker och färjehamn.',time:'1–2 tim',weather:'rain'},
{name:'Ullapool',area:'Fastlandet',day:'d10',lat:57.8954,lng:-5.1613,type:'ferry',emoji:'⛴️',rating:4,desc:'Ankomst från Stornoway och start för färden söderut.',time:'1 tim'},
{name:"Queen's View",area:'Pitlochry',day:'d10',lat:56.695,lng:-3.8737,type:'photo',emoji:'📸',rating:5,desc:'Klassisk utsikt över Loch Tummel och bergen.',time:'30–60 min'},
{name:'Killiecrankie Gorge',area:'Pitlochry',day:'d10',lat:56.744,lng:-3.776,type:'hike',emoji:'🥾',rating:4,desc:'Skog, ravin, historia och kortare promenader.',time:'1–2 tim'},
{name:'Edradour Distillery',area:'Pitlochry',day:'d10',lat:56.698,lng:-3.702,type:'food',emoji:'🥃',rating:4,desc:'Klassisk destillerimiljö nära Pitlochry.',time:'1–2 tim',weather:'rain'},
{name:'Stirling Castle',area:'Stirling',day:'d11',lat:56.1238,lng:-3.9489,type:'history',emoji:'🏰',rating:5,desc:'Ett av Skottlands viktigaste slott med kunglig historia.',time:'2–3 tim',weather:'rain'},
{name:'Wallace Monument',area:'Stirling',day:'d11',lat:56.1386,lng:-3.9191,type:'history',emoji:'🏰',rating:4,desc:'Monument och panoramautsikt över området.',time:'1–2 tim'},
{name:'Curly Coo Bar',area:'Stirling',day:'d11',lat:56.1185,lng:-3.9405,type:'food',emoji:'🍺',rating:5,desc:'Liten whiskybar med stort urval och personlig atmosfär.',time:'1–3 tim',weather:'rain'},
{name:'Culross Palace',area:'Culross',day:'d12',lat:56.0551,lng:-3.6263,type:'history',emoji:'🏰',rating:5,desc:'Historisk byggnad och trädgård i välbevarad bymiljö.',time:'1–2 tim',weather:'rain'},
{name:'Mercat Cross',area:'Culross',day:'d12',lat:56.0555,lng:-3.629,type:'history',emoji:'🏡',rating:4,desc:'Kullersten och nästan filmisk 1600-talsmiljö.',time:'30–60 min'},
{name:'Biscuit Café',area:'Culross',day:'d12',lat:56.0558,lng:-3.6282,type:'food',emoji:'☕',rating:4,desc:'Cafépaus i historisk miljö.',time:'45–75 min',weather:'rain'},
{name:'The Kelpies',area:'Falkirk',day:'d12',lat:56.0192,lng:-3.7559,type:'quirky',emoji:'✨',rating:5,desc:'Två monumentala hästskulpturer och ett starkt avslutningsstopp.',time:'45–90 min'}
];


const categories = [
  ['all','🗺️','Alla'],
  ['hike','🥾','Vandring'],
  ['beach','🏖️','Strand'],
  ['history','🏰','Historia'],
  ['nature','🌲','Natur'],
  ['photo','📸','Foto'],
  ['food','🍺','Mat & dryck'],
  ['shopping','🛍️','Shopping'],
  ['quirky','✨','Quirky'],
  ['ferry','⛴️','Färja']
];

let currentDay = 'all';
let currentCategory = 'all';
let rainMode = false;
let deferredPrompt;
const visited = new Set(JSON.parse(localStorage.getItem('visitedPlaces') || '[]'));
const favorites = new Set(JSON.parse(localStorage.getItem('favoritePlaces') || '[]'));

const map = L.map('map', {zoomControl:true}).setView([57.18,-5.05], 7);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom:17,
  attribution:'Kartdata © OpenStreetMap-bidragsgivare · Kartstil © OpenTopoMap'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);

const roadRoute = [
[55.8642,-4.2518],[56.06,-4.59],[56.67,-5.01],[57.15,-5.8],[57.41,-6.19],[57.586,-6.358]
];
const harrisRoute = [[57.8988,-6.8088],[57.90,-6.95],[58.1973,-6.745],[58.2093,-6.3865]];
const returnRoute = [[57.8954,-5.1613],[57.2,-4.3],[56.7025,-3.7341],[56.12,-3.94],[56.0555,-3.629],[55.8642,-4.2518]];
const ferry1 = [[57.586,-6.358],[57.8988,-6.8088]];
const ferry2 = [[58.2093,-6.3865],[57.8954,-5.1613]];
L.polyline(roadRoute,{color:'#18392f',weight:5,opacity:.82}).addTo(routeLayer);
L.polyline(harrisRoute,{color:'#18392f',weight:5,opacity:.82}).addTo(routeLayer);
L.polyline(returnRoute,{color:'#18392f',weight:5,opacity:.82}).addTo(routeLayer);
L.polyline(ferry1,{color:'#255243',weight:4,dashArray:'10 10'}).addTo(routeLayer);
L.polyline(ferry2,{color:'#255243',weight:4,dashArray:'10 10'}).addTo(routeLayer);

function markerIcon(place){
  return L.divIcon({
    className:'',
    html:`<div class="emoji-marker ${place.rating===5?'star':''}">${place.emoji}</div>`,
    iconSize:[38,38], iconAnchor:[19,19], popupAnchor:[0,-20]
  });
}
function visiblePlaces(){
  return places.filter(p => {
    const dayOk = currentDay === 'all' || p.day === currentDay;
    const catOk = currentCategory === 'all' || p.type === currentCategory;
    const rainOk = !rainMode || p.weather === 'rain';
    return dayOk && catOk && rainOk;
  });
}
function renderMarkers(){
  markerLayer.clearLayers();
  visiblePlaces().forEach(place => {
    const marker = L.marker([place.lat,place.lng],{icon:markerIcon(place)}).addTo(markerLayer);
    marker.bindPopup(`<div class="popup"><h3>${place.emoji} ${place.name}</h3><p>${place.area} · ${place.time}</p><p>${place.desc}</p><button onclick="openPlace('${place.name.replace(/'/g,"\\'")}')">Visa detaljer</button></div>`);
  });
}
function renderDays(){
  const wrap = document.getElementById('dayScroller');
  wrap.innerHTML = '';
  itinerary.forEach(day => {
    const b = document.createElement('button');
    b.className = `day-pill ${currentDay===day.id?'active':''}`;
    b.innerHTML = `<strong>${day.label}</strong><br><small>${day.dates}</small>`;
    b.onclick = () => selectDay(day.id);
    wrap.appendChild(b);
  });
}
function renderCategories(){
  const wrap = document.getElementById('categoryFilters');
  wrap.innerHTML='';
  categories.forEach(([id,emoji,label])=>{
    const b=document.createElement('button');
    b.className=`chip ${currentCategory===id?'active':''}`;
    b.textContent=`${emoji} ${label}`;
    b.onclick=()=>{currentCategory=id; renderAll();};
    wrap.appendChild(b);
  });
}
function selectDay(id){
  currentDay=id;
  const d=itinerary.find(x=>x.id===id);
  map.flyTo(d.center,d.zoom,{duration:1.1});
  renderAll();
}
function renderSummary(){
  const d=itinerary.find(x=>x.id===currentDay);
  const list=visiblePlaces();
  const summary=document.getElementById('daySummary');
  const routeText = currentDay==='all'
    ? 'Glasgow → Loch Lomond → Glencoe → Skye → Harris → Lewis → Ullapool → Pitlochry → Stirling → Culross → Glasgow'
    : `${d.dates} · ${d.area}${d.overnight?` · Natt: ${d.overnight}`:''}`;
  summary.innerHTML=`
    <div>
      <span class="eyebrow">${currentDay==='all'?'HELA RESAN':'DAGENS PLAN'}</span>
      <h2>${d.label}: ${d.area}</h2>
      <p>${list.length} synliga stopp. Prioritera ⭐-platserna och håll resten flexibelt efter väder och energi.</p>
      <ul>
        <li>Öppna varje plats för tidsåtgång, bästa tid och Google Maps.</li>
        <li>Markera besökt och favorit – sparas lokalt på telefonen.</li>
        <li>Aktivera ☔ regnläge för inomhusvänliga stopp.</li>
      </ul>
    </div>
    <div class="summary-route">
      <strong>🚐 Rutt</strong>
      <p>${routeText}</p>
    </div>`;
}
function renderList(){
  const list=visiblePlaces();
  document.getElementById('listTitle').textContent =
    currentDay==='all' ? 'Hela resan' : itinerary.find(x=>x.id===currentDay).area;
  const wrap=document.getElementById('placesList');
  wrap.innerHTML='';
  list.forEach(place=>{
    const card=document.createElement('article');
    card.className='place-card';
    card.innerHTML=`
      <div class="place-emoji">${place.emoji}</div>
      <div>
        <h3>${place.name} ${place.rating===5?'⭐':''}</h3>
        <p>${place.desc}</p>
        <div class="place-meta"><span>📍 ${place.area}</span><span>⏱️ ${place.time}</span>${place.best?`<span>🕒 ${place.best}</span>`:''}</div>
      </div>
      <button class="icon-btn" aria-label="Öppna ${place.name}">›</button>`;
    card.onclick=()=>openPlace(place.name);
    wrap.appendChild(card);
  });
}
window.openPlace = function(name){
  const p=places.find(x=>x.name===name);
  if(!p)return;
  const isVisited=visited.has(p.name), isFavorite=favorites.has(p.name);
  document.getElementById('dialogContent').innerHTML=`
    <div class="dialog-hero">
      <span class="eyebrow">${p.area.toUpperCase()}</span>
      <h2>${p.emoji} ${p.name}</h2>
      <div>${'⭐'.repeat(p.rating)}</div>
    </div>
    <div class="dialog-body">
      <p>${p.desc}</p>
      <p><strong>⏱️ Tidsåtgång:</strong> ${p.time}</p>
      ${p.best?`<p><strong>🕒 Bäst tid:</strong> ${p.best}</p>`:''}
      <p><strong>💡 Roadbook-tips:</strong> Kom tidigt till de mest populära naturplatserna och lämna marginal för smala vägar, parkering och väderomslag.</p>
      <div class="actions">
        <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name+', Scotland')}">📍 Google Maps</a>
        <button class="secondary" onclick="toggleVisited('${p.name.replace(/'/g,"\\'")}')">${isVisited?'✅ Besökt':'☐ Markera besökt'}</button>
        <button class="secondary" onclick="toggleFavorite('${p.name.replace(/'/g,"\\'")}')">${isFavorite?'⭐ Favorit':'☆ Lägg till favorit'}</button>
      </div>
    </div>`;
  document.getElementById('placeDialog').showModal();
}
window.toggleVisited=function(name){
  visited.has(name)?visited.delete(name):visited.add(name);
  localStorage.setItem('visitedPlaces',JSON.stringify([...visited]));
  updateCounts(); openPlace(name);
}
window.toggleFavorite=function(name){
  favorites.has(name)?favorites.delete(name):favorites.add(name);
  localStorage.setItem('favoritePlaces',JSON.stringify([...favorites]));
  openPlace(name);
}
function updateCounts(){
  document.getElementById('placeCount').textContent=places.length;
  document.getElementById('doneCount').textContent=visited.size;
}
function renderAll(){
  renderDays(); renderCategories(); renderMarkers(); renderSummary(); renderList(); updateCounts();
  document.getElementById('rainModeBtn').classList.toggle('active',rainMode);
}
document.querySelector('.dialog-close').onclick=()=>document.getElementById('placeDialog').close();
document.getElementById('placeDialog').addEventListener('click',e=>{
  if(e.target===e.currentTarget)e.currentTarget.close();
});
document.getElementById('rainModeBtn').onclick=()=>{rainMode=!rainMode;renderAll();};
document.getElementById('todayBtn').onclick=()=>selectDay('all');
document.getElementById('resetBtn').onclick=()=>{currentCategory='all';rainMode=false;renderAll();};

window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault(); deferredPrompt=e;
  const btn=document.getElementById('installBtn'); btn.hidden=false;
  btn.onclick=async()=>{deferredPrompt.prompt(); await deferredPrompt.userChoice; btn.hidden=true; deferredPrompt=null;};
});
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
}
renderAll();
