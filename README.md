# ZTK web

Funkcionalni dvojezični prototip službene web-stranice Zagrebačkog tamburaškog kvarteta / Zagreb Tambura Quartet. Projekt je statički Astro + TypeScript web bez baze i CMS-a, pripremljen za GitHub Pages te kasniji prijenos na Cloudflare Pages i domenu `ztk.hr`.

## Arhitektura

- `src/data/content.ts` — kontrolirani javni podatkovni sloj koji se ugrađuje u statički build
- `src/components/` — dvojezične stranice i interaktivne komponente
- `src/pages/` — HR rute te engleske rute pod `/en/`
- `src/styles/global.css` — centralni design tokeni i zajednički stilovi
- `public/` — javni statički asseti
- `.github/workflows/deploy-pages.yml` — automatski GitHub Pages deployment

Sve kolekcije imaju `published`; javno se prikazuju samo zapisi s `published: true`. Događaji se automatski dijele na nadolazeće i arhivu prema datumu. Google Drive je urednički izvor, ali se management podaci ne objavljuju izravnom automatiziranom sinkronizacijom; pravila i tijek sigurnog ažuriranja opisani su u [`docs/GOOGLE_DRIVE_CONTENT_WORKFLOW.md`](docs/GOOGLE_DRIVE_CONTENT_WORKFLOW.md).

Upravljačka tablica repertoara je [ZTK – javni repertoar za web](https://docs.google.com/spreadsheets/d/1m6j6oXcuUBNAhazmr3nSX6nyU942sccJzXaseAQKsuo/edit). Sadrži 70 inventarnih zapisa, kontrolu objave, HR/EN naslove i opise, programe, videozapise, izvore i razloge zadržavanja. Web trenutačno objavljuje samo 19 urednički odabranih zapisa.

## Lokalni razvoj

Potrebni su Node.js 20+ i npm.

```sh
npm install
npm run dev
```

Produkcijski build i lokalni pregled:

```sh
npm run build
npm run check:links
npm run preview
```

## Uređivanje sadržaja

U `src/data/content.ts` uređuju se:

- `members` — članovi, instrumenti, biografije i fotografije
- `programmes` — aktualni koncertni programi
- `repertoire` — skladbe i opisi koji se ponovno koriste u event programu
- `events` — koncerti, lokacije, koordinata, gosti i digitalni program
- `videos` — skladatelj, djelo, stavak, URL, kanal i status
- `mediaLinks` — službeni streaming i društveni kanali

UI prijevodi i rute su u `src/lib/i18n.ts`; duži HR/EN tekstovi nalaze se uz odgovarajući zapis u `src/data/content.ts` ili dvojezičnoj komponenti.

### Dodavanje koncerta

Dodajte novi objekt u `events`. Datum mora biti `YYYY-MM-DD`, a `repertoireIds` mora sadržavati postojeće `id` vrijednosti iz `repertoire`. Ako dodate `latitude` i `longitude`, događaj se automatski prikazuje na karti. Postavite `digitalProgrammeEnabled: true` za digitalni program.

### Dodavanje ili ažuriranje djela

Najprije uredite red u tabu `WEB_REPERTOAR` povezane Drive tablice. `Published` smije biti `TRUE` tek kada su javni naslov, autor, vrsta djela i HR/EN sadržaj provjereni. Zatim se potvrđeni zapis prenosi u `repertoire` u `src/data/content.ts`, uz jedinstvene `id` i `slug` vrijednosti; nepotvrđena polja ostaju prazna ili `writtenForZtk: 'unknown'`. Opis se automatski ponovno koristi na stranicama događaja.

### Dodavanje programa

Dodajte objekt u `programmes`. Njegov `id` automatski postaje opcija u booking obrascu i može se koristiti u `event.programme` te `work.programmeIds`.

## Booking backend

Bez endpointa obrazac radi frontend validaciju i priprema strukturirani `mailto:`. Za backend postavite javnu build varijablu:

```sh
PUBLIC_BOOKING_ENDPOINT=https://example.com/api/booking npm run build
```

Endpoint treba prihvatiti JSON `POST`. Kasnije ga je moguće zamijeniti Cloudflare Function implementacijom s Turnstile i Resend servisima bez promjene forme.

## GitHub Pages

Svaki push na `main` pokreće workflow. Jednokratno u repozitoriju otvorite **Settings → Pages → Build and deployment → Source** i odaberite **GitHub Actions**. Preview će biti na:

`https://bero1007.github.io/ztk-web/`

Astro `base` je `/ztk-web`, pa sve interne putanje rade na GitHub Pages podmapi.

Na GitHub Free planu Pages za ovaj projekt zahtijeva javni repozitorij. Ako repo ostaje privatan, potreban je GitHub plan koji podržava Pages za privatne repozitorije. Workflow je već spreman i nakon promjene dostupnosti dovoljno ga je ponovno pokrenuti.

## Kasniji Cloudflare Pages

Povežite repo s Cloudflare Pages, postavite build command `npm run build`, output direktorij `dist` i produkcijsku varijablu `PUBLIC_BOOKING_ENDPOINT`. Za vlastitu domenu promijenite `site` i uklonite `base` u `astro.config.mjs`; aplikacijski linkovi ostat će funkcionalni.

## Vizualni asseti

Odobreni službeni asseti nalaze se u `public/images/brand`, `public/images/ensemble`, `public/images/album` i `public/images/events`. Putanje se vode kroz `BASE_URL`, pa rade i na GitHub Pages podmapi. Za nove fotografije i plakate koristite izvorne datoteke iz povezane Drive mape ili povezane ZTK e-pošte; ne generirajte zamjenska lica ili instrumente.

Vizualni sustav u `src/styles/global.css` izveden je iz službenog srebrno-bijelog logotipa, maslinastih tonova fotografija i toplog drveta instrumenata. Primarne su boje mineralna tamnoplava, papirnato svijetla, prigušena maslinasta i kontrolirani bakreni akcent. U headeru i footeru koristi se potpuni originalni logo; njegove SVG putanje nisu redizajnirane, samo je uklonjen suvišan prazan rub radi pravilnog prikaza.
