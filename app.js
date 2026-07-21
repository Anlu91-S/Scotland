
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


const state={
  view:"home",day:0,saved:new Set(JSON.parse(localStorage.getItem("srSaved")||"[]")),
  compare:new Set(JSON.parse(localStorage.getItem("srCompare")||"[]")),map:null,markers:[],currentRegion:null,currentTab:"hikes",regionQuery:""
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>\"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function allItems(){return regions.flatMap(r=>[...r.hikes,...r.restaurants,...r.camping,...r.todo])}
function findItem(name){return allItems().find(x=>x.name===name||x.originalName===name)}
function saveState(){
  localStorage.setItem("srSaved",JSON.stringify([...state.saved]));
  localStorage.setItem("srCompare",JSON.stringify([...state.compare]));
  $("#savedCount").textContent=state.saved.size;
  const cc=$("#compareCount");if(cc)cc.textContent=state.compare.size;
  const cb=$("#compareButton");if(cb)cb.hidden=state.compare.size===0;
}
function showView(name){
  state.view=name;
  $$(".view").forEach(v=>{v.hidden=true;v.classList.remove("active")});
  const el=$("#"+name+"View"); el.hidden=false; el.classList.add("active");
  $$(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  window.scrollTo({top:0,behavior:"smooth"});
  if(name==="map")setTimeout(initMap,70);
}
function regionCard(r){
 return `<button class="region-card" data-region="${r.id}"><img src="${r.image}" alt="${esc(r.name)}" loading="lazy"><span class="region-card-copy"><span class="kicker light">${r.dates}</span><h3>${r.name}</h3><p>${r.intro.slice(0,155)}…</p><span class="region-card-proof">3 trails · 5 restaurants · official links</span></span></button>`;
}
function renderRegions(query=state.regionQuery){
 state.regionQuery=query.trim().toLowerCase();
 $("#homeRegions").innerHTML=regions.slice(0,5).map(regionCard).join("");
 const filtered=regions.filter(r=>`${r.name} ${r.intro}`.toLowerCase().includes(state.regionQuery));
 $("#regionGrid").innerHTML=filtered.length?filtered.map(regionCard).join(""):'<p class="empty-state">No regional guide matches that search.</p>';
 const result=$("#regionResultCount");if(result)result.textContent=`${filtered.length} regional guides`;
}
function metric(label,value){return value?`<span><small>${label}</small><strong>${value}</strong></span>`:""}
function sourceBadge(x){return `<span class="source-badge ${x.photoLabel?.startsWith("Specific")?"verified":"regional"}">${x.photoLabel||"Editorial image"}</span>`}
function hikeMetrics(x){return `<div class="hike-metrics">${metric("ALLTRAILS",`★ ${x.rating||"—"}`)}${metric("REVIEWS",x.reviews||"—")}${metric("LEVEL",x.level||"—")}${metric("DISTANCE",x.distance||"—")}${metric("ASCENT",x.elevation||"Not listed")}${metric("TIME",x.time||"—")}</div>`}
function actionLinks(x,compact=false){
 const links=[];
 if(x.type==="Walk"){
  if(x.allTrails)links.push(`<a href="${x.allTrails}" target="_blank" rel="noopener">${compact?"AllTrails":"View trail on AllTrails"}</a>`);
  if(x.allTrails)links.push(`<a href="${x.allTrails}" target="_blank" rel="noopener">${compact?"Photos":"Trail photos & reviews"}</a>`);
  links.push(`<a href="${x.maps}" target="_blank" rel="noopener">${compact?"Trailhead":"Trailhead in Google Maps"}</a>`);
 }else if(x.type==="Restaurant"){
  if(x.official)links.push(`<a href="${x.official}" target="_blank" rel="noopener">Official website</a>`);
  if(x.menu)links.push(`<a href="${x.menu}" target="_blank" rel="noopener">Menu & booking</a>`);
  links.push(`<a href="${x.maps}" target="_blank" rel="noopener">Google photos, hours & reviews</a>`);
 }else if(x.type==="Campsite"){
  if(x.official)links.push(`<a href="${x.official}" target="_blank" rel="noopener">Official website</a>`);
  if(x.booking)links.push(`<a href="${x.booking}" target="_blank" rel="noopener">Check availability</a>`);
  links.push(`<a href="${x.maps}" target="_blank" rel="noopener">Google Maps</a>`);
 }else{
  if(x.official)links.push(`<a href="${x.official}" target="_blank" rel="noopener">Official information</a>`);
  links.push(`<a href="${x.maps}" target="_blank" rel="noopener">Google Maps & photos</a>`);
 }
 return `<div class="external-links ${compact?"compact":""}">${links.join("")}</div>`;
}
function recommendationCards(arr,type){
 return `<div class="recommendation-cards">${arr.map((x,i)=>`<article class="recommendation-card"><button class="rec-image" data-item="${encodeURIComponent(x.name)}"><img src="${x.image}" alt="${esc(x.name)}" loading="lazy">${sourceBadge(x)}</button><div class="rec-copy"><div class="rec-topline"><span>${String(i+1).padStart(2,"0")}</span><em>${type}</em></div><h4>${x.name}</h4><p>${x.description}</p>${x.type==="Walk"?hikeMetrics(x):""}<div class="rec-actions"><button class="button ink small" data-item="${encodeURIComponent(x.name)}">Open details</button>${x.type==="Walk"?`<button class="button outline small" data-compare="${encodeURIComponent(x.name)}">${state.compare.has(x.name)?"Remove comparison":"Compare"}</button>`:""}</div></div></article>`).join("")}</div>`;
}
const tabs=[['hikes','Walks'],['restaurants','Restaurants'],['camping','Campsites'],['todo','Things to do']];
function renderRegionSheet(id,tab=state.currentTab){
 const r=regions.find(x=>x.id===id);if(!r)return;
 state.currentRegion=id;state.currentTab=tab;
 const labels={hikes:"Three verified trails",restaurants:"Five places to eat",camping:"Three practical bases",todo:"Five experiences"};
 const typeLabels={hikes:"Trail",restaurants:"Restaurant",camping:"Campsite",todo:"Experience"};
 $("#sheetContent").innerHTML=`<img class="detail-image" src="${r.image}" alt="${esc(r.name)}"><div class="detail-body"><p class="kicker">${r.dates} / TRUSTED REGIONAL GUIDE</p><h2>${r.name}</h2><p class="detail-description">${r.intro}</p><div class="source-panel"><span>Regional source</span><a href="${r.source.url}" target="_blank" rel="noopener">${r.source.name} ↗</a><small>Trail ratings are AllTrails snapshots checked ${sourceChecked}; live values may change.</small></div><div class="region-tabs">${tabs.map(([key,label])=>`<button class="${key===tab?"active":""}" data-region-tab="${key}" data-region-id="${r.id}">${label}<small>${r[key].length}</small></button>`).join("")}</div><section class="detail-list"><div class="category-heading"><div><p class="kicker">CURATED & LINKED</p><h3>${labels[tab]}</h3></div>${tab==='hikes'&&state.compare.size?`<button class="button outline" data-open-compare>Compare ${state.compare.size} walks</button>`:""}</div>${recommendationCards(r[tab],typeLabels[tab])}</section></div>`;
}
function openRegion(id,tab="hikes"){
 openSheet("");renderRegionSheet(id,tab);
}
function openItem(x){
 const saved=state.saved.has(x.name),compared=state.compare.has(x.name);
 const region=regions.find(r=>r.id===x.regionId);
 const sourceText=x.type==="Walk"?`AllTrails community data snapshot checked ${sourceChecked}. Ratings, reviews, conditions and route details can change; open AllTrails for the live listing.`:`Current hours, menus, booking availability and photos are linked from the operator and Google Maps rather than copied into this static roadbook.`;
 openSheet(`<img class="detail-image" src="${x.image}" alt="${esc(x.name)}"><div class="detail-body"><div class="detail-title-row"><div><p class="kicker">${x.type||"ROADBOOK RECOMMENDATION"} · ${region?.name||"SCOTLAND"}</p><h2>${x.name}</h2></div>${sourceBadge(x)}</div><p class="detail-description">${x.description}</p>${x.type==="Walk"?hikeMetrics(x):""}${actionLinks(x)}<div class="personal-actions"><button class="button outline" data-save="${encodeURIComponent(x.name)}">${saved?"Remove from saved":"Save recommendation"}</button>${x.type==="Walk"?`<button class="button outline" data-compare="${encodeURIComponent(x.name)}">${compared?"Remove from comparison":"Add to comparison"}</button>`:""}</div><aside class="reliability-note"><strong>Source & image transparency</strong><p>${x.photoLabel}. ${sourceText}</p></aside></div>`);
}
function openCompare(){
 const walks=[...state.compare].map(findItem).filter(Boolean).slice(0,3);
 if(!walks.length){openSheet('<div class="detail-body"><h2>No walks selected</h2><p>Add up to three walks from any regional guide.</p></div>');return}
 openSheet(`<div class="detail-body"><p class="kicker">TRAIL COMPARISON</p><h2>Compare selected walks</h2><p class="detail-description">Choose by effort, time and character. Always check the live AllTrails listing and local mountain guidance before setting out.</p><div class="compare-grid">${walks.map(x=>`<article><img src="${x.image}" alt="${esc(x.name)}"><h3>${x.name}</h3>${hikeMetrics(x)}${actionLinks(x,true)}<button class="text-button" data-compare="${encodeURIComponent(x.name)}">Remove</button></article>`).join("")}</div></div>`);
}
function openSheet(html){$("#sheetContent").innerHTML=html;$("#sheet").classList.add("open");$("#sheet").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeSheet(){$("#sheet").classList.remove("open");$("#sheet").setAttribute("aria-hidden","true");document.body.style.overflow=""}
function directionsUrl(i){
 const current=itinerary[i],next=itinerary[Math.min(i+1,itinerary.length-1)];
 return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(current.place+" Scotland")}&destination=${encodeURIComponent(next.place+" Scotland")}`;
}
function renderPlan(){
 $("#dayTabs").innerHTML=itinerary.map((d,i)=>`<button class="day-tab ${i===state.day?"active":""}" data-day="${i}"><small>${d.date}</small><strong>${d.place}</strong></button>`).join("");
 const d=itinerary[state.day],r=regions.find(x=>x.id===d.region);
 const activities=r?[...r.hikes.slice(0,1),...r.todo.slice(0,2),...r.restaurants.slice(0,1)]:[];
 $("#dayPanel").innerHTML=`<div class="day-cover"><img src="${r?r.image:regionImages.edinburgh}" alt="${esc(d.place)}"><div class="day-cover-copy"><p class="kicker light">DAY ${String(state.day+1).padStart(2,"0")} · ${d.date}</p><h2>${d.place}</h2><div class="day-meta"><span>${d.summary}</span></div></div></div><div class="day-body"><section><div class="category-heading"><h3>Recommended focus</h3>${state.day<itinerary.length-1?`<a class="button outline" href="${directionsUrl(state.day)}" target="_blank" rel="noopener">Driving route in Google Maps</a>`:""}</div>${activities.map((x,i)=>`<article class="timeline-rich"><img src="${x.image}" alt="${esc(x.name)}"><span class="timeline-number">${String(i+1).padStart(2,"0")}</span><div><strong>${x.name}</strong><p>${x.description}</p>${x.type==="Walk"?`<small>★ ${x.rating} · ${x.level} · ${x.distance}</small>`:""}</div><button data-item="${encodeURIComponent(x.name)}">Open</button></article>`).join("")||"<p>Departure and travel home.</p>"}</section><aside class="day-note"><p class="kicker">ROAD NOTE</p><h3>${d.place}</h3><p>${r?r.intro:d.summary}</p>${r?`<a href="${r.source.url}" target="_blank" rel="noopener">Official regional guide ↗</a><button class="button ink" data-region="${r.id}">Open full regional guide</button>`:""}</aside></div>`;
}
function initMap(){
 const mapNode=$("#map");
 if(typeof L==="undefined"){mapNode.innerHTML='<div class="map-error"><strong>The live map could not load.</strong><span>Check your connection and reload. Regional guides and direct Google links remain available.</span></div>';return}
 if(state.map){state.map.invalidateSize();return}
 state.map=L.map("map",{zoomControl:true,scrollWheelZoom:true,wheelPxPerZoomLevel:55,zoomSnap:.25,preferCanvas:true}).setView([57.1,-4.8],6);
 const light=L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{maxZoom:20,attribution:'© OpenStreetMap © CARTO'}).addTo(state.map);
 const topo=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'© OpenStreetMap contributors · OpenTopoMap'});
 const routeLayer=L.layerGroup().addTo(state.map),stopLayer=L.layerGroup().addTo(state.map),regionLayer=L.layerGroup().addTo(state.map);
 const pts=itinerary.slice(0,16).map(d=>[d.lat,d.lng]);
 L.polyline(pts,{color:"#b36038",weight:5,opacity:.86,lineJoin:"round"}).addTo(routeLayer);
 itinerary.slice(0,16).forEach((d,i)=>{
  const icon=L.divIcon({className:"number-marker",html:`<span>${i+1}</span>`,iconSize:[32,32],iconAnchor:[16,16]});
  const marker=L.marker([d.lat,d.lng],{icon}).addTo(stopLayer);
  marker.bindPopup(`<strong>${d.date} · ${d.place}</strong><br>${d.summary}<br><button onclick="window.openDay(${i})">Open itinerary</button>`);state.markers.push(marker);
 });
 regions.forEach(r=>{
  const marker=L.circleMarker([r.lat,r.lng],{radius:11,color:"#fff",weight:3,fillColor:"#b88a45",fillOpacity:.95}).addTo(regionLayer);
  marker.bindPopup(`<strong>${r.name}</strong><br>${r.intro.slice(0,110)}…<br><button onclick="window.openRegionGuide('${r.id}')">Open regional guide</button>`);
 });
 L.control.layers({"Editorial map":light,"Topographic map":topo},{"Schematic roadbook route":routeLayer,"Overnight stops":stopLayer,"Regional guides":regionLayer},{collapsed:false}).addTo(state.map);
 $("#mapStopList").innerHTML=itinerary.slice(0,16).map((d,i)=>`<button class="stop-button" data-map-day="${i}"><strong>${d.date} · ${d.place}</strong><small>${d.summary}</small></button>`).join("");
 state.map.fitBounds(L.latLngBounds(pts).pad(.12));
}
window.openDay=i=>{state.day=i;renderPlan();showView("plan")};
window.openRegionGuide=id=>openRegion(id);
function guideAnswer(q){
 const lower=q.toLowerCase();
 const r=regions.find(x=>lower.includes(x.name.toLowerCase().replace("the ",""))||(x.id==="skye"&&lower.includes("skye"))||(x.id==="hebrides"&&(lower.includes("harris")||lower.includes("lewis")))||(x.id==="cairngorms"&&lower.includes("cairngorm")));
 const family=/child|children|family|kids/.test(lower),food=/restaurant|food|eat|dinner|lunch|menu/.test(lower),walk=/walk|hike|hiking|trail/.test(lower),camp=/camp|campervan/.test(lower);
 if(!r)return `Choose a region such as Glasgow, Loch Lomond, Glen Coe, Skye, Harris and Lewis, Inverness, the Cairngorms, Stirling and Fife, or Edinburgh. Tell me how many days you have and whether you prefer walks, food, history, family activities or camping.`;
 let parts=[`For ${r.name}, start with ${r.todo.slice(0,3).map(x=>x.name).join(", ")}. The official regional reference is ${r.source.name}.`];
 if(family)parts.push(`For a family, favour flexible stops and the easier trail options. ${r.hikes.filter(x=>x.level==="Easy").slice(0,2).map(x=>`${x.name} (${x.distance})`).join(" and ")||r.hikes[0].name} are the most manageable starting points.`);
 if(food||(!walk&&!camp))parts.push(`The dining shortlist is ${r.restaurants.map(x=>x.name).join(", ")}. Each card links to the official website or menu where available, plus current Google hours, reviews and photos.`);
 if(walk)parts.push(`The three trails are ${r.hikes.map(x=>`${x.name}: ★ ${x.rating}, ${x.level}, ${x.distance}, ${x.time}`).join("; ")}. Open the AllTrails links for live conditions and recent reviews.`);
 if(camp)parts.push(`Compare ${r.camping.map(x=>x.name).join(", ")} and confirm vehicle length, arrival rules and availability directly with each operator.`);
 return parts.join(" ");
}
function addMessage(text,who){const div=document.createElement("div");div.className=`message ${who}`;div.textContent=text;$("#messages").appendChild(div);$("#messages").scrollTop=$("#messages").scrollHeight}
document.addEventListener("click",e=>{
 const v=e.target.closest("[data-view]");if(v)showView(v.dataset.view);
 const r=e.target.closest("[data-region]");if(r)openRegion(r.dataset.region);
 const itemButton=e.target.closest("[data-item]");if(itemButton){const x=findItem(decodeURIComponent(itemButton.dataset.item));if(x)openItem(x)}
 const tab=e.target.closest("[data-region-tab]");if(tab)renderRegionSheet(tab.dataset.regionId,tab.dataset.regionTab);
 const day=e.target.closest("[data-day]");if(day){state.day=+day.dataset.day;renderPlan()}
 const mapDay=e.target.closest("[data-map-day]");if(mapDay)window.openDay(+mapDay.dataset.mapDay);
 const save=e.target.closest("[data-save]");if(save){const name=decodeURIComponent(save.dataset.save);state.saved.has(name)?state.saved.delete(name):state.saved.add(name);saveState();const x=findItem(name);if(x)openItem(x)}
 const compare=e.target.closest("[data-compare]");if(compare){const name=decodeURIComponent(compare.dataset.compare);if(state.compare.has(name))state.compare.delete(name);else if(state.compare.size<3)state.compare.add(name);else{openSheet('<div class="detail-body"><h2>Three-walk limit</h2><p>Remove one walk before adding another comparison.</p><button class="button ink" data-open-compare>Open comparison</button></div>');return}saveState();if(state.currentRegion&&$("#sheet").classList.contains("open"))renderRegionSheet(state.currentRegion,state.currentTab)}
 if(e.target.closest("[data-open-compare]"))openCompare();
 if(e.target.closest("[data-close]"))closeSheet();
});
$("#fitRoute").onclick=()=>{initMap();if(state.map)state.map.fitBounds(L.latLngBounds(itinerary.slice(0,16).map(d=>[d.lat,d.lng])).pad(.12))};
$("#locateMe").onclick=()=>{initMap();if(!state.map)return;state.map.locate({setView:true,maxZoom:13});state.map.once("locationfound",e=>L.circleMarker(e.latlng,{radius:9,color:"#fff",weight:3,fillColor:"#3279b7",fillOpacity:1}).addTo(state.map).bindPopup("Your current position").openPopup())};
$("#savedButton").onclick=()=>{const savedItems=[...new Map(allItems().filter(x=>state.saved.has(x.name)).map(x=>[x.name,x])).values()];openSheet(`<div class="detail-body"><p class="kicker">YOUR ROADBOOK</p><h2>Saved places</h2>${savedItems.length?recommendationCards(savedItems,"Saved recommendation"):'<p class="empty-state">No saved recommendations yet.</p>'}</div>`)};
const compareButton=$("#compareButton");if(compareButton)compareButton.onclick=openCompare;
$("#themeButton").onclick=()=>document.documentElement.classList.toggle("dark");
const regionSearch=$("#regionSearch");if(regionSearch)regionSearch.addEventListener("input",e=>renderRegions(e.target.value));
$("#guideForm").onsubmit=e=>{e.preventDefault();const q=$("#guideInput").value.trim();if(!q)return;addMessage(q,"user");$("#guideInput").value="";setTimeout(()=>addMessage(guideAnswer(q),"assistant"),250)};
$("#examples").onclick=e=>{if(e.target.tagName==="BUTTON"){$("#guideInput").value=e.target.textContent;$("#guideForm").requestSubmit()}};
renderRegions();renderPlan();saveState();addMessage("Tell me where you are going, how much time you have and what kind of experience you want.","assistant");
if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js?v=320");
