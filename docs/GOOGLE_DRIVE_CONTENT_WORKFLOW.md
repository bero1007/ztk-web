# Google Drive → javni web

Google Drive je urednički izvor, a `src/data/content.ts` je kontrolirani javni sloj weba. Ažuriranje nije slijepo zrcaljenje cijele management mape: ChatGPT/Codex pri svakom ažuriranju uspoređuje izvore, prenosi samo potvrđene javne podatke, pokreće provjere i tek zatim objavljuje GitHub Pages build.

## Izvori

- Management sustav: `1--Pp7zX00n1Isa1YI4Mf_czRT7YpmL_w`
- Fotografije i logotip: `1MiJO0iESBQ8c0YKVv6M_df3chaLWjNIm`
- Upravljačka tablica repertoara: [ZTK – javni repertoar za web](https://docs.google.com/spreadsheets/d/1m6j6oXcuUBNAhazmr3nSX6nyU942sccJzXaseAQKsuo/edit)
- Biografija i umjetnički dosje: izvor za biografiju ansambla, članove, nagrade, diskografiju i potvrđene arhivske nastupe
- Koncertni programi: izvor za javne programe i repertoar
- Projektne mape: izvor samo za potvrđene javne podatke o događaju

## Pravila objave

Objavljuje se:

- odobrena biografija ansambla i članova
- potvrđeni programi, repertoar, albumi, videozapisi i javni linkovi
- potvrđeni datum, vrijeme, javna lokacija, izvođači i opis događaja
- odobrene fotografije, naslovnice i službeni logotip

Nikada se ne objavljuje:

- honorar, cijena, budžet, račun ili interni trošak
- Booking Hub leadovi i privatni kontakti organizatora
- liste uzvanika, RSVP podaci i mailing liste
- interne bilješke, rokovi, odgovorne osobe i produkcijski kontakti
- neodobreni nacrti ili još nepotvrđeni sudionici/programi

Svaki javni zapis mora imati `published: true`. Nepotvrđena polja ostaju prazna, `unknown` ili se prikazuje neutralna napomena da sadržaj čeka potvrdu.

## Tablica repertoara

- `ANALIZA` — sažetak inventara, broja javnih zapisa i uredničkih odluka
- `WEB_REPERTOAR` — 70 zapisa s javnim HR/EN sadržajem, statusom provjere, izvorom i kontrolom `Published`
- `VIDEO` — videozapisi povezani stabilnim `Work ID` vrijednostima
- `PROGRAMI` — aktualni i radni programi povezani istim repertoarnim ID-jevima
- `LOOKUPS` — dopuštene vrijednosti za statusna polja

Stupci `Internal status`, `Material URL`, `Source note` i `Hold reason` služe isključivo uredničkom radu. Ne prikazuju se na javnom webu. Praizvedba ZTK-a ne mijenja automatski `Written for ZTK` u `true`; za tu tvrdnju potreban je izričit izvor.

## Postupak ažuriranja

1. U Driveu ažurirati odgovarajući dokument ili tablicu.
2. U razgovoru za ZTK zatražiti „ažuriraj web iz Drivea”.
3. ChatGPT/Codex čita samo relevantne promijenjene izvore, uspoređuje ih s upravljačkom tablicom, primjenjuje ova pravila i ažurira `src/data/content.ts` i javne assete.
4. Pokreće `npm run build`, provjeru poveznica i responsive prikaz.
5. Radi jasan commit i push na `main`; GitHub Actions objavljuje GitHub Pages.

Ovaj kontrolirani korak namjerno ostaje između internog Drivea i javnog weba kako interna informacija ne bi slučajno postala javna.
