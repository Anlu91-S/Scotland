
const google = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const regionImages = {
  glasgow: "./images/glasgow.jpg",
  lomond: "./images/loch-lomond.jpg",
  glencoe: "./images/glencoe.jpg",
  skye: "./images/skye.jpg",
  hebrides: "./images/harris.jpg",
  inverness: "./images/inverness.jpg",
  cairngorms: "./images/cairngorms.jpg",
  central: "./images/crail.jpg",
  stirling: "./images/stirling.jpg",
  culross: "./images/culross.jpg",
  crail: "./images/crail.jpg",
  edinburgh: "./images/edinburgh.jpg"
};

const item = (name, description, link, image, extra={}) => ({name,description,link,image,...extra});
const exactPhotoNames = new Set([
  "Conic Hill",
  "Three Sisters viewpoint",
  "Clachaig Inn evening",
  "Old Man of Storr",
  "Luskentyre and Seilebost",
  "Calanais Standing Stones",
  "Culloden Battlefield",
  "Loch Morlich",
  "Stirling Castle",
  "Edinburgh Fringe Festival"
]);

const sourceChecked = "July 2026";
const regionSources = {
  glasgow:{name:"Glasgow Life",url:"https://www.glasgowlife.org.uk/"},
  lomond:{name:"Loch Lomond & The Trossachs National Park",url:"https://www.lochlomond-trossachs.org/"},
  glencoe:{name:"National Trust for Scotland · Glen Coe",url:"https://www.nts.org.uk/visit/places/glencoe"},
  skye:{name:"VisitScotland · Isle of Skye",url:"https://www.visitscotland.com/places-to-go/islands/isle-skye"},
  hebrides:{name:"Visit Outer Hebrides",url:"https://www.visitouterhebrides.co.uk/"},
  inverness:{name:"Visit Inverness Loch Ness",url:"https://www.visitinvernesslochness.com/"},
  cairngorms:{name:"Cairngorms National Park",url:"https://www.cairngorms.co.uk/"},
  central:{name:"VisitScotland · Fife",url:"https://www.visitscotland.com/places-to-go/fife"},
  edinburgh:{name:"Forever Edinburgh",url:"https://edinburgh.org/"}
};

const menuOverrides = {
  "The Village Rest":"https://www.the-village-rest.co.uk/Daytime_Food_Menu.html",
  "Clachaig Inn":"https://clachaig.com/the-food/",
  "Isle of Harris Brewery & Kitchen":"https://www.isleofharrisbrewery.com/food",
  "The Old Bridge Inn":"https://www.oldbridgeinn.co.uk/food/",
  "Dishoom Edinburgh":"https://www.dishoom.com/menu/"
};

const trailData = {
  "Kelvin Walkway":{rating:"4.5",reviews:"198",level:"Easy",distance:"9.3 km",elevation:"144 m",time:"2 hr 13 min",allTrails:"https://www.alltrails.com/en-gb/trail/scotland/glasgow-city-3/kelvin-walkway",trailhead:"Kelvin Walkway Glasgow"},
  "Cathkin Braes":{displayName:"Cathkin Braes Country Park & Linn Park Circular",rating:"4.4",reviews:"38",level:"Hard",distance:"17.7 km",elevation:"414 m",time:"about 5 hr 15 min",allTrails:"https://www.alltrails.com/en-gb/trail/scotland/glasgow-city-3/cathkin-braes-country-park-and-linn-park-circular",trailhead:"Cathkin Braes Country Park Glasgow"},
  "The Whangie":{displayName:"The Whangie & Auchineden Peak Circular",rating:"4.7",reviews:"753",level:"Moderate",distance:"4.5 km",elevation:"187 m",time:"about 1 hr 45 min",allTrails:"https://www.alltrails.com/trail/scotland/west-dunbartonshire/the-whangie-auchineden-peak-circular",trailhead:"The Whangie car park"},
  "Conic Hill":{rating:"4.7",reviews:"2,711",level:"Moderate",distance:"4.3 km",elevation:"323 m",time:"about 2–2.5 hr",allTrails:"https://www.alltrails.com/trail/scotland/west-dunbartonshire/conic-hill--2",trailhead:"Conic Hill Balmaha car park"},
  "Ben Lomond":{displayName:"Ben Lomond Mountain Path",rating:"4.7",reviews:"2,237",level:"Hard",distance:"12.7 km",elevation:"961 m",time:"about 6–6.5 hr",allTrails:"https://www.alltrails.com/en-gb/trail/scotland/glasgow-city-3/ben-lomond-mountain-path",trailhead:"Ben Lomond Rowardennan car park"},
  "Balmaha Millennium Forest Path":{displayName:"Inchcailloch Island Circular",rating:"4.8",reviews:"115",level:"Moderate",distance:"3.2 km",elevation:null,time:"about 1–1.5 hr",allTrails:"https://www.alltrails.com/trail/scotland/west-dunbartonshire/inchailloch",trailhead:"Balmaha boatyard Inchcailloch ferry"},
  "The Lost Valley":{displayName:"Coire Gabhail — The Lost Valley",rating:"4.8",reviews:"3,079",level:"Moderate",distance:"5.0 km",elevation:"275 m",time:"about 2–3 hr",allTrails:"https://www.alltrails.com/trail/scotland/highlands/lost-valley-coire-gabhail",trailhead:"Lost Valley Glencoe car park"},
  "Pap of Glencoe":{displayName:"Pap of Glencoe & Sgorr nam Fiannaidh",rating:"4.8",reviews:"64",level:"Hard",distance:"about 11.5 km",elevation:"1,000 m+",time:"about 6–7 hr",allTrails:"https://www.alltrails.com/trail/scotland/highlands/pap-of-glencoe-and-sgorr-nam-fiannaidh",trailhead:"Pap of Glencoe trailhead"},
  "An Torr and Signal Rock":{displayName:"Signal Rock, An Torr & Hagrid’s Hut Circular",rating:"4.5",reviews:"1,010",level:"Moderate",distance:"3.5 km",elevation:"89 m",time:"about 56 min",allTrails:"https://www.alltrails.com/trail/scotland/highlands/tom-a-ghrianain-and-an-torr-circular",trailhead:"Signal Rock Glencoe car park"},
  "The Quiraing circuit":{displayName:"The Quiraing Circuit",rating:"4.8",reviews:"3,533",level:"Hard",distance:"6.9 km",elevation:"413 m",time:"about 3–4 hr",allTrails:"https://www.alltrails.com/trail/scotland/highlands/the-quiraing-circuit",trailhead:"Quiraing car park Isle of Skye"},
  "Old Man of Storr":{rating:"4.8",reviews:"1,720",level:"Moderate",distance:"3.9 km",elevation:"282 m",time:"about 1 hr 41 min",allTrails:"https://www.alltrails.com/en-gb/trail/scotland/highlands/old-man-of-storr",trailhead:"Old Man of Storr car park"},
  "Fairy Pools":{rating:"4.6",reviews:"4,234",level:"Easy",distance:"4.3 km",elevation:"169 m",time:"about 1–1.5 hr",allTrails:"https://www.alltrails.com/trail/scotland/highlands/fairy-pools",trailhead:"Fairy Pools car park Glenbrittle"},
  "Toe Head and Northton":{displayName:"North Harris Eagle Observatory",rating:"4.6",reviews:"59",level:"Easy",distance:"5.3 km",elevation:"111 m",time:"about 1 hr 19 min",allTrails:"https://www.alltrails.com/trail/scotland/na-h-eileanan-an-iar/north-harris-eagle-observatory",trailhead:"North Harris Eagle Observatory trailhead"},
  "Huisinis coastal walk":{displayName:"Isle of Harris Scalpay Circular",rating:"4.4",reviews:"31",level:"Moderate",distance:"9.8 km",elevation:"256 m",time:"about 2 hr 37 min",allTrails:"https://www.alltrails.com/trail/scotland/na-h-eileanan-an-iar/isle-of-harris-scalpay-circular",trailhead:"Scalpay Isle of Harris trailhead"},
  "Clisham":{rating:"4.2",reviews:"Community snapshot",level:"Hard",distance:"5.1 km",elevation:"about 650 m",time:"about 3 hr 10 min",allTrails:"https://www.alltrails.com/trail/scotland/na-h-eileanan-an-iar/clisham",trailhead:"Clisham trailhead Harris"},
  "Ness Islands and the Caledonian Canal":{displayName:"Inverness Castle & River Circular",rating:"4.5",reviews:"387",level:"Easy",distance:"4.5 km",elevation:"62 m",time:"about 1 hr",allTrails:"https://www.alltrails.com/trail/scotland/highlands/inverness-castle-and-river-circular",trailhead:"Inverness Castle"},
  "Craig Phadrig":{displayName:"Ness Islands",rating:"4.7",reviews:"43",level:"Easy",distance:"1.8 km",elevation:"47 m",time:"about 27 min",allTrails:"https://www.alltrails.com/trail/scotland/highlands/ness-islands",trailhead:"Ness Islands Inverness"},
  "Abriachan Forest Trails":{displayName:"Urquhart Bay Woods & Loch Ness Circular",rating:"4.2",reviews:"395",level:"Easy",distance:"2.9 km",elevation:"33 m",time:"about 38 min",allTrails:"https://www.alltrails.com/en-gb/trail/scotland/highlands/urquhart-bay-woods-and-loch-ness-circular",trailhead:"Urquhart Bay Woods car park"},
  "Loch an Eilein circuit":{displayName:"Loch an Eilein & Loch Gamhna Circular",rating:"4.7",reviews:"321",level:"Easy",distance:"about 7.0 km",elevation:"about 120 m",time:"about 1.5–2 hr",allTrails:"https://www.alltrails.com/trail/scotland/highlands/loch-an-eilein-and-loch-gamhna-circular",trailhead:"Loch an Eilein car park"},
  "Meall a’ Bhuachaille":{rating:"4.8",reviews:"1,300+",level:"Hard",distance:"8.7 km",elevation:"about 547 m",time:"about 3 hr 39 min",allTrails:"https://www.alltrails.com/trail/scotland/highlands/meall-a-bhuachaille",trailhead:"Glenmore Visitor Centre Meall a Bhuachaille"},
  "Uath Lochans":{displayName:"Uath Lochans, Farleitter Crag & Creag Dhubh Circular",rating:"4.3",reviews:"55",level:"Moderate",distance:"12.1 km",elevation:"432 m",time:"about 3 hr 38 min",allTrails:"https://www.alltrails.com/trail/scotland/highlands/uath-lochans-farleitter-crag-and-creag-dhubh-circular",trailhead:"Uath Lochans car park"},
  "Dollar Glen":{displayName:"Dollar Glen & Castle Campbell Circular",rating:"4.6",reviews:"286",level:"Moderate",distance:"3.9 km",elevation:"about 184 m",time:"about 1.5–2 hr",allTrails:"https://www.alltrails.com/trail/scotland/clackmannanshire/dollar-glen-and-castle-campbell-circular",trailhead:"Dollar Glen car park"},
  "Lomond Hills and East Lomond":{displayName:"West Lomond",rating:"4.7",reviews:"266",level:"Moderate",distance:"7.4 km",elevation:"about 350 m",time:"about 2–2.5 hr",allTrails:"https://www.alltrails.com/trail/scotland/fife/west-lomond",trailhead:"West Lomond walkers car park"},
  "Devilla Forest":{displayName:"Devilla Forest, Tulliallan Wood & Peppermill Dam Circular",rating:"4.5",reviews:"39",level:"Moderate",distance:"11.1 km",elevation:"about 190 m",time:"about 2.5–3 hr",allTrails:"https://www.alltrails.com/trail/scotland/fife/devilla-forest-tulliallan-wood-and-peppermill-dam-circular",trailhead:"Devilla Forest car park"},
  "Arthur’s Seat":{rating:"4.7",reviews:"3,238",level:"Moderate",distance:"4.3 km",elevation:"about 253 m",time:"about 1 hr 47 min",allTrails:"https://www.alltrails.com/trail/scotland/edinburgh/arthurs-seat",trailhead:"Holyrood Park Arthur's Seat"},
  "Water of Leith Walkway":{rating:"4.5",reviews:"290+",level:"Hard · full route",distance:"19.6 km",elevation:"about 230 m",time:"about 4 hr 42 min",allTrails:"https://www.alltrails.com/trail/scotland/edinburgh/water-of-leith-walkway",trailhead:"Water of Leith Walkway Edinburgh"},
  "Blackford Hill":{displayName:"Blackford Hill Loop",rating:"4.6",reviews:"299",level:"Easy",distance:"4.8 km",elevation:"118 m",time:"about 1 hr 15 min",allTrails:"https://www.alltrails.com/en-gb/trail/scotland/edinburgh/blackford-hill-loop",trailhead:"Blackford Hill Edinburgh"}
};

