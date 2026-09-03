# ZTK web

Funkcionalni dvojezični prototip službene web-stranice Zagrebačkog tamburaškog kvarteta / Zagreb Tambura Quartet. Projekt je statički Astro + TypeScript web bez baze i CMS-a, pripremljen za GitHub Pages te kasniji prijenos na Cloudflare Pages i domenu `ztk.hr`.

## Arhitektura

- `src/data/content.ts` — jedini izvor strukturiranih podataka
- `src/components/` — dvojezične stranice i interaktivne komponente
- `src/pages/` — HR rute te engleske rute pod `/en/`
- `src/styles/global.css` — centralni design tokeni i zajednički stilovi
- `public/` — javni statički asseti
- `.github/workflows/deploy-pages.yml` — automatski GitHub Pages deployment

Sve kolekcije imaju `published`; javno se prikazuju samo zapisi s `published: true`. Događaji se automatski dijele na nadolazeće i arhivu prema datumu.

## Lokalni razvoj

Potrebni su Node.js 20+ i npm.

```sh
npm install
npm run dev
```

Produkcijski build i lokalni pregled:

```sh
npm run build
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

### Dodavanje djela

Dodajte objekt u `repertoire`, ostavite nepotvrđena polja prazna ili `writtenForZtk: 'unknown'`, te postavite jedinstvene `id` i `slug` vrijednosti. Opis se automatski ponovno koristi na stranicama događaja.

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

## Kasniji Cloudflare Pages

Povežite repo s Cloudflare Pages, postavite build command `npm run build`, output direktorij `dist` i produkcijsku varijablu `PUBLIC_BOOKING_ENDPOINT`. Za vlastitu domenu promijenite `site` i uklonite `base` u `astro.config.mjs`; aplikacijski linkovi ostat će funkcionalni.

## Vizualni asseti — TODO

Repo trenutno ne sadrži službeni logo, fotografije kvarteta ni album cover. Komponente zato imaju jasno označena privremena mjesta. Dodajte odobrene datoteke u `public/images/` i unesite njihove putanje u podatke/hero komponente; ne koristiti generirane portrete ili nepotvrđene fotografije.
