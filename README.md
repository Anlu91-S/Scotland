# Scotland Roadbook 2.3

En statisk, mobilanpassad PWA för GitHub Pages.

## Nytt i 2.3

- Ny redaktionell design och ny huvudrubrik: **Där vägen slutar börjar resan.**
- Sju utfällbara områdesguider: Loch Lomond, Glencoe, Isle of Skye, Harris & Lewis, Pitlochry, Stirling och Culross.
- Varje guide innehåller 3 vandringar, 3 matställen, 3 campingplatser och 5 saker att göra.
- Reseledaren: en lokal smart reseassistent som tolkar område, antal dagar och önskemål som familj, vandring, restauranger och camping.
- Verifierade områdesbilder. Platskort använder inte längre generiska kategoribilder som kunde föreställa fel plats.
- Modern CARTO-karta, favoriter, besökta platser, anteckningar, GPS och PWA-installation.

## Reseledaren och AI

GitHub Pages kan inte förvara en hemlig AI-nyckel säkert. Därför fungerar Reseledaren direkt som en lokal, kuraterad assistent utan konto, kostnad eller server. Den skapar svar från områdesguiderna och fungerar även när en moln-AI inte är tillgänglig.

En framtida molnmodell kan kopplas in via en separat säker backend, men ingen API-nyckel ska läggas i `app.js`.

## Publicera

1. Packa upp ZIP-filen.
2. Öppna GitHub-repositoryt `Scotland`.
3. Välj **Add file → Upload files**.
4. Dra in alla filer och mappen `images`.
5. Välj **Commit directly to the main branch** och klicka **Commit changes**.
6. Vänta 1–3 minuter och öppna GitHub Pages-länken med `?v=23` efter adressen.

## Bildnotering

- De lokala huvudbilderna är områdesbilder som manuellt matchats mot Loch Lomond, Glencoe, Quiraing/Skye, Harris, Queen's View/Pitlochry och Stirling.
- Culross-bilden laddas från National Trust for Scotland och visar Royal Burgh of Culross.
- Platsdetaljer använder text och karta i stället för generiska bilder, så en bild presenteras inte som en specifik plats när den bara visar en kategori.

## Kontrollera före resan

Restauranger, campingplatser, färjetider, bokningsregler och öppettider kan ändras. Kontrollera alltid verksamheternas officiella sidor före avresa.


Image credit: Culross village square by M J Richardson, CC BY-SA 2.0, via Wikimedia Commons.