const regions = [
{
 id:"glasgow", name:"Glasgow", dates:"4 August", lat:55.8642,lng:-4.2518,image:regionImages.glasgow,
 intro:"Scotland’s largest city is a confident opening chapter: Victorian architecture, radical design, legendary live music and a food scene that ranges from relaxed neighbourhood kitchens to ambitious modern Scottish dining.",
 hikes:[
  item("Kelvin Walkway","An easy riverside walk linking the West End, Kelvingrove and the Botanic Gardens.",google("Kelvin Walkway Glasgow"),regionImages.glasgow,{difficulty:"Easy · urban trail"}),
  item("Cathkin Braes","Open views across the city from Glasgow’s highest point, with woodland and mountain-bike trails.",google("Cathkin Braes Country Park"),regionImages.glasgow,{difficulty:"Easy–moderate"}),
  item("The Whangie","A short excursion north of the city through an unusual volcanic rock formation.",google("The Whangie trail"),regionImages.glasgow,{difficulty:"Moderate"})
 ],
 restaurants:[
  item("Ox and Finch","Small plates with bold, globally influenced flavours in Finnieston.","https://www.oxandfinch.com/",regionImages.glasgow),
  item("The Ubiquitous Chip","A long-established Ashton Lane restaurant associated with modern Scottish cooking.","https://ubiquitouschip.co.uk/",regionImages.glasgow),
  item("Cail Bruich","A refined tasting-menu restaurant in Glasgow’s West End.","https://www.cailbruich.co.uk/",regionImages.glasgow),
  item("Crabshakk","Seafood-led dining in Finnieston.","https://www.crabshakk.com/",regionImages.glasgow),
  item("Paesano Pizza","Informal Neapolitan-style pizza in the city centre.","https://paesanopizza.co.uk/",regionImages.glasgow)
 ],
 camping:[
  item("Red Deer Village Holiday Park","A practical base east of Glasgow with touring pitches.","https://www.reddeervillageholidaypark.co.uk/",regionImages.glasgow),
  item("West Highland Way Campsite","A useful northern gateway for Loch Lomond and the city.","https://www.westhighlandwaycampsite.co.uk/",regionImages.glasgow),
  item("Milarrochy Bay Camping and Caravanning Club Site","A scenic Loch Lomond option for the following night.","https://www.campingandcaravanningclub.co.uk/campsites/uk/glasgow/drymen/milarrochy-bay-club-campsite/",regionImages.lomond)
 ],
 todo:[
  item("Kelvingrove Art Gallery and Museum","A grand civic museum with art, natural history and one of the city’s most memorable interiors.","https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum",regionImages.glasgow),
  item("Glasgow Cathedral and the Necropolis","Explore medieval Glasgow before walking up through the atmospheric Victorian cemetery.",google("Glasgow Cathedral and Necropolis"),regionImages.glasgow),
  item("The Burrell Collection","An internationally significant collection in the landscape of Pollok Country Park.","https://burrellcollection.com/",regionImages.glasgow),
  item("Riverside Museum","Transport, design and social history inside Zaha Hadid’s striking riverside building.","https://www.glasgowlife.org.uk/museums/venues/riverside-museum",regionImages.glasgow),
  item("Live music in the city","End the first night with a gig or intimate live session in one of Glasgow’s celebrated venues.",google("live music Glasgow tonight"),regionImages.glasgow)
 ]
},
{
 id:"lomond", name:"Loch Lomond", dates:"5 August",lat:56.08,lng:-4.58,image:regionImages.lomond,
 intro:"Loch Lomond is the transition from city to Highlands: wooded islands, open water and the first serious mountain silhouettes. Balmaha and Luss offer very different perspectives on the loch, while the eastern shore places you directly on the West Highland Way.",
 hikes:[
  item("Conic Hill","A compact but rewarding ascent above Balmaha with views across the loch’s Highland Boundary Fault islands.",google("Conic Hill trailhead"),"./images/conic-hill.jpg",{difficulty:"Moderate · 2–3 hours"}),
  item("Ben Lomond","A full mountain day and one of Scotland’s best-known Munros. Only suitable in good conditions with proper equipment.",google("Ben Lomond Rowardennan car park"),regionImages.lomond,{difficulty:"Hard · 5–7 hours"}),
  item("Balmaha Millennium Forest Path","A gentler woodland and shoreline option from Balmaha.",google("Balmaha Millennium Forest Path"),regionImages.lomond,{difficulty:"Easy · 1–2 hours"})
 ],
 restaurants:[
  item("The Oak Tree Inn","A popular Balmaha inn for Scottish comfort food after Conic Hill.","https://www.theoaktreeinn.co.uk/",regionImages.lomond),
  item("The Clachan Inn","Historic Drymen pub and restaurant near the southern approach to the loch.","https://www.clachaninndrymen.co.uk/",regionImages.lomond),
  item("Duck Bay Hotel & Restaurant","Waterfront dining with broad views over Loch Lomond.","https://www.duckbay.co.uk/",regionImages.lomond),
  item("The Village Rest","Relaxed café and restaurant in Luss.",google("The Village Rest Luss"),regionImages.lomond),
  item("Inverbeg Inn","Lochside restaurant on the western shore.","https://www.inverbeginn.co.uk/",regionImages.lomond)
 ],
 camping:[
  item("Milarrochy Bay Club Site","Lochside touring pitches near Balmaha.","https://www.campingandcaravanningclub.co.uk/campsites/uk/glasgow/drymen/milarrochy-bay-club-campsite/",regionImages.lomond),
  item("Cashel Campsite","Wooded pitches on the eastern shore with direct loch access.","https://www.campingintheforest.co.uk/scotland/cashel-campsite",regionImages.lomond),
  item("Lomond Woods Holiday Park","A serviced base near Balloch and Loch Lomond Shores.","https://www.woodleisure.co.uk/our-parks/lomond-woods/",regionImages.lomond)
 ],
 todo:[
  item("Conic Hill","Start early for one of the route’s most efficient combinations of effort and panorama.",google("Conic Hill"),regionImages.lomond),
  item("Loch cruise","See the scale of the loch from the water rather than only from the road.","https://www.sweeneyscruises.com/",regionImages.lomond),
  item("Luss conservation village","Walk the stone cottages, pier and shoreline of one of the loch’s best-known villages.",google("Luss Loch Lomond"),regionImages.lomond),
  item("Balmaha and Inchcailloch","Take the small seasonal ferry to a wooded island with short trails and quiet beaches.","https://www.lochlomond-trossachs.org/things-to-do/water-activities/boat-trips/",regionImages.lomond),
  item("Loch Lomond Shores","A practical stop for supplies, design-led shopping and a waterfront walk.",google("Loch Lomond Shores"),regionImages.lomond)
 ]
},
{
 id:"glencoe",name:"Glen Coe",dates:"6 August",lat:56.67,lng:-5.03,image:regionImages.glencoe,
 intro:"Glen Coe is not simply a viewpoint. It is a layered landscape of volcanic geology, clan history, narrow mountain passes and weather that changes the scale of everything. Build the day around one proper walk, then let the road, river and evening atmosphere do the rest.",
 hikes:[
  item("The Lost Valley","A classic path into Coire Gabhail, hidden high between the massifs of Bidean nam Bian.",google("Lost Valley Glencoe car park"),regionImages.glencoe,{difficulty:"Moderate · 3–4 hours"}),
  item("Pap of Glencoe","A steep, shapely summit above the village with extensive views down Loch Leven.",google("Pap of Glencoe trailhead"),regionImages.glencoe,{difficulty:"Hard · 4–5 hours"}),
  item("An Torr and Signal Rock","A short forest walk with local history near Clachaig.",google("Signal Rock Glencoe"),regionImages.glencoe,{difficulty:"Easy · 1 hour"})
 ],
 restaurants:[
  item("Clachaig Inn","The valley’s iconic inn, known for hearty food, local beer and mountaineering atmosphere.","https://clachaig.com/",regionImages.glencoe),
  item("The Laroch","Modern Scottish cooking in Ballachulish.","https://www.thelaroch.com/",regionImages.glencoe),
  item("Lochleven Seafood Café","Seafood beside the loch near Onich.","https://www.lochlevenseafoodcafe.co.uk/",regionImages.glencoe),
  item("Glencoe Café","A practical café stop in the village.",google("Glencoe Cafe"),regionImages.glencoe),
  item("The Holly Tree","Hotel restaurant with Loch Linnhe views.","https://www.hollytreehotel.co.uk/",regionImages.glencoe)
 ],
 camping:[
  item("Invercoe Highland Holidays","A well-positioned campsite between the village and Loch Leven.","https://www.invercoe.co.uk/",regionImages.glencoe),
  item("Red Squirrel Campsite","A simple woodland campsite close to Clachaig and the heart of the glen.","https://redsquirrelcampsite.com/",regionImages.glencoe),
  item("Caolasnacon Caravan & Camping Park","A waterside option near Kinlochleven.","https://www.caolasnacon.co.uk/",regionImages.glencoe)
 ],
 todo:[
  item("Three Sisters viewpoint","The essential road stop, but arrive early and never obstruct passing places or emergency access.",google("Three Sisters viewpoint Glencoe"),"./images/three-sisters.jpg"),
  item("Glen Etive scenic drive","A slow single-track road into a wild glen of waterfalls, deer and film locations.",google("Glen Etive Scotland"),regionImages.glencoe),
  item("Glencoe Folk Museum","A compact museum that gives the landscape its human story.","https://www.glencoemuseum.com/",regionImages.glencoe),
  item("Signal Rock","A short wooded walk associated with the history and legends of the glen.",google("Signal Rock Glencoe"),regionImages.glencoe),
  item("Clachaig Inn evening","Finish with food, local beer and the kind of atmosphere a roadbook cannot recreate.", "https://clachaig.com/","./images/clachaig-inn.jpg")
 ]
},
{
 id:"skye",name:"Isle of Skye",dates:"7–9 August",lat:57.42,lng:-6.27,image:regionImages.skye,
 intro:"Three days allow Skye to become more than a checklist. Separate Trotternish, the west coast and the Cuillin-facing south, leave space for narrow roads, and resist the temptation to cross the island repeatedly.",
 hikes:[
  item("The Quiraing circuit","A spectacular Trotternish walk through pinnacles, cliffs and landslips.",google("Quiraing car park"),regionImages.skye,{difficulty:"Moderate · 3–4 hours"}),
  item("Old Man of Storr","The island’s most recognisable walk, best tackled early before parking pressure builds.",google("Old Man of Storr car park"),"./images/old-man-storr.jpg",{difficulty:"Moderate · 2–3 hours"}),
  item("Fairy Pools","A lower-level walk beneath the Black Cuillin, often busy but visually rewarding.",google("Fairy Pools car park"),regionImages.skye,{difficulty:"Easy–moderate · 2 hours"})
 ],
 restaurants:[
  item("Scorrybreac","Small, refined restaurant above Portree harbour.","https://scorrybreac.com/",regionImages.skye),
  item("The Three Chimneys","Celebrated destination dining in north-west Skye.","https://threechimneys.co.uk/",regionImages.skye),
  item("Sea Breezes","Seafood restaurant overlooking Portree harbour.","https://www.seabreezes-skye.co.uk/",regionImages.skye),
  item("The Oyster Shed","Informal seafood near Talisker and Carbost.","https://www.theoysterman.co.uk/",regionImages.skye),
  item("Cafe Sia","Relaxed pizzas and local food in Broadford.","https://cafesia.co.uk/",regionImages.skye)
 ],
 camping:[
  item("Staffin Campsite","A useful base for Storr, Quiraing and northern Skye.","https://www.staffincampsite.co.uk/",regionImages.skye),
  item("Glenbrittle Campsite","Dramatic coastal setting beneath the Cuillin.","https://www.dunvegancastle.com/glenbrittle/campsite/",regionImages.skye),
  item("Camping Skye","Serviced touring and tent pitches near Broadford.","https://campingskye.com/",regionImages.skye)
 ],
 todo:[
  item("Trotternish loop","Link Storr, Kilt Rock, Staffin and Quiraing without unnecessary backtracking.",google("Trotternish Isle of Skye"),regionImages.skye),
  item("Neist Point","Walk toward the lighthouse for Atlantic cliffs and evening light.",google("Neist Point car park"),regionImages.skye),
  item("Elgol and the Cuillin view","A quieter road with one of the island’s great mountain-and-sea compositions.",google("Elgol Isle of Skye"),regionImages.skye),
  item("Dunvegan Castle","Clan history, gardens and a strong wet-weather alternative.","https://www.dunvegancastle.com/",regionImages.skye),
  item("Portree harbour","Use the island’s main town for supplies, local shops and a relaxed meal by the water.",google("Portree harbour"),regionImages.skye)
 ]
},
{
 id:"hebrides",name:"Harris & Lewis",dates:"10–12 August",lat:58.08,lng:-6.75,image:regionImages.hebrides,
 intro:"The Outer Hebrides are where pace matters most. Harris offers white beaches, mountain roads and polished contemporary craft; Lewis adds prehistoric monuments, blackhouse culture and a northern coast exposed directly to the Atlantic.",
 hikes:[
  item("Toe Head and Northton","A coastal route above machair, tidal sands and the south Harris coastline.",google("Toe Head walk Northton Harris"),regionImages.hebrides,{difficulty:"Moderate · 3–4 hours"}),
  item("Huisinis coastal walk","A beautiful walk beyond the beach toward remote coastline and views across the Minch.",google("Huisinis coastal walk Harris"),regionImages.hebrides,{difficulty:"Moderate"}),
  item("Clisham","The highest mountain in the Outer Hebrides, with a strenuous ascent and wide island views.",google("Clisham trail Harris"),regionImages.hebrides,{difficulty:"Hard · mountain route"})
 ],
 restaurants:[
  item("Harris Hotel Restaurant","Traditional hotel dining in Tarbert.","https://www.harrishotel.com/",regionImages.hebrides),
  item("Flavour","Highly regarded small restaurant on Harris; booking is usually essential.","https://www.flavour.scot/",regionImages.hebrides),
  item("Isle of Harris Brewery & Kitchen","A relaxed Leverburgh stop for locally brewed beer and island food.","https://www.anchoragerestaurant.co.uk/",regionImages.hebrides),
  item("Uig Sands Restaurant","Seasonal dining on Lewis with a strong sense of place.","https://www.uigsands.co.uk/",regionImages.hebrides),
  item("HS-1 Café Bar","A practical Stornoway option for breakfast, lunch or dinner.","https://www.hshotel.co.uk/food-drink/",regionImages.hebrides)
 ],
 camping:[
  item("Horgabost Campsite","Simple beachfront camping on south Harris.","https://www.horgabostcampsite.co.uk/",regionImages.hebrides),
  item("Lickisto Blackhouse Camping","Distinctive camping among traditional blackhouse ruins.","https://www.scottishcampingguide.com/link.php?n=514",regionImages.hebrides),
  item("Eilean Fraoich Camp Site","A serviced base near Shawbost on Lewis.","https://www.eileanfraoich.co.uk/",regionImages.hebrides)
 ],
 todo:[
  item("Luskentyre and Seilebost","Walk the tidal landscape rather than only photographing it from the road.",google("Luskentyre Beach"),"./images/luskentyre.jpg"),
  item("Harris Distillery","Contemporary island design, local stories and the home of Isle of Harris Gin.","https://harrisdistillery.com/",regionImages.hebrides),
  item("Calanais Standing Stones","Experience one of Britain’s most powerful prehistoric landscapes, ideally outside peak hours.","https://www.historicenvironment.scot/visit-a-place/places/calanais-standing-stones/","./images/callanish.jpg"),
  item("Gearrannan Blackhouse Village","Understand how island communities lived in restored traditional houses by the Atlantic coast.","https://www.gearrannan.com/",regionImages.hebrides),
  item("Butt of Lewis","Reach the exposed northern tip for cliffs, seabirds and the Stevenson lighthouse.",google("Butt of Lewis Lighthouse"),regionImages.hebrides)
 ]
},
{
 id:"inverness",name:"Inverness",dates:"13 August",lat:57.4778,lng:-4.2247,image:regionImages.inverness,
 intro:"Inverness is a compact Highland city and a useful reset after the islands. The River Ness and its wooded islands provide an easy walk, while Culloden and Clava Cairns add powerful historical context just beyond the centre.",
 hikes:[
  item("Ness Islands and the Caledonian Canal","A gentle riverside circuit through wooded islands and along the canal.",google("Ness Islands walk Inverness"),regionImages.inverness,{difficulty:"Easy · 1–2 hours"}),
  item("Craig Phadrig","A short woodland hill walk to an Iron Age fort above the city.",google("Craig Phadrig walk"),regionImages.inverness,{difficulty:"Easy–moderate"}),
  item("Abriachan Forest Trails","Woodland trails above Loch Ness west of the city.",google("Abriachan Forest trails"),regionImages.inverness,{difficulty:"Easy–moderate"})
 ],
 restaurants:[
  item("The Mustard Seed","Popular riverside restaurant in a converted church.","https://www.mustardseedrestaurant.co.uk/",regionImages.inverness),
  item("Rocpool","Contemporary dining close to the River Ness.","https://www.rocpoolrestaurant.com/",regionImages.inverness),
  item("The Kitchen Brasserie","Modern Scottish food beside the river.","https://www.kitchenrestaurant.co.uk/",regionImages.inverness),
  item("Cafe 1","Long-running city-centre restaurant focused on Highland produce.","https://www.cafe1.net/",regionImages.inverness),
  item("MacGregor’s","Relaxed Scottish bar, food and live music.","https://www.macgregorsbars.com/",regionImages.inverness)
 ],
 camping:[
  item("Bunchrew Caravan Park","A waterside touring site west of Inverness.","https://www.bunchrew-caravanpark.co.uk/",regionImages.inverness),
  item("Ardtower Caravan Park","A serviced site south of the city.","https://www.ardtower-caravan-park.com/",regionImages.inverness),
  item("Inverness Campervan Park","A practical stop for motorhomes close to the city.","https://www.invernesscampervanpark.com/",regionImages.inverness)
 ],
 todo:[
  item("Culloden Battlefield","A carefully interpreted site that explains the final Jacobite rising and its consequences.","https://www.nts.org.uk/visit/places/culloden","./images/culloden.jpg"),
  item("Clava Cairns","A group of Bronze Age burial cairns and standing stones close to Culloden.",google("Clava Cairns"),regionImages.inverness),
  item("River Ness and Ness Islands","Slow the pace with an easy walk from the city centre.",google("Ness Islands Inverness"),regionImages.inverness),
  item("Victorian Market","Browse independent shops and food inside the restored covered market.","https://www.thevictorianmarket.com/",regionImages.inverness),
  item("Loch Ness south shore","Follow the quieter B862/B852 toward Dores and viewpoints over the loch.",google("Dores Beach Loch Ness"),regionImages.inverness)
 ]
},
{
 id:"cairngorms",name:"The Cairngorms",dates:"14–15 August",lat:57.13,lng:-3.67,image:regionImages.cairngorms,
 intro:"Two days in the Cairngorms should balance forest, water and high ground. Rothiemurchus and Loch an Eilein are accessible introductions; the mountain plateau demands experience, equipment and a conservative reading of conditions.",
 hikes:[
  item("Loch an Eilein circuit","An accessible forest walk around a loch with a ruined island castle.",google("Loch an Eilein car park"),regionImages.cairngorms,{difficulty:"Easy · 1.5–2 hours"}),
  item("Meall a’ Bhuachaille","A rewarding Corbett above Glenmore with excellent views toward the Northern Cairngorms.",google("Meall a Bhuachaille walk Glenmore"),regionImages.cairngorms,{difficulty:"Hard · 4–5 hours"}),
  item("Uath Lochans","Forest trails and viewpoints over a beautiful group of small lochs.",google("Uath Lochans car park"),regionImages.cairngorms,{difficulty:"Easy–moderate"})
 ],
 restaurants:[
  item("The Old Bridge Inn","A lively Aviemore pub with good food beside the River Spey.","https://www.oldbridgeinn.co.uk/",regionImages.cairngorms),
  item("The Winking Owl","Central Aviemore pub and restaurant.","https://www.winkingowl.co.uk/",regionImages.cairngorms),
  item("Mhor 84","Modern roadside food south of the park near Balquhidder.","https://mhor84.net/",regionImages.cairngorms),
  item("The Cross at Kingussie","Small fine-dining restaurant in a converted tweed mill.","https://www.thecross.co.uk/",regionImages.cairngorms),
  item("The Barn at Rothiemurchus","A warm, relaxed stop for breakfast, lunch, cakes and coffee beside the forest trails.","https://rothiemurchus.net/barn-cafe-rothiemurchus/",regionImages.cairngorms)
 ],
 camping:[
  item("Rothiemurchus Camp and Caravan Park","Forest setting close to Aviemore and Rothiemurchus trails.","https://www.rothiemurchus.net/stay/camping-caravanning/",regionImages.cairngorms),
  item("Glenmore Campsite","At the foot of the mountains near Loch Morlich.","https://www.campingintheforest.co.uk/scotland/glenmore-campsite",regionImages.cairngorms),
  item("Dalraddy Holiday Park","Woodland touring pitches south of Aviemore.","https://www.dalraddy.co.uk/",regionImages.cairngorms)
 ],
 todo:[
  item("Loch Morlich","Walk the beach, hire watersports equipment or simply watch the mountain light change across the water.",google("Loch Morlich Beach"),"./images/loch-morlich.jpg"),
  item("Rothiemurchus Forest","Explore remnants of the Caledonian pine forest on foot or by bike.","https://www.rothiemurchus.net/",regionImages.cairngorms),
  item("Highland Wildlife Park","A family-friendly wildlife experience near Kincraig.","https://www.highlandwildlifepark.org.uk/",regionImages.cairngorms),
  item("Strathspey Railway","A heritage rail journey between Aviemore, Boat of Garten and Broomhill.","https://strathspeyrailway.co.uk/",regionImages.cairngorms),
  item("Cairngorm Mountain","Use the mountain as a viewpoint and visitor experience, while treating plateau walks as serious mountain terrain.","https://www.cairngormmountain.co.uk/",regionImages.cairngorms)
 ]
},
{
 id:"central",name:"Fife, Stirling, Culross & Crail",dates:"16 August",lat:56.09,lng:-3.72,image:regionImages.central,
 intro:"This is the route’s most historically concentrated day: royal Stirling, the planned streets of Culross, Crail’s working harbour and the wider coastal character of Fife, framed by dramatic monuments rising from the central lowlands. Keep the route selective rather than trying to absorb every castle in one day.",
 hikes:[
  item("Dollar Glen","Woodland paths and waterfalls beneath Castle Campbell.",google("Dollar Glen National Trust Scotland"),regionImages.central,{difficulty:"Moderate · 2 hours"}),
  item("Lomond Hills and East Lomond","A short hill walk with wide views across Fife.",google("East Lomond walk"),regionImages.central,{difficulty:"Moderate"}),
  item("Devilla Forest","Easy forest trails near Culross with lochs and wildlife.",google("Devilla Forest walks"),regionImages.central,{difficulty:"Easy"})
 ],
 restaurants:[
  item("The Portcullis","Traditional pub below Stirling Castle.","https://www.theportcullis-stirling.co.uk/",regionImages.stirling),
  item("Brea","Modern Scottish restaurant in Stirling.","https://www.brea-stirling.co.uk/",regionImages.stirling),
  item("The Kinneuchar Inn","Seasonal cooking in the East Neuk of Fife.","https://kinneucharinn.com/",regionImages.crail),
  item("The Red Lion Inn, Culross","Historic village pub and restaurant.","https://redlionculross.co.uk/",regionImages.culross),
  item("The Boathouse, Kilsyth","Waterside food near the Forth and Clyde Canal.","https://www.theboathousekilsyth.com/",regionImages.central)
 ],
 camping:[
  item("Witches Craig Caravan & Camping Park","A scenic base below the Ochil Hills near Stirling.","https://www.witchescraig.co.uk/",regionImages.stirling),
  item("The Woods Caravan Park","Touring site near Alva and Stirling.","https://www.thewoodscaravanpark.co.uk/",regionImages.stirling),
  item("Silverdyke Park","A coastal touring option in the East Neuk of Fife.","https://www.silverdykepark.co.uk/",regionImages.central)
 ],
 todo:[
  item("Stirling Castle","A major royal stronghold where architecture, landscape and national history meet.","https://www.stirlingcastle.scot/","./images/stirling-castle.jpg"),
  item("The National Wallace Monument","Climb the tower for views across Stirling and the site of the Battle of Stirling Bridge.","https://www.nationalwallacemonument.com/",regionImages.stirling),
  item("Culross village and palace","Walk the steep cobbled streets and ochre palace of one of Scotland’s best-preserved historic burghs.","https://www.nts.org.uk/visit/places/culross",regionImages.culross),
  item("The Kelpies","See Andy Scott’s monumental horse heads beside the Forth and Clyde Canal.","https://www.thehelix.co.uk/things-to-do/the-kelpies/",regionImages.central),
  item("Crail harbour and the East Neuk","Walk around Crail’s working harbour, then continue through the East Neuk for stone villages, seafood and the Fife Coastal Path.",google("Crail Harbour Fife"),regionImages.crail)
 ]
},
{
 id:"edinburgh",name:"Edinburgh",dates:"17–19 August",lat:55.9533,lng:-3.1883,image:regionImages.edinburgh,
 intro:"Three nights during the Fringe transform Edinburgh into a city-sized stage. Build each day around one major historic sight, one neighbourhood walk and a small number of pre-booked performances, leaving room for spontaneous discoveries.",
 hikes:[
  item("Arthur’s Seat","A volcanic summit rising directly above the city, with extensive views over the Forth and Old Town.",google("Arthur's Seat Edinburgh"),regionImages.edinburgh,{difficulty:"Moderate · 2 hours"}),
  item("Water of Leith Walkway","A quieter urban trail through Dean Village and Stockbridge.",google("Water of Leith Dean Village"),regionImages.edinburgh,{difficulty:"Easy"}),
  item("Blackford Hill","A shorter alternative with a classic panorama toward the castle and Arthur’s Seat.",google("Blackford Hill Edinburgh"),regionImages.edinburgh,{difficulty:"Easy–moderate"})
 ],
 restaurants:[
  item("The Gardener’s Cottage","Seasonal cooking in a small cottage beside London Road Gardens.","https://www.thegardenerscottage.co/",regionImages.edinburgh),
  item("Dishoom Edinburgh","Bombay-inspired dining in St Andrew Square.","https://www.dishoom.com/edinburgh/",regionImages.edinburgh),
  item("The Scran & Scallie","Modern Scottish gastropub in Stockbridge.","https://scranandscallie.com/",regionImages.edinburgh),
  item("Timberyard","Ingredient-led tasting menus in a converted warehouse.","https://www.timberyard.co/",regionImages.edinburgh),
  item("Ondine","Seafood restaurant near the Royal Mile.","https://www.ondinerestaurant.co.uk/",regionImages.edinburgh)
 ],
 camping:[
  item("Mortonhall Caravan & Camping Park","A large, established campsite with public transport into the centre.","https://www.meadowhead.co.uk/parks/mortonhall/",regionImages.edinburgh),
  item("Edinburgh Caravan and Motorhome Club Campsite","A coastal site with access toward the city.","https://www.caravanclub.co.uk/club-sites/scotland/edinburgh/edinburgh-club-campsite/",regionImages.edinburgh),
  item("Drummohr Camping and Glamping Site","A well-equipped site east of Edinburgh.","https://www.drummohr.co.uk/",regionImages.edinburgh)
 ],
 todo:[
  item("Edinburgh Fringe Festival","Build a flexible programme of theatre, comedy, music, dance and street performance across the city.","https://www.edfringe.com/","./images/edinburgh-fringe.jpg"),
  item("Edinburgh Castle","Explore the fortress, crown jewels and the city’s most commanding viewpoint.","https://www.edinburghcastle.scot/",regionImages.edinburgh),
  item("The Royal Mile and closes","Look beyond the main street into narrow closes, courtyards and layered Old Town history.",google("Royal Mile Edinburgh"),regionImages.edinburgh),
  item("National Museum of Scotland","A vast, free museum that works equally well as a planned highlight or weatherproof escape.","https://www.nms.ac.uk/national-museum-of-scotland/",regionImages.edinburgh),
  item("Leith evening","Finish by the Shore with restaurants, bars and a different rhythm from the Old Town.",google("The Shore Leith Edinburgh"),regionImages.edinburgh)
 ]
}
];


