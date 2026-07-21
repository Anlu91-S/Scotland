
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

const state={view:"home",day:0,saved:new Set(JSON.parse(localStorage.getItem("srSaved")||"[]")),map:null,markers:[]};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function saveState(){localStorage.setItem("srSaved",JSON.stringify([...state.saved]));$("#savedCount").textContent=state.saved.size}
function showView(name){
  state.view=name;
  $$(".view").forEach(v=>{v.hidden=true;v.classList.remove("active")});
  const el=$("#"+name+"View"); el.hidden=false; el.classList.add("active");
  $$(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  window.scrollTo({top:0,behavior:"smooth"});
  if(name==="map") setTimeout(initMap,60);
}
function regionCard(r){
 return `<button class="region-card" data-region="${r.id}"><img src="${r.image}" alt="${r.name}" loading="lazy"><span class="region-card-copy"><span class="kicker light">${r.dates}</span><h3>${r.name}</h3><p>${r.intro.slice(0,145)}…</p></span></button>`;
}
function renderRegions(){
 $("#homeRegions").innerHTML=regions.slice(0,5).map(regionCard).join("");
 $("#regionGrid").innerHTML=regions.map(regionCard).join("");
}
function recRows(arr,type){
 return `<div class="recommendation-group">${arr.map((x,i)=>`<button class="recommendation-row" data-item="${encodeURIComponent(JSON.stringify({...x,type}))}"><span class="no">${String(i+1).padStart(2,"0")}</span><span><strong>${x.name}</strong><p>${x.description}</p>${x.difficulty?`<span class="difficulty">${x.difficulty}</span>`:""}</span><span>↗</span></button>`).join("")}</div>`;
}
function openRegion(id){
 const r=regions.find(x=>x.id===id);
 openSheet(`<img class="detail-image" src="${r.image}" alt="${r.name}"><div class="detail-body"><p class="kicker">${r.dates} / REGIONAL GUIDE</p><h2>${r.name}</h2><p class="detail-description">${r.intro}</p><div class="detail-stats"><div><small>WALKS</small><strong>3 selected routes</strong></div><div><small>RESTAURANTS</small><strong>5 places to eat</strong></div><div><small>CAMPSITES</small><strong>3 practical bases</strong></div><div><small>HIGHLIGHTS</small><strong>5 things to do</strong></div></div><section class="detail-list"><h3>Three walks</h3>${recRows(r.hikes,"Walk")}</section><section class="detail-list"><h3>Five restaurants</h3>${recRows(r.restaurants,"Restaurant")}</section><section class="detail-list"><h3>Three campsites</h3>${recRows(r.camping,"Campsite")}</section><section class="detail-list"><h3>Five things to do</h3>${recRows(r.todo,"Experience")}</section></div>`);
}
function openItem(x){
 const saved=state.saved.has(x.name);
 const photoNote=exactPhotoNames.has(x.name)
   ? "This photograph shows the named destination."
   : "This card uses a verified photograph of the surrounding region. It is not presented as a photograph of the individual venue.";
 openSheet(`<img class="detail-image" src="${x.image}" alt="${x.name}"><div class="detail-body"><p class="kicker">${x.type||"ROADBOOK RECOMMENDATION"}</p><h2>${x.name}</h2><p class="detail-description">${x.description}</p>${x.difficulty?`<div class="detail-stats"><div><small>DIFFICULTY / TIME</small><strong>${x.difficulty}</strong></div><div><small>MAP</small><strong>Open route or location</strong></div></div>`:""}<div class="external-links"><a href="${x.link==="google"?google(x.name+" Scotland"):x.link}" target="_blank" rel="noopener">Open official page or map</a><button class="button outline" id="saveCurrent">${saved?"Remove from saved":"Save recommendation"}</button></div><p class="image-credit">${photoNote} Confirm current opening hours, access, bookings and local conditions with the operator.</p></div>`);
 setTimeout(()=>{const b=$("#saveCurrent");if(b)b.onclick=()=>{state.saved.has(x.name)?state.saved.delete(x.name):state.saved.add(x.name);saveState();b.textContent=state.saved.has(x.name)?"Remove from saved":"Save recommendation"}},0);
}
function openSheet(html){$("#sheetContent").innerHTML=html;$("#sheet").classList.add("open");$("#sheet").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeSheet(){$("#sheet").classList.remove("open");$("#sheet").setAttribute("aria-hidden","true");document.body.style.overflow=""}
function renderPlan(){
 $("#dayTabs").innerHTML=itinerary.map((d,i)=>`<button class="day-tab ${i===state.day?"active":""}" data-day="${i}"><small>${d.date}</small><strong>${d.place}</strong></button>`).join("");
 const d=itinerary[state.day],r=regions.find(x=>x.id===d.region);
 const activities=r?[...r.todo.slice(0,3),...r.restaurants.slice(0,1)]:[];
 $("#dayPanel").innerHTML=`<div class="day-cover"><img src="${r?r.image:regionImages.edinburgh}" alt="${d.place}"><div class="day-cover-copy"><p class="kicker light">DAY ${String(state.day+1).padStart(2,"0")} · ${d.date}</p><h2>${d.place}</h2><div class="day-meta"><span>${d.summary}</span></div></div></div><div class="day-body"><section><h3>Recommended focus</h3>${activities.map((x,i)=>`<div class="timeline-item"><span class="timeline-number">${String(i+1).padStart(2,"0")}</span><span><strong>${x.name}</strong><br><small>${x.description}</small></span><button data-item="${encodeURIComponent(JSON.stringify({...x,type:"Itinerary highlight"}))}">Open</button></div>`).join("")||"<p>Departure and travel home.</p>"}</section><aside class="day-note"><p class="kicker">ROAD NOTE</p><h3>${d.place}</h3><p>${r?r.intro:d.summary}</p>${r?`<button class="button ink" data-region="${r.id}">Open full regional guide</button>`:""}</aside></div>`;
}
function initMap(){
 const mapNode=$("#map");
 if(typeof L==="undefined"){
  mapNode.innerHTML='<div class="map-error"><strong>The live map could not load.</strong><span>Check your connection and reload the page. The itinerary and regional guides remain available.</span></div>';
  return;
 }
 if(state.map){state.map.invalidateSize();return}
 state.map=L.map("map",{zoomControl:true,scrollWheelZoom:true,wheelPxPerZoomLevel:70,zoomSnap:.5}).setView([57.1,-4.8],6);
 L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{maxZoom:20,attribution:'© OpenStreetMap © CARTO'}).addTo(state.map);
 const pts=itinerary.slice(0,16).map(d=>[d.lat,d.lng]);
 L.polyline(pts,{color:"#b36038",weight:5,opacity:.86,lineJoin:"round"}).addTo(state.map);
 itinerary.slice(0,16).forEach((d,i)=>{
  const marker=L.circleMarker([d.lat,d.lng],{radius:8,color:"#fff",weight:3,fillColor:"#17382c",fillOpacity:1}).addTo(state.map);
  marker.bindPopup(`<strong>${d.date} · ${d.place}</strong><br>${d.summary}<br><button onclick="window.openDay(${i})">Open itinerary</button>`);
  state.markers.push(marker);
 });
 $("#mapStopList").innerHTML=itinerary.slice(0,16).map((d,i)=>`<button class="stop-button" data-map-day="${i}"><strong>${d.date} · ${d.place}</strong><small>${d.summary}</small></button>`).join("");
 state.map.fitBounds(L.latLngBounds(pts).pad(.12));
}
window.openDay=i=>{state.day=i;renderPlan();showView("plan")};
function guideAnswer(q){
 const lower=q.toLowerCase();
 const r=regions.find(x=>lower.includes(x.name.toLowerCase().replace("the ",""))|| (x.id==="skye"&&lower.includes("skye")) || (x.id==="hebrides"&&(lower.includes("harris")||lower.includes("lewis"))) || (x.id==="cairngorms"&&lower.includes("cairngorm")));
 const family=/child|children|family|kids/.test(lower), food=/restaurant|food|eat|dinner|lunch/.test(lower), walk=/walk|hike|hiking/.test(lower), camp=/camp|campervan/.test(lower);
 if(!r)return `Choose a region such as Glasgow, Loch Lomond, Glen Coe, Skye, Harris and Lewis, Inverness, the Cairngorms, Stirling and Fife, or Edinburgh. Tell me how many days you have and whether you prefer walks, food, history, family activities or camping.`;
 let parts=[`For ${r.name}, I would begin with ${r.todo.slice(0,3).map(x=>x.name).join(", ")}.`];
 if(family)parts.push(`For a family, favour flexible stops and the easier options, especially ${r.hikes[0].name}${r.hikes[0].difficulty?` (${r.hikes[0].difficulty})`:""}. Avoid overloading the day and keep one weatherproof alternative.`);
 if(food||!walk&&!camp)parts.push(`Five dining options in the guide are ${r.restaurants.map(x=>x.name).join(", ")}. Book the smaller destination restaurants well ahead.`);
 if(walk)parts.push(`The selected walks are ${r.hikes.map(x=>`${x.name}${x.difficulty?` — ${x.difficulty}`:""}`).join("; ")}.`);
 if(camp)parts.push(`For camping, compare ${r.camping.map(x=>x.name).join(", ")} and confirm vehicle length, arrival times and facilities directly.`);
 return parts.join(" ");
}
function addMessage(text,who){const div=document.createElement("div");div.className=`message ${who}`;div.textContent=text;$("#messages").appendChild(div);$("#messages").scrollTop=$("#messages").scrollHeight}
document.addEventListener("click",e=>{
 const v=e.target.closest("[data-view]"); if(v)showView(v.dataset.view);
 const r=e.target.closest("[data-region]"); if(r)openRegion(r.dataset.region);
 const it=e.target.closest("[data-item]"); if(it)openItem(JSON.parse(decodeURIComponent(it.dataset.item)));
 const day=e.target.closest("[data-day]"); if(day){state.day=+day.dataset.day;renderPlan()}
 const mapDay=e.target.closest("[data-map-day]"); if(mapDay)window.openDay(+mapDay.dataset.mapDay);
 if(e.target.closest("[data-close]"))closeSheet();
});
$("#fitRoute").onclick=()=>{initMap();if(state.map)state.map.fitBounds(L.latLngBounds(itinerary.slice(0,16).map(d=>[d.lat,d.lng])).pad(.12))};
$("#locateMe").onclick=()=>{initMap();if(!state.map)return;state.map.locate({setView:true,maxZoom:13});state.map.once("locationfound",e=>L.circleMarker(e.latlng,{radius:9,color:"#fff",weight:3,fillColor:"#3279b7",fillOpacity:1}).addTo(state.map).bindPopup("Your current position").openPopup())};
$("#savedButton").onclick=()=>{
 const all=regions.flatMap(r=>[...r.hikes,...r.restaurants,...r.camping,...r.todo]);
 const savedItems=[...new Map(all.filter(x=>state.saved.has(x.name)).map(x=>[x.name,x])).values()];
 const body=savedItems.length
  ? recRows(savedItems,"Saved recommendation")
  : '<p class="empty-state">No saved recommendations yet. Open any walk, restaurant, campsite or experience and select “Save recommendation”.</p>';
 openSheet(`<div class="detail-body"><p class="kicker">YOUR ROADBOOK</p><h2>Saved places</h2>${body}</div>`);
};
$("#themeButton").onclick=()=>document.documentElement.classList.toggle("dark");
$("#guideForm").onsubmit=e=>{e.preventDefault();const q=$("#guideInput").value.trim();if(!q)return;addMessage(q,"user");$("#guideInput").value="";setTimeout(()=>addMessage(guideAnswer(q),"assistant"),250)};
$("#examples").onclick=e=>{if(e.target.tagName==="BUTTON"){$("#guideInput").value=e.target.textContent;$("#guideForm").requestSubmit()}};
renderRegions();renderPlan();saveState();addMessage("Tell me where you are going, how much time you have and what kind of experience you want.","assistant");
if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js?v=310");
