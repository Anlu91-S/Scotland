# Scotland Roadbook PWA

## Så öppnar du den
En PWA måste köras via en webbserver, inte genom att dubbelklicka på index.html.

### Enklast
1. Packa upp zip-filen.
2. Publicera mappen på Netlify Drop, GitHub Pages eller Vercel.
3. Öppna länken i Safari/Chrome.
4. iPhone: Dela → Lägg till på hemskärmen.
5. Android: välj Installera appen.

## Lokalt test
Kör i mappen:
python3 -m http.server 8000

Öppna sedan:
http://localhost:8000

## Offline
Appskal, resdata och tidigare öppnade resurser cachas. Topografiska kartbilder cachas efter hand när de visas; hela kartan är inte förnedladdad.