function isGoogleLink(url){return typeof url === "string" && url.includes("google.com/maps")}
regions.forEach(region=>{
  const officialRegionSource=regionSources[region.id];
  region.source=officialRegionSource;
  region.hikes.forEach(hike=>{
    const meta=trailData[hike.name]||{};
    const originalName=hike.name;
    Object.assign(hike,meta,{type:"Walk",regionId:region.id,regionName:region.name,originalName});
    if(meta.displayName)hike.name=meta.displayName;
    hike.maps=google(meta.trailhead||`${hike.name} trailhead ${region.name}`);
    hike.photoLabel=exactPhotoNames.has(originalName)||exactPhotoNames.has(hike.name)?"Specific destination image":"Regional editorial image";
  });
  region.restaurants.forEach(place=>{
    place.type="Restaurant";place.regionId=region.id;place.regionName=region.name;
    place.maps=google(`${place.name} ${region.name}`);
    place.official=isGoogleLink(place.link)?null:place.link;
    place.menu=menuOverrides[place.name]||place.official;
    place.photoLabel=exactPhotoNames.has(place.name)?"Specific venue image":"Regional editorial image";
  });
  region.camping.forEach(place=>{
    place.type="Campsite";place.regionId=region.id;place.regionName=region.name;
    place.maps=google(`${place.name} ${region.name}`);
    place.official=isGoogleLink(place.link)?null:place.link;
    place.booking=place.official;
    place.photoLabel="Regional editorial image";
  });
  region.todo.forEach(place=>{
    place.type="Experience";place.regionId=region.id;place.regionName=region.name;
    place.maps=google(`${place.name} ${region.name}`);
    place.official=isGoogleLink(place.link)?null:place.link;
    place.photoLabel=exactPhotoNames.has(place.name)?"Specific destination image":"Regional editorial image";
  });
});

const itinerary = [
 ["4 Aug","Glasgow","Arrival, architecture, museums and live music.","glasgow",55.8642,-4.2518],
 ["5 Aug","Loch Lomond","Leave the city behind for Conic Hill, the loch and a first night close to the water.","lomond",56.08,-4.58],
 ["6 Aug","Glen Coe","A dramatic Highland day built around one walk, major viewpoints and an evening at Clachaig.","glencoe",56.67,-5.03],
 ["7 Aug","Isle of Skye","Travel to Skye and explore the south or settle into Portree.","skye",57.25,-6.26],
 ["8 Aug","Isle of Skye","Trotternish: Storr, Quiraing and the island’s most sculptural landscapes.","skye",57.55,-6.27],
 ["9 Aug","Isle of Skye","West coast, Dunvegan, Neist Point and a slower final evening.","skye",57.43,-6.56],
 ["10 Aug","Harris & Lewis","Ferry to Tarbert and first encounters with Harris beaches and island design.","hebrides",57.90,-6.91],
 ["11 Aug","Harris & Lewis","South Harris, Luskentyre, Seilebost and the road toward Huisinis.","hebrides",57.93,-6.98],
 ["12 Aug","Harris & Lewis","Lewis: Calanais, Gearrannan, the Atlantic coast and Stornoway.","hebrides",58.25,-6.62],
 ["13 Aug","Inverness","Return to the mainland and reset beside the River Ness.","inverness",57.4778,-4.2247],
 ["14 Aug","The Cairngorms","Rothiemurchus, Loch Morlich and forest trails.","cairngorms",57.14,-3.68],
 ["15 Aug","The Cairngorms","A second day for wildlife, railway heritage or a more ambitious walk.","cairngorms",57.06,-3.60],
 ["16 Aug","Fife, Stirling, Culross & Crail","Royal history, preserved streets, coastal character and central Scotland landmarks.","central",56.09,-3.72],
 ["17 Aug","Edinburgh","Arrive during the Fringe and begin with the Old Town.","edinburgh",55.9533,-3.1883],
 ["18 Aug","Edinburgh","Castle, museums, performances and neighbourhood dining.","edinburgh",55.9533,-3.1883],
 ["19 Aug","Edinburgh","A final full day for Arthur’s Seat, Leith and spontaneous Fringe discoveries.","edinburgh",55.9533,-3.1883],
 ["20 Aug","Journey home","Departure day.","edinburgh",55.9533,-3.1883]
].map((d,i)=>({id:i,date:d[0],place:d[1],summary:d[2],region:d[3],lat:d[4],lng:d[5]}));



const commonsFile = file => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1800`;
const hikeVisuals = {
  "Kelvin Walkway":["Kelvin Way, Glasgow (geograph 7260984).jpg","Kelvin Way Bridge, Glasgow (geograph 6933560).jpg"],
  "Cathkin Braes":["Cathkin Braes Country Park - the viewpoint - geograph.org.uk - 948726.jpg","View north across Glasgow from the Cathkin Braes - geograph.org.uk - 1498290.jpg"],
  "The Whangie":["The Whangie - geograph.org.uk - 4835163.jpg","The Whangie and Auchineden Hill - geograph.org.uk - 3984670.jpg"],
  "Conic Hill":["Loch Lomond Balmaha.jpg","Conic Hill.jpg"],
  "Ben Lomond":["Path up Ben Lomond north of Sron Aonaich - geograph.org.uk - 1320254.jpg","Ptarmigan ridge, Ben Lomond - geograph.org.uk - 2033141.jpg"],
  "Balmaha Millennium Forest Path":["South Bay, Inchcailloch, Loch Lomond - geograph.org.uk - 86027.jpg","Inchcailloch Island, Loch Lomond - geograph.org.uk - 231586.jpg"],
  "The Lost Valley":["The Lost Valley, Glencoe, Scotland.jpg","Coire Gabhail access from Glen Coe.jpg"],
  "Pap of Glencoe":["Pap of Glencoe 20090602.jpg","Glencoe Lochan and the Pap of Glencoe - geograph.org.uk - 3748754.jpg"],
  "An Torr and Signal Rock":["Signal Rock, Glencoe - geograph.org.uk - 4673915.jpg","The Signal Rock, Glencoe - geograph.org.uk - 7250080.jpg"],
  "The Quiraing circuit":["The Quiraing, Isle of Skye, Scotland - 53727949129.jpg","The Quiraing.jpg"],
  "Old Man of Storr":["LOCAL:./images/old-man-storr.jpg","Old Man of Storr - geograph.org.uk - 2368802.jpg"],
  "Fairy Pools":["Fairy Pools, Isle of Skye, Highland.jpg","20210818 Fairy Pools-9391.jpg"],
  "Toe Head and Northton":["Traigh Scarista from Toe Head - geograph.org.uk - 3226387.jpg","Northton from the Toe of Harris - geograph.org.uk - 5423086.jpg"],
  "Huisinis coastal walk":["Traigh Hushinish - geograph.org.uk - 1926593.jpg","On the B887 road to Huisinis - geograph.org.uk - 4749409.jpg"],
  "Clisham":["Ardhasaig with Clisham, Isle of Harris (13567370923).jpg","West Loch Tarbert from Clisham.jpg"],
  "Ness Islands and the Caledonian Canal":["Ness Islands and River Ness at Inverness Scotland (4047653995).jpg","River Ness at Ness Islands Inverness Scotland.jpg"],
  "Craig Phadrig":["Remains of Craig Phadraig Hill Fort - geograph.org.uk - 6787988.jpg","Footpath entering Craig Phadraig Forest - geograph.org.uk - 6019300.jpg"],
  "Abriachan Forest Trails":["Abriachan Forest Cycle path near Great Glen Way - geograph.org.uk - 2028815.jpg","Loch Laide - geograph.org.uk - 166617.jpg"],
  "Loch an Eilein circuit":["Loch an Eilein Castle 01.jpg","Loch an Eilein and part of the Rothiemurchus Forest (48101513176).jpg"],
  "Meall a’ Bhuachaille":["Meall a'Bhuachaille (Caingorms National Park).jpg","A path on Meall a' Bhuachaille - geograph.org.uk - 3156219.jpg"],
  "Uath Lochans":["Uath Lochans - geograph.org.uk - 6874755.jpg","Duckboard path - geograph.org.uk - 1469884.jpg"],
  "Dollar Glen":["Castle Campbell, Dollar Glen - geograph.org.uk - 4788477.jpg","Dollar Glen - geograph.org.uk - 1242168.jpg"],
  "Lomond Hills and East Lomond":["Track to West Lomond - geograph.org.uk - 7953391.jpg","West Lomond - geograph.org.uk - 6875137.jpg"],
  "Devilla Forest":["Dyke, Devilla Forest - geograph.org.uk - 6595128.jpg","Devilla Forest - geograph.org.uk - 277989.jpg"],
  "Arthur’s Seat":["Arthur's Seat from the east, Holyrood Park, Edinburgh.jpg","Edinburgh view from Arthur's Seat.jpg"],
  "Water of Leith Walkway":["Water of Leith Walkway - geograph.org.uk - 8214004.jpg","Water of Leith Walkway (14006730258).jpg"],
  "Blackford Hill":["Edinburgh From Blackford Hill.jpg","Blackford Hill - geograph.org.uk - 6719337.jpg"]
};

const richExperience = {
  "Culloden Battlefield":{
    lead:"Stand on the ground where the final Jacobite rising reached its devastating conclusion in 1746. Culloden is both a battlefield and a carefully interpreted national story, combining an immersive visitor centre with paths across the moor.",
    bullets:["Immersive exhibition and battlefield film","Marked walking routes across the battlefield","Clan stones and memorial cairn","Café, shop and indoor facilities"],
    duration:"Allow 2–3 hours",best:"History, culture and mixed weather"
  },
  "Dunvegan Castle":{
    lead:"The ancestral home of Clan MacLeod brings together eight centuries of island history, formal rooms, extensive gardens and a dramatic setting above Loch Dunvegan.",
    bullets:["Historic interiors and clan collections","Woodland, water and formal gardens","Seasonal boat trips and seal encounters","Strong option when mountain weather closes in"],
    duration:"Allow 2–4 hours",best:"History, gardens and families"
  },
  "Calanais Standing Stones":{
    lead:"A prehistoric stone complex older than Stonehenge, set within an open Lewis landscape where the monument, sky and changing Atlantic light become part of the experience.",
    bullets:["Walk directly among the main stone circle","Explore nearby satellite stone groups","Visit outside peak hours for atmosphere","Combine with west Lewis coast and Gearrannan"],
    duration:"Allow 1–2 hours",best:"Archaeology, landscape and photography"
  },
  "Edinburgh Fringe Festival":{
    lead:"For three weeks Edinburgh becomes the world’s largest performing-arts stage. Comedy, theatre, dance, music and street performance spill across hundreds of venues and public spaces.",
    bullets:["Book one or two must-see shows per day","Leave space for spontaneous discoveries","Use venue clusters to reduce walking","Combine performances with neighbourhood dining"],
    duration:"Half day to several days",best:"Culture, nightlife and atmosphere"
  },
  "Stirling Castle":{
    lead:"One of Scotland’s most important royal strongholds, positioned above the meeting point of Highlands and Lowlands with restored palace rooms, military history and commanding views.",
    bullets:["Royal Palace and Renaissance interiors","Great Hall and castle ramparts","Views toward the Wallace Monument","Exhibitions suitable for families"],
    duration:"Allow 2–3 hours",best:"Royal history and architecture"
  },
  "Three Sisters viewpoint":{
    lead:"A front-row view into the scale of Glen Coe. The ridges of Beinn Fhada, Gearr Aonach and Aonach Dubh rise directly from the valley and frame the approach to the Lost Valley.",
    bullets:["Arrive early before parking fills","Use only marked parking areas","Best in shifting side light","Pairs naturally with the Lost Valley walk"],
    duration:"20–45 minutes",best:"Landscape, photography and road-trip drama"
  },
  "Luskentyre and Seilebost":{
    lead:"An immense tidal landscape of white shell sand, turquoise shallows and Harris mountains. The character changes completely with tide, cloud and light.",
    bullets:["Check tides before long shoreline walks","Use marked access and protect machair","Combine viewpoints at Seilebost and Luskentyre","Allow time rather than treating it as a photo stop"],
    duration:"Allow 2–4 hours",best:"Beaches, walking and photography"
  }
};

function imageUrl(v){return v?.startsWith('LOCAL:')?v.slice(6):commonsFile(v)}
function mapEmbed(q){return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`}
function openTableSearch(x){return `https://www.google.com/search?q=${encodeURIComponent(`site:opentable.co.uk ${x.name} ${x.regionName}`)}`}
function forkSearch(x){return `https://www.google.com/search?q=${encodeURIComponent(`site:thefork.co.uk ${x.name} ${x.regionName}`)}`}
function applyMedia(){
  regions.forEach(r=>{
    r.hikes.forEach(x=>{
      const values=hikeVisuals[x.originalName]||[];
      x.gallery=values.map(imageUrl);
      if(x.gallery.length)x.image=x.gallery[0];
    });
    [...r.restaurants,...r.camping].forEach(x=>{x.gallery=[]});
    r.todo.forEach(x=>{x.gallery=x.image&&x.image!==r.image?[x.image]:[]});
  });
}
applyMedia();

const state={
  view:"home",day:0,saved:new Set(JSON.parse(localStorage.getItem("srSaved")||"[]")),
  compare:new Set(JSON.parse(localStorage.getItem("srCompare")||"[]")),
  planned:new Set(JSON.parse(localStorage.getItem("srPlanned")||"[]")),
  notes:JSON.parse(localStorage.getItem("srNotes")||"{}"),map:null,markers:[],regionQuery:"",galleryIndex:0
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>\"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function allItems(){return regions.flatMap(r=>[...r.hikes,...r.restaurants,...r.camping,...r.todo])}
function findItem(name){return allItems().find(x=>x.name===name||x.originalName===name)}
function persist(){
 localStorage.setItem("srSaved",JSON.stringify([...state.saved]));
 localStorage.setItem("srCompare",JSON.stringify([...state.compare]));
 localStorage.setItem("srPlanned",JSON.stringify([...state.planned]));
 localStorage.setItem("srNotes",JSON.stringify(state.notes));
 $("#savedCount").textContent=state.saved.size;
 const cc=$("#compareCount");if(cc)cc.textContent=state.compare.size;
 const cb=$("#compareButton");if(cb)cb.hidden=state.compare.size===0;
}
function showView(name){
 state.view=name;$$('.view').forEach(v=>{v.hidden=true;v.classList.remove('active')});
 const el=$(`#${name}View`);el.hidden=false;el.classList.add('active');
 $$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
 window.scrollTo({top:0,behavior:'smooth'});if(name==='map')setTimeout(initMap,80);
}
function regionCard(r){return `<button class="region-card" data-region="${r.id}"><img src="${r.image}" alt="${esc(r.name)}" loading="lazy"><span class="region-card-copy"><span class="kicker light">${r.dates}</span><h3>${r.name}</h3><p>${r.intro.slice(0,145)}…</p><span class="region-card-proof">3 walks · 5 restaurants · 3 campsites · 5 experiences</span></span></button>`}
function renderRegions(q=state.regionQuery){state.regionQuery=q.trim().toLowerCase();$("#homeRegions").innerHTML=regions.slice(0,5).map(regionCard).join('');const filtered=regions.filter(r=>`${r.name} ${r.intro} ${r.hikes.map(x=>x.name).join(' ')} ${r.todo.map(x=>x.name).join(' ')}`.toLowerCase().includes(state.regionQuery));$("#regionGrid").innerHTML=filtered.length?filtered.map(regionCard).join(''):'<p class="empty-state">No guide matches that search.</p>';const c=$("#regionResultCount");if(c)c.textContent=`${filtered.length} regional guides`}
function metric(label,value){return value?`<span><small>${label}</small><strong>${value}</strong></span>`:''}
function concise(x){return x.description.length>120?`${x.description.slice(0,117)}…`:x.description}
function mediaPreview(x){
 if(x.type==='Walk'&&x.image)return `<img src="${x.image}" alt="${esc(x.name)}" loading="lazy" onerror="this.closest('.card-media').classList.add('media-failed')">`;
 if(x.type==='Experience'&&x.gallery?.length)return `<img src="${x.gallery[0]}" alt="${esc(x.name)}" loading="lazy">`;
 return `<iframe title="Map preview for ${esc(x.name)}" src="${mapEmbed(`${x.name} ${x.regionName}`)}" loading="lazy" tabindex="-1"></iframe>`;
}
function cardFacts(x){
 if(x.type==='Walk')return `<div class="micro-facts"><span>★ ${x.rating||'—'}</span><span>${x.level||'—'}</span><span>${x.distance||'—'}</span></div>`;
 if(x.type==='Restaurant')return `<div class="micro-facts"><span>Menu</span><span>Maps & reviews</span><span>Booking</span></div>`;
 if(x.type==='Campsite')return `<div class="micro-facts"><span>Campervan base</span><span>Availability</span><span>Live map</span></div>`;
 return `<div class="micro-facts"><span>Official info</span><span>Live map</span><span>Plan visit</span></div>`;
}
function itemCard(x,i){return `<article class="planner-card"><div class="card-media">${mediaPreview(x)}</div><div class="planner-card-body"><div class="rec-topline"><span>${String(i+1).padStart(2,'0')}</span><em>${x.type}</em></div><h4>${x.name}</h4><p>${concise(x)}</p>${cardFacts(x)}<button class="button ink small" data-item="${encodeURIComponent(x.name)}">Read more</button></div></article>`}
function carouselSection(title,sub,items,id){return `<section class="category-carousel"><header><div><p class="kicker">${sub}</p><h3>${title}</h3></div><div class="rail-controls"><button data-rail="${id}" data-dir="-1" aria-label="Previous">←</button><button data-rail="${id}" data-dir="1" aria-label="Next">→</button></div></header><div class="planner-rail" id="${id}">${items.map(itemCard).join('')}</div></section>`}
function openRegion(id){
 const r=regions.find(x=>x.id===id);if(!r)return;
 openSheet(`<div class="region-hero"><img src="${r.image}" alt="${esc(r.name)}"><div><p class="kicker light">${r.dates}</p><h2>${r.name}</h2><p>${r.intro}</p></div></div><div class="region-deep"><nav class="jump-nav"><a href="#walks-${r.id}">Walks</a><a href="#food-${r.id}">Restaurants</a><a href="#camp-${r.id}">Campsites</a><a href="#todo-${r.id}">Things to do</a></nav>${carouselSection('Three walks','MOVE THROUGH THE LANDSCAPE',r.hikes,`walks-${r.id}`)}${carouselSection('Five places to eat','FOOD WORTH A DETOUR',r.restaurants,`food-${r.id}`)}${carouselSection('Three practical bases','SLEEP CLOSE TO THE ROUTE',r.camping,`camp-${r.id}`)}${carouselSection('Five things to do','BUILD THE DAY',r.todo,`todo-${r.id}`)}<div class="region-official"><span>Plan with the destination authority</span><a href="${r.source.url}" target="_blank" rel="noopener">${r.source.name} →</a></div></div>`);
}
function hikeFacts(x){return `<div class="fact-grid">${metric('RATING',`★ ${x.rating||'—'}`)}${metric('REVIEWS',x.reviews||'—')}${metric('LEVEL',x.level||'—')}${metric('DISTANCE',x.distance||'—')}${metric('ASCENT',x.elevation||'—')}${metric('TIME',x.time||'—')}</div>`}
function gallerySlides(x){
 const slides=[];
 (x.gallery||[]).forEach((src,i)=>slides.push(`<figure class="media-slide"><img src="${src}" alt="${esc(x.name)} view ${i+1}"><figcaption>${x.name}</figcaption></figure>`));
 slides.push(`<figure class="media-slide map-slide"><iframe title="Map of ${esc(x.name)}" src="${mapEmbed(`${x.name} ${x.regionName}`)}" loading="lazy"></iframe><figcaption>Live map · zoom and explore the surrounding area</figcaption></figure>`);
 if(x.type==='Walk')slides.push(`<figure class="media-slide source-slide"><div><p class="kicker">TRAIL COMMUNITY</p><h3>Live route, recent conditions and walker photos</h3><p>Open the exact route on AllTrails for the latest community updates and full trail gallery.</p><a href="${x.allTrails}" target="_blank" rel="noopener" class="button ink">Open AllTrails</a></div></figure>`);
 else if(x.official)slides.push(`<figure class="media-slide source-slide"><div><p class="kicker">OFFICIAL PLACE</p><h3>Current information from the operator</h3><p>Use the official website for opening hours, facilities, menus and booking information.</p><a href="${x.official}" target="_blank" rel="noopener" class="button ink">Open official website</a></div></figure>`);
 return slides;
}
function mediaGallery(x){const slides=gallerySlides(x);return `<div class="media-gallery" data-gallery><div class="media-track">${slides.join('')}</div><button class="gallery-prev" data-gallery-step="-1" aria-label="Previous image">←</button><button class="gallery-next" data-gallery-step="1" aria-label="Next image">→</button><div class="gallery-dots">${slides.map((_,i)=>`<button class="${i===0?'active':''}" data-gallery-dot="${i}" aria-label="Go to slide ${i+1}"></button>`).join('')}</div></div>`}
function generatedPlan(x){
 if(x.type==='Walk'){
  const hard=x.level==='Hard';return {lead:`${x.description} The route is best treated as a complete outdoor plan: parking, weather, daylight and the return journey all matter.`,bullets:[`Start from the linked trailhead and confirm the exact route before setting out`,hard?'Carry full mountain equipment and turn back early if conditions deteriorate':'Wear supportive footwear and expect uneven or wet ground',`Check recent conditions and access notes on AllTrails`,`Leave enough time for stops, photos and changing weather`],duration:x.time||'Check live route',best:`${x.level||'Outdoor'} walking · ${x.distance||'route details'}`};
 }
 if(x.type==='Restaurant')return {lead:`${x.description} Use the live place page to confirm service times, availability and the latest menu before building it into the day.`,bullets:["Check the official menu before travelling","Reserve ahead for small or destination restaurants","Use Google Maps for current opening hours and recent photos","Allow additional time when dining on ferry or island days"],duration:'Allow 1–2 hours',best:'A planned meal, local produce and a break from the road'};
 if(x.type==='Campsite')return {lead:`${x.description} Treat the campsite as part of the route design: arrival time, vehicle access and the following morning’s direction can matter as much as the facilities.`,bullets:["Confirm campervan length and pitch type","Check electric hook-up, water, showers and waste facilities","Review arrival windows and late check-in rules","Book early for Skye, Harris and festival dates"],duration:'Overnight base',best:'Campervan logistics and access to nearby highlights'};
 return richExperience[x.originalName||x.name]||richExperience[x.name]||{lead:`${x.description} This stop adds context and character to the route rather than functioning as a quick pin on a map.`,bullets:["Read the official information before arrival","Check current opening hours or access","Allow enough time to experience the place rather than only photograph it","Combine it with nearby stops to reduce unnecessary driving"],duration:'Allow 1–3 hours',best:'A deeper sense of place'};
}
function linkButtons(x){
 const a=[];
 if(x.type==='Walk'){a.push(`<a href="${x.allTrails}" target="_blank" rel="noopener">View trail on AllTrails</a>`,`<a href="${x.maps}" target="_blank" rel="noopener">Trailhead in Google Maps</a>`)}
 else if(x.type==='Restaurant'){if(x.official)a.push(`<a href="${x.official}" target="_blank" rel="noopener">Official website</a>`);if(x.menu)a.push(`<a href="${x.menu}" target="_blank" rel="noopener">Menu & booking</a>`);a.push(`<a href="${x.maps}" target="_blank" rel="noopener">Google Maps & photos</a>`,`<a href="${openTableSearch(x)}" target="_blank" rel="noopener">Check OpenTable</a>`,`<a href="${forkSearch(x)}" target="_blank" rel="noopener">Check TheFork</a>`)}
 else if(x.type==='Campsite'){if(x.official)a.push(`<a href="${x.official}" target="_blank" rel="noopener">Official campsite</a>`);a.push(`<a href="${x.maps}" target="_blank" rel="noopener">Map, directions & photos</a>`)}
 else {if(x.official)a.push(`<a href="${x.official}" target="_blank" rel="noopener">Official information</a>`);a.push(`<a href="${x.maps}" target="_blank" rel="noopener">Google Maps & photos</a>`)}
 return `<div class="external-links">${a.join('')}</div>`;
}
function openItem(x){
 const plan=generatedPlan(x),saved=state.saved.has(x.name),planned=state.planned.has(x.name),note=state.notes[x.name]||'';
 openSheet(`${mediaGallery(x)}<div class="item-deep"><div class="item-title"><p class="kicker">${x.type.toUpperCase()} · ${x.regionName}</p><h2>${x.name}</h2><p>${plan.lead}</p></div>${x.type==='Walk'?hikeFacts(x):`<div class="fact-grid">${metric('TIME',plan.duration)}${metric('BEST FOR',plan.best)}${metric('LOCATION',x.regionName)}</div>`}<div class="detail-columns"><section><h3>What to expect</h3><ul class="expect-list">${plan.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>${linkButtons(x)}</section><aside class="planner-tools"><h3>Add it to the roadbook</h3><button class="button ${saved?'gold':'outline'}" data-save="${encodeURIComponent(x.name)}">${saved?'Saved':'Save recommendation'}</button><button class="button ${planned?'gold':'outline'}" data-plan="${encodeURIComponent(x.name)}">${planned?'Added to plan':'Add to plan'}</button>${x.type==='Walk'?`<button class="button outline" data-compare="${encodeURIComponent(x.name)}">${state.compare.has(x.name)?'Remove comparison':'Compare walk'}</button>`:''}<label>Personal note<textarea data-note="${encodeURIComponent(x.name)}" placeholder="Parking, booking, timing or something to remember…">${esc(note)}</textarea></label></aside></div></div>`);
 setTimeout(()=>initGallery(),0);
}
function initGallery(){const g=$('[data-gallery]');if(!g)return;state.galleryIndex=0;updateGallery(g)}
function updateGallery(g){const slides=$$('.media-slide');if(!slides.length)return;state.galleryIndex=(state.galleryIndex+slides.length)%slides.length;g.querySelector('.media-track').style.transform=`translateX(-${state.galleryIndex*100}%)`;g.querySelectorAll('[data-gallery-dot]').forEach((d,i)=>d.classList.toggle('active',i===state.galleryIndex))}
function openCompare(){const walks=[...state.compare].map(findItem).filter(Boolean);openSheet(`<div class="item-deep"><p class="kicker">WALK COMPARISON</p><h2>Choose the right day on foot.</h2>${walks.length?`<div class="compare-grid">${walks.map(x=>`<article>${x.image?`<img src="${x.image}" alt="${esc(x.name)}">`:''}<h3>${x.name}</h3>${hikeFacts(x)}<button class="button ink small" data-item="${encodeURIComponent(x.name)}">Read more</button></article>`).join('')}</div>`:'<p>No walks selected.</p>'}</div>`)}
function openSheet(html){$('#sheetContent').innerHTML=html;$('#sheet').classList.add('open');$('#sheet').setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeSheet(){$('#sheet').classList.remove('open');$('#sheet').setAttribute('aria-hidden','true');document.body.style.overflow=''}
function directionsUrl(i){const c=itinerary[i],n=itinerary[Math.min(i+1,itinerary.length-1)];return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(c.place+' Scotland')}&destination=${encodeURIComponent(n.place+' Scotland')}`}
function renderPlan(){
 $('#dayTabs').innerHTML=itinerary.map((d,i)=>`<button class="day-tab ${i===state.day?'active':''}" data-day="${i}"><small>${d.date}</small><strong>${d.place}</strong></button>`).join('');
 const d=itinerary[state.day],r=regions.find(x=>x.id===d.region),activities=r?[r.hikes[0],r.todo[0],r.todo[1],r.restaurants[0]]:[];
 $('#dayPanel').innerHTML=`<div class="day-cover"><img src="${r?r.image:regionImages.edinburgh}" alt="${esc(d.place)}"><div class="day-cover-copy"><p class="kicker light">DAY ${String(state.day+1).padStart(2,'0')} · ${d.date}</p><h2>${d.place}</h2><div class="day-meta"><span>${d.summary}</span></div></div></div><div class="day-body"><section><div class="category-heading"><h3>Recommended focus</h3>${state.day<itinerary.length-1?`<a class="button outline" href="${directionsUrl(state.day)}" target="_blank" rel="noopener">Driving route</a>`:''}</div><div class="itinerary-cards">${activities.map(itemCard).join('')}</div></section><aside class="day-note"><p class="kicker">ROAD NOTE</p><h3>${d.place}</h3><p>${r?r.intro:d.summary}</p>${r?`<button class="button ink" data-region="${r.id}">Open complete guide</button>`:''}</aside></div>`;
}
function initMap(){
 const node=$('#map');if(typeof L==='undefined'){node.innerHTML='<div class="map-error"><strong>The live map could not load.</strong><span>Reload with an internet connection.</span></div>';return}
 if(state.map){state.map.invalidateSize();return}
 state.map=L.map('map',{zoomControl:true,scrollWheelZoom:true,wheelPxPerZoomLevel:50,zoomSnap:.25,preferCanvas:true}).setView([57.1,-4.8],6);
 const light=L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:20,attribution:'© OpenStreetMap © CARTO'}).addTo(state.map);
 const topo=L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{maxZoom:17,attribution:'© OpenStreetMap contributors · OpenTopoMap'});
 const route=L.layerGroup().addTo(state.map),stops=L.layerGroup().addTo(state.map),guides=L.layerGroup().addTo(state.map);const pts=itinerary.slice(0,16).map(d=>[d.lat,d.lng]);
 L.polyline(pts,{color:'#b36038',weight:5,opacity:.9,lineJoin:'round'}).addTo(route);
 itinerary.slice(0,16).forEach((d,i)=>{const icon=L.divIcon({className:'number-marker',html:`<span>${i+1}</span>`,iconSize:[34,34],iconAnchor:[17,17]});const m=L.marker([d.lat,d.lng],{icon}).addTo(stops);m.bindPopup(`<strong>${d.date} · ${d.place}</strong><br>${d.summary}<br><button onclick="window.openDay(${i})">Open itinerary</button>`)});
 regions.forEach(r=>{const m=L.circleMarker([r.lat,r.lng],{radius:11,color:'#fff',weight:3,fillColor:'#b88a45',fillOpacity:.95}).addTo(guides);m.bindPopup(`<strong>${r.name}</strong><br>${r.intro.slice(0,100)}…<br><button onclick="window.openRegionGuide('${r.id}')">Open guide</button>`)});
 L.control.layers({'Road map':light,'Topographic map':topo},{'Route':route,'Overnight stops':stops,'Regional guides':guides},{collapsed:false}).addTo(state.map);state.map.fitBounds(L.latLngBounds(pts).pad(.12));
 $('#mapStopList').innerHTML=itinerary.slice(0,16).map((d,i)=>`<button class="stop-button" data-map-day="${i}"><strong>${d.date} · ${d.place}</strong><small>${d.summary}</small></button>`).join('');
}
window.openDay=i=>{state.day=i;renderPlan();showView('plan')};window.openRegionGuide=id=>openRegion(id);
function guideAnswer(q){const lower=q.toLowerCase();const r=regions.find(x=>lower.includes(x.name.toLowerCase().replace('the ',''))||(x.id==='skye'&&lower.includes('skye'))||(x.id==='hebrides'&&(lower.includes('harris')||lower.includes('lewis')))||(x.id==='cairngorms'&&lower.includes('cairngorm')));if(!r)return 'Name a region and tell me whether you want walks, food, campsites, history, family activities or a slower scenic day.';const walk=/walk|hike|trail/.test(lower),food=/food|restaurant|eat|dinner|lunch/.test(lower),camp=/camp|campervan/.test(lower),family=/family|child|children|kids/.test(lower);const a=[`For ${r.name}, build the day around ${r.todo.slice(0,3).map(x=>x.name).join(', ')}.`];if(walk)a.push(`Walk options: ${r.hikes.map(x=>`${x.name} — ${x.level}, ${x.distance}, ★ ${x.rating}`).join('; ')}.`);if(food)a.push(`Dining shortlist: ${r.restaurants.map(x=>x.name).join(', ')}. Open each card for menu, live maps and booking searches.`);if(camp)a.push(`Campsite shortlist: ${r.camping.map(x=>x.name).join(', ')}. Confirm vehicle size, facilities and arrival time directly.`);if(family)a.push('Keep one flexible indoor or short-walk option and avoid stacking long drives with the hardest hike.');return a.join(' ')}
function addMessage(text,who){const d=document.createElement('div');d.className=`message ${who}`;d.textContent=text;$('#messages').appendChild(d);$('#messages').scrollTop=$('#messages').scrollHeight}
document.addEventListener('click',e=>{
 const v=e.target.closest('[data-view]');if(v)showView(v.dataset.view);
 const r=e.target.closest('[data-region]');if(r)openRegion(r.dataset.region);
 const ib=e.target.closest('[data-item]');if(ib){const x=findItem(decodeURIComponent(ib.dataset.item));if(x)openItem(x)}
 const day=e.target.closest('[data-day]');if(day){state.day=+day.dataset.day;renderPlan()}
 const md=e.target.closest('[data-map-day]');if(md)window.openDay(+md.dataset.mapDay);
 const rail=e.target.closest('[data-rail]');if(rail){const el=document.getElementById(rail.dataset.rail);el?.scrollBy({left:(+rail.dataset.dir)*Math.min(el.clientWidth*.82,760),behavior:'smooth'})}
 const gs=e.target.closest('[data-gallery-step]');if(gs){state.galleryIndex+=+gs.dataset.galleryStep;updateGallery($('[data-gallery]'))}
 const gd=e.target.closest('[data-gallery-dot]');if(gd){state.galleryIndex=+gd.dataset.galleryDot;updateGallery($('[data-gallery]'))}
 const s=e.target.closest('[data-save]');if(s){const n=decodeURIComponent(s.dataset.save);state.saved.has(n)?state.saved.delete(n):state.saved.add(n);persist();const x=findItem(n);if(x)openItem(x)}
 const pl=e.target.closest('[data-plan]');if(pl){const n=decodeURIComponent(pl.dataset.plan);state.planned.has(n)?state.planned.delete(n):state.planned.add(n);persist();const x=findItem(n);if(x)openItem(x)}
 const c=e.target.closest('[data-compare]');if(c){const n=decodeURIComponent(c.dataset.compare);if(state.compare.has(n))state.compare.delete(n);else if(state.compare.size<3)state.compare.add(n);else{openCompare();return}persist();const x=findItem(n);if(x)openItem(x)}
 if(e.target.closest('[data-open-compare]'))openCompare();if(e.target.closest('[data-close]'))closeSheet();
});
document.addEventListener('input',e=>{const n=e.target.closest('[data-note]');if(n){state.notes[decodeURIComponent(n.dataset.note)]=n.value;persist()}});
$('#fitRoute').onclick=()=>{initMap();if(state.map)state.map.fitBounds(L.latLngBounds(itinerary.slice(0,16).map(d=>[d.lat,d.lng])).pad(.12))};
$('#locateMe').onclick=()=>{initMap();if(!state.map)return;state.map.locate({setView:true,maxZoom:13});state.map.once('locationfound',e=>L.circleMarker(e.latlng,{radius:9,color:'#fff',weight:3,fillColor:'#3279b7',fillOpacity:1}).addTo(state.map).bindPopup('Your current position').openPopup())};
$('#savedButton').onclick=()=>{const items=allItems().filter(x=>state.saved.has(x.name));openSheet(`<div class="item-deep"><p class="kicker">YOUR ROADBOOK</p><h2>Saved places</h2>${items.length?`<div class="saved-grid">${items.map(itemCard).join('')}</div>`:'<p>No saved recommendations yet.</p>'}</div>`)};
const comp=$('#compareButton');if(comp)comp.onclick=openCompare;$('#themeButton').onclick=()=>document.documentElement.classList.toggle('dark');const search=$('#regionSearch');if(search)search.addEventListener('input',e=>renderRegions(e.target.value));
$('#guideForm').onsubmit=e=>{e.preventDefault();const q=$('#guideInput').value.trim();if(!q)return;addMessage(q,'user');$('#guideInput').value='';setTimeout(()=>addMessage(guideAnswer(q),'assistant'),200)};$('#examples').onclick=e=>{if(e.target.tagName==='BUTTON'){$('#guideInput').value=e.target.textContent;$('#guideForm').requestSubmit()}};
renderRegions();renderPlan();persist();addMessage('Tell me where you are going, how much time you have and what kind of day you want.','assistant');if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js?v=400');
