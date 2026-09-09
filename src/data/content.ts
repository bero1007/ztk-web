export type Lang = 'hr' | 'en';

export interface Member {
  name: string;
  slug: string;
  instrument: { hr: string; en: string };
  bioShortHr: string;
  bioShortEn: string;
  bioFullHr: string;
  bioFullEn: string;
  photo?: string;
  photoPosition?: string;
  links?: { label: string; url: string }[];
  published: boolean;
}

export interface Programme {
  id: string;
  titleHr: string;
  titleEn: string;
  duration?: string;
  durationEn?: string;
  performersHr?: string;
  descriptionHr: string;
  descriptionEn: string;
  repertoireIds: string[];
  performers?: string;
  image?: string;
  published: boolean;
}

export type WorkType = 'original' | 'arrangement' | 'unknown';

export interface WorkMovement {
  titleHr: string;
  titleEn: string;
  duration?: string;
}

export interface Work {
  id: string;
  slug: string;
  composer: string;
  composerDates?: string;
  titleHr: string;
  titleEn: string;
  workType: WorkType;
  year?: string;
  duration?: string;
  instrumentationHr?: string;
  instrumentationEn?: string;
  arranger?: string;
  writtenForZtk: boolean | 'unknown';
  premieredByZtk?: boolean;
  premiereHr?: string;
  premiereEn?: string;
  dedication?: string;
  descriptionHr?: string;
  descriptionEn?: string;
  movements?: WorkMovement[];
  album?: string;
  programmeIds: string[];
  tags: string[];
  published: boolean;
}

export interface VideoRecord {
  id: string;
  workId: string;
  movementHr: string;
  movementEn: string;
  url: string;
  channel: string;
  official: boolean;
  noteHr?: string;
  noteEn?: string;
  published: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  titleHr: string;
  titleEn: string;
  date: string;
  time: string;
  endDate?: string;
  subtitleHr?: string;
  subtitleEn?: string;
  durationHr?: string;
  durationEn?: string;
  venue: string;
  address: string;
  city: string;
  otherCities?: string[];
  country: string;
  latitude?: number;
  longitude?: number;
  programme?: string;
  guestArtists: string[];
  moderator?: string;
  descriptionHr?: string;
  descriptionEn?: string;
  ticketUrl?: string;
  heroImage?: string;
  posterImage?: string;
  posterOriginal?: string;
  gallery: string[];
  videos: string[];
  repertoireIds: string[];
  published: boolean;
  digitalProgrammeEnabled: boolean;
}

export const members: Member[] = [
  {
    name: 'Marko Blašković', slug: 'marko-blaskovic', instrument: { hr: 'bisernica', en: 'bisernica' },
    bioShortHr: 'Docent Muzičke akademije u Zagrebu, dobitnik niza solističkih i komornih nagrada te jedan od osnivača ZTK-a.',
    bioShortEn: 'Assistant professor at the University of Zagreb Academy of Music, award-winning soloist and chamber musician, and a ZTK founding member.',
    bioFullHr: "Marko Blašković (Zagreb, 1997.) maturirao je 2016. u Glazbenoj školi Ferdo Livadić u Samoboru, u klasi Petre Vojvodić Mrvoš. Iste je godine upisao glazbenu pedagogiju na Muzičkoj akademiji u Zagrebu, uz modul tambure u klasi Veljka Valentina Škorvage. Nakon toga upisao je instrumentalni studij tambure i diplomirao 2021.\n\nDobitnik je brojnih solističkih i komornih nagrada, među kojima su prve nagrade na državnim natjecanjima u Dubrovniku te Međunarodnom natjecanju tamburaša u Požegi. Surađuje sa Zagrebačkim solistima, Simfonijskim orkestrom HRT-a i Tamburaškim orkestrom HRT-a, čiji je redoviti suradnik od 2019. Uz potonji je praizveo koncerte za bisernicu i tamburaški orkestar Marka Bertića (2019.) i Tihomira Ranogajca (2025.).\n\nSuosnivač je Zagrebačkog tamburaškog kvarteta, s kojim nastupa u Hrvatskoj i inozemstvu, naručuje i praizvodi nova djela te je 2025. objavio album Tambura da camera. Uz koncertnu djelatnost održava predavanja na stručnim skupovima i seminarima.\n\nNa Muzičkoj akademiji u Zagrebu 2021. postao je naslovni asistent, a 2025. docent. Od 2024. pohađa doktorski studij komorne glazbe na Akademiji umetnosti u Novom Sadu.",
    bioFullEn: "Born in Zagreb in 1997, Marko Blašković graduated from the Ferdo Livadić Music School in Samobor in 2016, studying with Petra Vojvodić Mrvoš. He then enrolled in music education at the University of Zagreb Academy of Music, alongside the tambura module taught by Veljko Valentin Škorvaga. He subsequently entered the instrumental tambura programme and graduated in 2021.\n\nHis numerous solo and chamber awards include first prizes at national competitions in Dubrovnik and the International Tambura Competition in Požega. He collaborates with the Zagreb Soloists, the Croatian Radiotelevision Symphony Orchestra and the Croatian Radiotelevision Tambura Orchestra, with which he has worked regularly since 2019. With the latter he premiered concertos for bisernica and tambura orchestra by Marko Bertić (2019) and Tihomir Ranogajac (2025).\n\nA founding member of Zagreb Tambura Quartet, he performs internationally, commissions and premieres new works, and recorded the quartet’s album Tambura da camera, released in 2025. Alongside performing, he gives lectures at professional gatherings and seminars.\n\nHe became a titular assistant at the University of Zagreb Academy of Music in 2021 and an assistant professor in 2025. Since 2024 he has pursued doctoral studies in chamber music at the Academy of Arts in Novi Sad.",
    photo: '/images/ensemble/marko-blaskovic.webp', photoPosition: '38% center', published: true
  },
  {
    name: 'Martin Durbek', slug: 'martin-durbek', instrument: { hr: 'A-brač', en: 'A-brač' },
    bioShortHr: 'Nastavnik tambure, voditelj Tamburaškog orkestra Ratimir Joža Prosoli i jedan od osnivača ZTK-a.',
    bioShortEn: 'Tambura teacher, conductor of the Ratimir Joža Prosoli Tambura Orchestra, and a ZTK founding member.',
    bioFullHr: 'Glazbeno obrazovanje stekao je u Glazbenoj školi Požega, a studij tambure završio je 2024. na Muzičkoj akademiji Sveučilišta u Zagrebu u klasi v. pred. Veljka Valentina Škorvage. Kao solist osvojio je niz prvih nagrada na regionalnim, državnim i međunarodnim natjecanjima, uključujući Oskar znanja.\n\nZaposlen je kao nastavnik tambure u Glazbenoj školi Frana Lhotke u Sisku i vodi Tamburaški orkestar Ratimir Joža Prosoli. Surađuje s Tamburaškim orkestrom HRT-a te pohađa doktorski studij komorne glazbe na Akademiji umetnosti u Novom Sadu.',
    bioFullEn: 'Martin studied at the Požega Music School and completed his tambura degree in 2024 at the University of Zagreb Academy of Music, in the class of Veljko Valentin Škorvaga. As a soloist he has won first prizes at regional, national and international competitions, including Croatia’s Oskar znanja recognition.\n\nHe teaches tambura at the Fran Lhotka Music School in Sisak and conducts the Ratimir Joža Prosoli Tambura Orchestra. He collaborates with the Croatian Radiotelevision Tambura Orchestra and is pursuing doctoral studies in chamber music at the Academy of Arts in Novi Sad.',
    photo: '/images/ensemble/dk-101664.webp', photoPosition: '66% center', published: true
  },
  {
    name: 'Franjo Pećarić', slug: 'franjo-pecaric', instrument: { hr: 'E-brač', en: 'E-brač' },
    bioShortHr: 'Docent Odsjeka za glazbenu pedagogiju i tambure Muzičke akademije u Zagrebu, aranžer i dirigent.',
    bioShortEn: 'Assistant professor of Music Education and Tambura at the University of Zagreb Academy of Music, arranger and conductor.',
    bioFullHr: "Franjo Pećarić (Vinkovci, 1995.) glazbeno se obrazovao u Vinkovcima i Križevcima. U Glazbenoj školi Alberta Štrige 2014. maturirao je na odjelu tambure i teorijskom odjelu. Na Muzičkoj akademiji u Zagrebu diplomirao je glazbenu pedagogiju 2019., pod mentorstvom Veljka Valentina Škorvage, a studij tambure završio je 2021.\n\nKao solist i član komornih sastava osvojio je niz nagrada na regionalnim, državnim i međunarodnim natjecanjima. Od 2018. predaje tamburu u Glazbenoj školi Frana Lhotke u Sisku. Redovito sudjeluje kao predavač na stručnim skupovima Agencije za odgoj i obrazovanje i Hrvatskog društva tamburaških pedagoga, a sa svojim učenicima ostvaruje zapažene natjecateljske rezultate. Godine 2023. promoviran je u zvanje profesora mentora.\n\nGodine 2020. osnovao je Gradski tamburaški orkestar Ivan Goran Kovačić Sisak, koji vodi i kojim dirigira. Suosnivač je Zagrebačkog tamburaškog kvarteta od 2021. te je sudjelovao u snimanju autorskih nosača zvuka Tomislava Uhlika i Tihomira Ranogajca.\n\nOd akademske godine 2023./2024. pohađa doktorski studij komorne glazbe na Akademiji umetnosti u Novom Sadu. Docent je na Odsjeku za glazbenu pedagogiju i tambure Muzičke akademije u Zagrebu.",
    bioFullEn: "Born in Vinkovci in 1995, Franjo Pećarić studied music in Vinkovci and Križevci, graduating from the tambura and music theory departments of the Albert Štriga Music School in 2014. At the University of Zagreb Academy of Music he completed a degree in music education in 2019 under the mentorship of Veljko Valentin Škorvaga, followed by a tambura degree in 2021.\n\nAs a soloist and chamber musician he has won awards at regional, national and international competitions. He has taught tambura at the Fran Lhotka Music School in Sisak since 2018 and regularly lectures at professional gatherings organised by Croatia’s Education and Teacher Training Agency and the Croatian Society of Tambura Educators. His students achieve notable competition results; in 2023 he was promoted to the professional rank of teacher mentor.\n\nIn 2020 he founded the Ivan Goran Kovačić City Tambura Orchestra in Sisak, serving as its leader and conductor. He co-founded Zagreb Tambura Quartet in 2021 and has participated in recordings of albums by Tomislav Uhlik and Tihomir Ranogajac.\n\nSince the 2023/2024 academic year he has pursued doctoral studies in chamber music at the Academy of Arts in Novi Sad. He is an assistant professor in the Department of Music Education and Tamburas at the University of Zagreb Academy of Music.",
    photo: '/images/ensemble/dk-101664.webp', photoPosition: '10% center', published: true
  },
  {
    name: 'Ivan Koprić', slug: 'ivan-kopric', instrument: { hr: 'čelo', en: 'čelo' },
    bioShortHr: 'Član Tamburaškog orkestra HRT-a, nagrađivani tamburaš i jedan od prvih magistara muzike na tamburi.',
    bioShortEn: 'Member of the Croatian Radiotelevision Tambura Orchestra, award-winning tambura player and one of Croatia’s first master’s graduates in tambura performance.',
    bioFullHr: 'Glazbeno školovanje započeo je u Glazbenoj školi Vrbovec, nastavio u Glazbenoj školi Alberta Štrige u Križevcima te 2021. završio studij tambure na Muzičkoj akademiji Sveučilišta u Zagrebu. Tijekom studija koncertirao je kao solist i član orkestralnih sastava te osvojio prve nagrade na državnim i međunarodnim natjecanjima, uključujući Grand Prix natjecanja YoungPrague 2014.\n\nKao član Tamburaškog orkestra HRT-a 2019. nastupio je u Kini u sklopu Tjedna europske glazbe. Danas je zaposlen u Tamburaškom orkestru Hrvatske radiotelevizije na dionici brača.',
    bioFullEn: 'Ivan began his musical education in Vrbovec, continued at the Albert Štriga Music School in Križevci and graduated in tambura performance from the University of Zagreb Academy of Music in 2021. He performed regularly as a soloist and ensemble musician and won first prizes at national and international competitions, including the Grand Prix at YoungPrague in 2014.\n\nAs a member of the Croatian Radiotelevision Tambura Orchestra he performed in China during European Music Week in 2019. He is currently a member of that orchestra, playing the brač part.',
    photo: '/images/ensemble/dk-101664.webp', photoPosition: '91% center', published: true
  }
];

export const ensembleBiography = {
  hr: 'Zagrebački tamburaški kvartet osnovan je 2021. na inicijativu studenata tambure Muzičke akademije Sveučilišta u Zagrebu i prvi je profesionalni tamburaški kvartet u svijetu. Umjetničko djelovanje usmjereno je na afirmaciju tambure kao suvremenoga komornog glazbala, razvoj novog repertoara, praizvedbe i promociju hrvatske glazbe u zemlji i inozemstvu.',
  en: 'Zagreb Tambura Quartet was founded in 2021 by tambura students of the University of Zagreb Academy of Music and is the world’s first professional tambura quartet. Its work centres on establishing the tambura as a contemporary chamber instrument, developing new repertoire, presenting world premieres and promoting Croatian music at home and abroad.'
};

export const ensembleHighlights = {
  hr: ['Grand Prix i Zlatna plaketa s najvećom pohvalom, Osijek 2022.', 'Prva nagrada na 1er IMC – Les Musicales du Centre, Francuska 2022.', 'Turneja u Argentini te gostovanja u Njemačkoj i Kanadi.', 'Album Tambura da camera (2025.) i nominacija skladbe Hommage à Emil Cossetto Tomislava Uhlika za nagradu Porin.'],
  en: ['Grand Prix and Gold Plaque with highest praise, Osijek 2022.', 'First Prize at 1er IMC – Les Musicales du Centre, France 2022.', 'Tour in Argentina and guest performances in Germany and Canada.', 'Tambura da camera (2025), featuring Tomislav Uhlik’s Porin-nominated Hommage à Emil Cossetto.']
};

export const programmes: Programme[] = [
  {
    id: 'ztk-jan-plevko', titleHr: 'Kvartet i klarinet', titleEn: 'Quartet and clarinet',
    duration: 'oko 60 min', durationEn: 'approx. 60 min',
    performersHr: 'Zagrebački tamburaški kvartet i Jan Plevko, klarinet',
    performers: 'Zagreb Tambura Quartet & Jan Plevko, clarinet',
    descriptionHr: 'Mozartov i Weberov klarinetski kvintet u susretu klarineta i tamburaškog kvarteta.',
    descriptionEn: 'Mozart’s and Weber’s clarinet quintets bring together clarinet and tambura quartet.',
    repertoireIds: ['mozart-clarinet-quintet-k581', 'weber-clarinet-quintet-op34'],
    image: '/images/ensemble/dk-101470.webp', published: true
  },
  {
    id: 'mozart', titleHr: 'Mozart', titleEn: 'Mozart', duration: 'oko 60 min', durationEn: 'approx. 60 min', performersHr: 'Zagrebački tamburaški kvartet i Jan Plevko, klarinet',
    descriptionHr: 'Mozartov program za tamburaški kvartet i klarinet.',
    descriptionEn: 'A Mozart programme for tambura quartet and clarinet.',
    performers: 'Zagreb Tambura Quartet & Jan Plevko, clarinet', image: '/images/ensemble/dk-101470.webp',
    repertoireIds: ['mozart-divertimento-k136', 'mozart-string-quartet-k157', 'mozart-clarinet-quintet-k581'],
    published: true
  },
  {
    id: 'tambura-da-camera', titleHr: 'Tambura da camera', titleEn: 'Tambura da camera',
    descriptionHr: 'Album i koncertni program suvremene tamburaške komorne glazbe.',
    descriptionEn: 'An album and concert programme of contemporary chamber music for tambura.',
    repertoireIds: ['vlahek-orbital', 'uhlik-hommage-emil-cossetto', 'novosel-bunjevacka-igra-i-fuga', 'uhlik-tambura-da-camera', 'hrenic-tema-i-varijacije', 'bertic-skica', 'hrenic-musettura'],
    image: '/images/album/tambura-da-camera-cover.webp', published: true
  },
  {
    id: 'redovni-program', titleHr: 'Redovni koncertni program 2026./2027.', titleEn: 'Regular concert programme 2026/2027', duration: '50 min',
    descriptionHr: 'Program sezone 2026./2027. okuplja djela Nikole Vilusa, Marka Bertića, Dubravka Palanovića i Richarda Boukasa, pisana za Zagrebački tamburaški kvartet.',
    descriptionEn: 'The 2026/2027 season programme brings together works by Nikola Vilus, Marko Bertić, Dubravko Palanović and Richard Boukas, written for Zagreb Tambura Quartet.',
    repertoireIds: ['vilus-kvartet-br-1', 'bertic-skica', 'palanovic-kvartet', 'boukas-brazilske-refleksije'],
    image: '/images/ensemble/jev-03494.webp', published: true
  },
  {
    id: 'po-dogovoru', titleHr: 'Program po dogovoru', titleEn: 'Bespoke programme',
    descriptionHr: 'Program oblikovan u razgovoru s organizatorom, prema kontekstu i publici događaja.',
    descriptionEn: 'A programme shaped with the organiser for the event, context and audience.',
    repertoireIds: [], image: '/images/ensemble/dk-101584.webp', published: true
  }
];

programmes.sort((a, b) => ['redovni-program', 'ztk-jan-plevko', 'mozart', 'tambura-da-camera', 'po-dogovoru'].indexOf(a.id) - ['redovni-program', 'ztk-jan-plevko', 'mozart', 'tambura-da-camera', 'po-dogovoru'].indexOf(b.id));

export const repertoire: Work[] = [
  {
    id: 'vlahek-orbital', slug: 'orbital', composer: 'Bruno Vlahek', titleHr: 'Orbital', titleEn: 'Orbital', workType: 'original',
    duration: '05:23', instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown', premieredByZtk: true,
    premiereHr: '2023. · Iz salona Očić, Hrvatski radio, Zagreb', premiereEn: '2023 · From the Očić Salon, Croatian Radio, Zagreb',
    descriptionHr: 'Zagrebački tamburaški kvartet praizveo je djelo 2023. u koncertnom projektu Iz salona Očić, uz izravan prijenos na Trećem programu Hrvatskoga radija. Snimka je objavljena na albumu Tambura da camera (2025.).',
    descriptionEn: 'Zagreb Tambura Quartet premiered the work in 2023 in the concert project From the Očić Salon, broadcast live on Croatian Radio’s Third Programme. The recording was released on Tambura da camera (2025).',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'uhlik-hommage-emil-cossetto', slug: 'hommage-a-emil-cossetto', composer: 'Tomislav Uhlik', titleHr: 'Hommage à Emil Cossetto', titleEn: 'Hommage à Emil Cossetto', workType: 'original',
    duration: '06:58', instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown',
    descriptionHr: 'Skladba je objavljena na albumu Tambura da camera (2025.) i nominirana za nagradu Porin u kategoriji najbolje skladbe klasične glazbe.',
    descriptionEn: 'The work was released on Tambura da camera (2025) and received a Porin Award nomination in the Best Classical Composition category.',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'novosel-bunjevacka-igra-i-fuga', slug: 'bunjevacka-igra-i-fuga', composer: 'Filip Novosel', titleHr: 'Bunjevačka igra i fuga', titleEn: 'Bunjevačka igra i fuga', workType: 'original',
    duration: '06:41', instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown', premieredByZtk: true,
    premiereHr: '2022. · 22. Tamburaški memorijal Hrvoja Majića, Vinkovci', premiereEn: '2022 · 22nd Hrvoje Majić Tambura Memorial, Vinkovci',
    descriptionHr: 'Kvartet je djelo praizveo 2022. na 22. Tamburaškom memorijalu Hrvoja Majića u Vinkovcima. Snimka je objavljena na albumu Tambura da camera (2025.).',
    descriptionEn: 'The quartet premiered the work in 2022 at the 22nd Hrvoje Majić Tambura Memorial in Vinkovci. The recording was released on Tambura da camera (2025).',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'uhlik-tambura-da-camera', slug: 'tambura-da-camera', composer: 'Tomislav Uhlik', titleHr: 'Tambura da camera', titleEn: 'Tambura da camera', workType: 'original',
    duration: '13:44', instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown',
    movements: [
      { titleHr: 'I. Allegro', titleEn: 'I. Allegro', duration: '04:17' },
      { titleHr: 'II. Lentamente – Allegro vivace – Moderato – Tempo I', titleEn: 'II. Lentamente – Allegro vivace – Moderato – Tempo I', duration: '06:42' },
      { titleHr: 'III. Con moto', titleEn: 'III. Con moto', duration: '02:45' }
    ],
    descriptionHr: 'Trostavačna skladba nalazi se na istoimenom prvom samostalnom albumu kvarteta, objavljenom 2025.',
    descriptionEn: 'This three-movement work appears on the quartet’s first independent album of the same title, released in 2025.',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'hrenic-tema-i-varijacije', slug: 'tema-i-varijacije-u-d-molu', composer: 'Jurica Hrenić', titleHr: 'Tema i varijacije u d-molu', titleEn: 'Theme and Variations in D minor', workType: 'original',
    duration: '12:57', instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown',
    descriptionHr: 'Skladba je objavljena na albumu Tambura da camera (2025.).', descriptionEn: 'The work was released on Tambura da camera (2025).',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'bertic-skica', slug: 'skica', composer: 'Marko Bertić', titleHr: 'Skica', titleEn: 'Sketch', workType: 'original',
    duration: '02:05', instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: true, premieredByZtk: true,
    premiereHr: '2023. · Iz salona Očić, Hrvatski radio, Zagreb', premiereEn: '2023 · From the Očić Salon, Croatian Radio, Zagreb',
    descriptionHr: 'Zagrebački tamburaški kvartet praizveo je djelo 2023. u koncertnom projektu Iz salona Očić, uz izravan prijenos na Trećem programu Hrvatskoga radija. Snimka je objavljena na albumu Tambura da camera (2025.).',
    descriptionEn: 'Zagreb Tambura Quartet premiered the work in 2023 in the concert project From the Očić Salon, broadcast live on Croatian Radio’s Third Programme. The recording was released on Tambura da camera (2025).',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera', 'redovni-program'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'hrenic-musettura', slug: 'musettura', composer: 'Jurica Hrenić', titleHr: 'Musettura', titleEn: 'Musettura', workType: 'original',
    duration: '05:15', writtenForZtk: 'unknown', premieredByZtk: true,
    premiereHr: '2023. · Iz salona Očić, Hrvatski radio, Zagreb', premiereEn: '2023 · From the Očić Salon, Croatian Radio, Zagreb',
    descriptionHr: 'Zagrebački tamburaški kvartet praizveo je djelo 2023. u koncertnom projektu Iz salona Očić, uz izravan prijenos na Trećem programu Hrvatskoga radija. Snimka je objavljena na albumu Tambura da camera (2025.).',
    descriptionEn: 'Zagreb Tambura Quartet premiered the work in 2023 in the concert project From the Očić Salon, broadcast live on Croatian Radio’s Third Programme. The recording was released on Tambura da camera (2025).',
    album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'hrenic-pet-varijacija-sarabande', slug: 'pet-varijacija-na-handelov-sarabande', composer: 'Jurica Hrenić', titleHr: 'Pet varijacija na Händelov „Sarabande“', titleEn: 'Five Variations on Handel’s “Sarabande”', workType: 'original',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown', premieredByZtk: true,
    premiereHr: '2021. · prvi cjelovečernji koncert ZTK-a, Kutina', premiereEn: '2021 · ZTK’s first full-length concert, Kutina',
    descriptionHr: 'ZTK je djelo praizveo 2021. u Kutini na svojem prvom cjelovečernjem koncertu.',
    descriptionEn: 'ZTK premiered the work in Kutina in 2021 at the quartet’s first full-length concert.',
    programmeIds: [], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'skljarov-nije-pristojno', slug: 'nije-pristojno', composer: 'Helena Skljarov', titleHr: 'Nije pristojno', titleEn: 'Nije pristojno', workType: 'original',
    instrumentationHr: 'tamburaški kvartet i klavir', instrumentationEn: 'tambura quartet and piano', writtenForZtk: 'unknown', premieredByZtk: true,
    premiereHr: '2021. · 58. Glazbena tribina HDS-a, Osijek', premiereEn: '2021 · 58th Croatian Composers’ Society Music Tribune, Osijek',
    descriptionHr: 'ZTK je djelo praizveo 2021. na 58. Glazbenoj tribini Hrvatskog društva skladatelja u Osijeku, uz pijanista Ivana Batoša.',
    descriptionEn: 'ZTK premiered the work in 2021 at the 58th Croatian Composers’ Society Music Tribune in Osijek, with pianist Ivan Batoš.',
    programmeIds: [], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'hudulin-katride', slug: 'katride', composer: 'Robert James Hudulin', titleHr: 'Katride', titleEn: 'Katride', workType: 'original',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: 'unknown', premieredByZtk: true,
    premiereHr: '2025.', premiereEn: '2025',
    descriptionHr: 'Zagrebački tamburaški kvartet praizveo je djelo 2025.', descriptionEn: 'Zagreb Tambura Quartet premiered the work in 2025.',
    programmeIds: [], tags: ['contemporary'], published: true
  },
  {
    id: 'miletic-folklorne-kasacije', slug: 'folklorne-kasacije', composer: 'Miroslav Miletić', titleHr: 'Folklorne kasacije', titleEn: 'Folklorne kasacije', workType: 'arrangement',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', arranger: 'Franjo Pećarić', writtenForZtk: false,
    programmeIds: [], tags: ['croatian', '20th'], published: true
  },
  {
    id: 'potocnik-cet-r-momka', slug: 'cetr-momka-od-iloka', composer: 'Božo Potočnik', titleHr: "Čet'r momka od Iloka", titleEn: "Čet'r momka od Iloka", workType: 'unknown',
    writtenForZtk: 'unknown', programmeIds: [], tags: ['croatian'], published: true
  },
  {
    id: 'piazzolla-fuga-y-misterio', slug: 'fuga-y-misterio', composer: 'Astor Piazzolla', titleHr: 'Fuga y misterio', titleEn: 'Fuga y misterio', workType: 'arrangement',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', arranger: 'Franjo Pećarić', writtenForZtk: false,
    programmeIds: [], tags: ['international', '20th'], published: true
  },
  {
    id: 'vilus-kvartet-br-1', slug: 'tamburaski-kvartet-br-1', composer: 'Nikola Vilus', titleHr: 'Tamburaški kvartet br. 1', titleEn: 'Tambura Quartet No. 1', workType: 'original',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: true,
    movements: [
      { titleHr: 'I. Largo – Vivo', titleEn: 'I. Largo – Vivo' },
      { titleHr: 'II. Adagio', titleEn: 'II. Adagio' },
      { titleHr: 'III. Vivo', titleEn: 'III. Vivo' }
    ],
    descriptionHr: 'Trostavačno djelo dio je redovnoga koncertnog programa ZTK-a za sezonu 2026./2027.',
    descriptionEn: 'This three-movement work is part of ZTK’s regular concert programme for the 2026/2027 season.',
    programmeIds: ['redovni-program'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'palanovic-kvartet', slug: 'kvartet-za-cetiri-tambure', composer: 'Dubravko Palanović', titleHr: 'Kvartet za četiri tambure', titleEn: 'Quartet for Four Tamburas', workType: 'original',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: true, premieredByZtk: false,
    descriptionHr: 'Djelo za tamburaški kvartet dio je koncertnog programa sezone 2026./2027.',
    descriptionEn: 'This work for tambura quartet forms part of the 2026/2027 season programme.',
    programmeIds: ['redovni-program'], tags: ['croatian', 'contemporary'], published: true
  },
  {
    id: 'boukas-brazilske-refleksije', slug: 'brazilske-refleksije', composer: 'Richard Boukas', titleHr: 'Brazilske refleksije', titleEn: 'Brazilian Reflections', workType: 'original',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', writtenForZtk: true, premieredByZtk: false,
    movements: [
      { titleHr: 'I. Guarânia Coxé', titleEn: 'I. Guarânia Coxé' },
      { titleHr: 'II. Chorizinho', titleEn: 'II. Chorizinho' },
      { titleHr: 'III. Maestro Duda', titleEn: 'III. Maestro Duda' }
    ],
    descriptionHr: 'Trostavačna suita pisana za Zagrebački tamburaški kvartet dio je koncertnog programa sezone 2026./2027.',
    descriptionEn: 'This three-movement suite, written for Zagreb Tambura Quartet, forms part of the 2026/2027 season programme.',
    programmeIds: ['redovni-program'], tags: ['international', 'contemporary'], published: true
  },
  {
    year: '1772', id: 'mozart-divertimento-k136', slug: 'divertimento-k136', composer: 'W. A. Mozart', titleHr: 'Divertimento u D-duru, K. 136', titleEn: 'Divertimento in D major, K. 136', workType: 'arrangement',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', arranger: 'G. Hlebec', writtenForZtk: false,
    movements: [
      { titleHr: 'I. Allegro', titleEn: 'I. Allegro' },
      { titleHr: 'II. Andante', titleEn: 'II. Andante' },
      { titleHr: 'III. Presto', titleEn: 'III. Presto' }
    ],
    descriptionHr: 'Obrada G. Hlebeca dio je Mozartova programa Zagrebačkog tamburaškog kvarteta.',
    descriptionEn: 'G. Hlebec’s arrangement forms part of Zagreb Tambura Quartet’s Mozart programme.',
    programmeIds: ['mozart'], tags: ['international', 'classical'], published: true
  },
  {
    id: 'mozart-string-quartet-k157', slug: 'string-quartet-k157', composer: 'W. A. Mozart', titleHr: 'Gudački kvartet br. 4 u C-duru, K. 157', titleEn: 'String Quartet No. 4 in C major, K. 157', workType: 'arrangement',
    instrumentationHr: 'tamburaški kvartet', instrumentationEn: 'tambura quartet', arranger: 'Danijel Tomašević', writtenForZtk: false,
    movements: [
      { titleHr: 'I. Allegro', titleEn: 'I. Allegro' },
      { titleHr: 'II. Andante', titleEn: 'II. Andante' },
      { titleHr: 'III. Presto', titleEn: 'III. Presto' }
    ],
    descriptionHr: 'Obrada Danijela Tomaševića dio je Mozartova programa Zagrebačkog tamburaškog kvarteta.',
    descriptionEn: 'Danijel Tomašević’s arrangement forms part of Zagreb Tambura Quartet’s Mozart programme.',
    programmeIds: ['mozart'], tags: ['international', 'classical'], published: true
  },
  {
    year: '1789', id: 'mozart-clarinet-quintet-k581', slug: 'clarinet-quintet-k581', composer: 'W. A. Mozart', titleHr: 'Klarinetski kvintet u A-duru, K. 581', titleEn: 'Clarinet Quintet in A major, K. 581', workType: 'arrangement',
    duration: '32:20', instrumentationHr: 'klarinet i tamburaški kvartet', instrumentationEn: 'clarinet and tambura quartet', arranger: 'Danijel Tomašević', writtenForZtk: false,
    movements: [
      { titleHr: 'I. Allegro', titleEn: 'I. Allegro' },
      { titleHr: 'II. Larghetto', titleEn: 'II. Larghetto' },
      { titleHr: 'III. Menuetto', titleEn: 'III. Menuetto' },
      { titleHr: 'IV. Allegretto con variazioni', titleEn: 'IV. Allegretto con variazioni' }
    ],
    descriptionHr: 'Obrada Danijela Tomaševića izvodi se s klarinetistom Janom Plevkom u Mozartovu programu kvarteta.',
    descriptionEn: 'Danijel Tomašević’s arrangement is performed with clarinettist Jan Plevko in the quartet’s Mozart programme.',
    programmeIds: ['mozart', 'ztk-jan-plevko'], tags: ['international', 'classical'], published: true
  }
];

repertoire.push({
  id: 'weber-clarinet-quintet-op34', slug: 'clarinet-quintet-op34', composer: 'Carl Maria von Weber',
  titleHr: 'Klarinetski kvintet u B-duru, op. 34', titleEn: 'Clarinet Quintet in B-flat major, Op. 34',
  workType: 'arrangement', arranger: 'Marko Blašković', writtenForZtk: false,
  instrumentationHr: 'klarinet i tamburaški kvartet', instrumentationEn: 'clarinet and tambura quartet',
  movements: ['I. Allegro', 'II. Fantasia – Adagio ma non troppo', 'III. Menuetto – Capriccio presto', 'IV. Rondo – Allegro giocoso'].map(title => ({ titleHr: title, titleEn: title })),
  programmeIds: ['ztk-jan-plevko'], tags: ['international'], published: true
});

export const events: EventItem[] = [
  {
    id: 'tambura-da-camera-zagreb-2026', slug: 'tambura-da-camera-zagreb-2026',
    titleHr: 'Tambura da camera - promocija albuma',
    titleEn: 'Tambura da camera - album presentation',
    subtitleHr: '5 godina djelovanja Zagrebačkog tamburaškog kvarteta', subtitleEn: 'Five years of Zagreb Tambura Quartet',
    durationHr: 'do 60 minuta', durationEn: 'up to 60 minutes',
    date: '2026-09-30', time: '20:00', venue: 'Dvorana Hrvatske matice iseljenika', address: 'Trg Stjepana Radića 3', city: 'Zagreb', country: 'Hrvatska', latitude: 45.8015214, longitude: 15.9801683,
    programme: 'tambura-da-camera', guestArtists: [], moderator: 'Sonja Mrnjavčić', heroImage: '/images/ensemble/jev-03488.webp',
    posterImage: '/images/events/tambura-da-camera-promotion-poster.webp', posterOriginal: '/images/events/tambura-da-camera-promotion-poster.png', gallery: [], videos: [],
    descriptionHr: 'Koncert i razgovor sa skladateljima zastupljenima na albumu, povodom promocije albuma Tambura da camera i pet godina djelovanja Zagrebačkog tamburaškog kvarteta.',
    descriptionEn: 'A concert and conversation with composers represented on the album, marking the presentation of Tambura da camera and five years of Zagreb Tambura Quartet.',
    repertoireIds: [],
    published: true, digitalProgrammeEnabled: false
  },
  { id:'iz-salona-ocic-2023', slug:'iz-salona-ocic-2023', titleHr:'Iz salona Očić', titleEn:'From the Očić Salon', date:'2023-06-15', time:'', venue:'Salon Očić', address:'', city:'Zagreb', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:['vlahek-orbital','bertic-skica','hrenic-musettura'], descriptionHr:'Koncertno gostovanje uz izravan prijenos na Trećem programu Hrvatskog radija i tri praizvedbe.', descriptionEn:'A concert broadcast live on Croatian Radio’s Third Programme, featuring three world premieres.', published:true, digitalProgrammeEnabled:false },
  { id:'sancta-barbara-2023', slug:'sancta-barbara-2023', titleHr:'5. Festival drvenih kapela Sancta Barbara', titleEn:'5th Sancta Barbara Festival of Wooden Chapels', date:'2023-06-25', time:'', venue:'Kapela sv. Barbare', address:'', city:'Velika Mlaka', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'darko-lukic-2024', slug:'darko-lukic-2024', titleHr:'58. Tribina „Darko Lukić”', titleEn:'58th Darko Lukić Recital Series', date:'2024-10-20', time:'', venue:'Koncertna dvorana Glazbene škole Elly Bašić', address:'', city:'Zagreb', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'miletić-days-2024', slug:'dani-miroslava-miletica-2024', titleHr:'24. Dani glazbe Miroslava Miletića', titleEn:'24th Miroslav Miletić Music Days', date:'2024-11-08', time:'', venue:'Dom INA Rafinerije', address:'', city:'Sisak', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:['miletic-folklorne-kasacije'], published:true, digitalProgrammeEnabled:false },
  { id:'kuca-tambure-2024', slug:'kuca-tambure-2024', titleHr:'Koncert u Kući tambure', titleEn:'Concert at the House of Tambura', date:'2024-12-05', time:'', venue:'Kuća tambure – slavonska glazbena čitanka', address:'', city:'Slavonski Brod', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'rab-2025', slug:'rab-2025', titleHr:'Koncert u crkvi sv. Križa', titleEn:'Concert at the Church of the Holy Cross', date:'2025-08-28', time:'', venue:'Crkva sv. Križa', address:'', city:'Rab', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'drnis-2025', slug:'drnis-2025', titleHr:'Koncert u crkvi sv. Roka', titleEn:'Concert at St Roch’s Church', date:'2025-08-26', time:'', venue:'Crkva sv. Roka', address:'', city:'Drniš', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false }
];

// Public performance entries only; rehearsals, private travel and contact notes are excluded.
events.push(...[
  {
    "id": "malezija-2026",
    "slug": "malezija-2026",
    "titleHr": "Gostovanje u Maleziji",
    "titleEn": "Guest performances in Malaysia",
    "date": "2026-10-04",
    "endDate": "2026-10-08",
    "time": "",
    "city": "",
    "country": "Malezija",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": false,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "uhlik-muza-2026",
    "slug": "uhlik-muza-2026",
    "titleHr": "Tomislav Uhlik – 70. rođendan",
    "titleEn": "Tomislav Uhlik – 70th birthday",
    "date": "2026-11-11",
    "time": "20:00",
    "city": "Zagreb",
    "country": "Hrvatska",
    "venue": "Dvorana Bersa, Muzička akademija Sveučilišta u Zagrebu",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "svicarska-2027",
    "slug": "svicarska-2027",
    "titleHr": "Gostovanje u Švicarskoj",
    "titleEn": "Guest performances in Switzerland",
    "date": "2027-04-10",
    "endDate": "2027-04-13",
    "time": "",
    "city": "",
    "country": "Švicarska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "mbz-2027",
    "slug": "mbz-2027",
    "titleHr": "Muzički biennale Zagreb",
    "titleEn": "Music Biennale Zagreb",
    "date": "2027-04-15",
    "time": "20:00",
    "city": "Zagreb",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "hgz-leopold-2027",
    "slug": "hgz-leopold-2027",
    "titleHr": "Koncert uz Sinišu Leopolda",
    "titleEn": "Concert with Siniša Leopold",
    "date": "2027-06-10",
    "time": "19:00",
    "city": "Zagreb",
    "country": "Hrvatska",
    "venue": "Hrvatski glazbeni zavod",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "grubisno-polje-2022-05-10",
    "slug": "grubisno-polje-2022-05-10",
    "titleHr": "Koncert · Grubišno Polje",
    "titleEn": "Concert · Grubišno Polje",
    "date": "2022-05-10",
    "time": "",
    "city": "Grubišno Polje",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "vinkovci-2022-05-11",
    "slug": "vinkovci-2022-05-11",
    "titleHr": "Koncert · Vinkovci",
    "titleEn": "Concert · Vinkovci",
    "date": "2022-05-11",
    "time": "",
    "city": "Vinkovci",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "lasinja-2022-06-16",
    "slug": "lasinja-2022-06-16",
    "titleHr": "Koncert · Lasinja",
    "titleEn": "Concert · Lasinja",
    "date": "2022-06-16",
    "time": "",
    "city": "Lasinja",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "tuhelj-2022-07-01",
    "slug": "tuhelj-2022-07-01",
    "titleHr": "Koncert · Tuhelj",
    "titleEn": "Concert · Tuhelj",
    "date": "2022-07-01",
    "time": "",
    "city": "Tuhelj",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "zagreb-2023-02-10",
    "slug": "zagreb-2023-02-10",
    "titleHr": "Humanitarni koncert",
    "titleEn": "Charity concert",
    "date": "2023-02-10",
    "time": "",
    "city": "Zagreb",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "split-2023-04-19",
    "slug": "split-2023-04-19",
    "titleHr": "Koncert u ciklusu Vinko Lesić",
    "titleEn": "Vinko Lesić concert series",
    "date": "2023-04-19",
    "time": "",
    "city": "Split",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "lasinja-2023-06-13",
    "slug": "lasinja-2023-06-13",
    "titleHr": "Koncert · Lasinja",
    "titleEn": "Concert · Lasinja",
    "date": "2023-06-13",
    "time": "",
    "city": "Lasinja",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "krizevci-2024-04-24",
    "slug": "krizevci-2024-04-24",
    "titleHr": "Koncert · Križevci",
    "titleEn": "Concert · Križevci",
    "date": "2024-04-24",
    "time": "",
    "city": "Križevci",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "zapresic-2024-05-05",
    "slug": "zapresic-2024-05-05",
    "titleHr": "Koncert · Zaprešić",
    "titleEn": "Concert · Zaprešić",
    "date": "2024-05-05",
    "time": "",
    "city": "Zaprešić",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "grubisno-polje-2024-05-14",
    "slug": "grubisno-polje-2024-05-14",
    "titleHr": "Koncert · Grubišno Polje",
    "titleEn": "Concert · Grubišno Polje",
    "date": "2024-05-14",
    "time": "",
    "city": "Grubišno Polje",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "petrinja-2024-05-27",
    "slug": "petrinja-2024-05-27",
    "titleHr": "Koncert · Petrinja",
    "titleEn": "Concert · Petrinja",
    "date": "2024-05-27",
    "time": "",
    "city": "Petrinja",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "hrvatski-cuntic-2024-06-13",
    "slug": "hrvatski-cuntic-2024-06-13",
    "titleHr": "Zrin festival",
    "titleEn": "Zrin Festival",
    "date": "2024-06-13",
    "time": "",
    "city": "Hrvatski Čuntić",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "gornji-kosinj-2024-09-15",
    "slug": "gornji-kosinj-2024-09-15",
    "titleHr": "Lika Like festival",
    "titleEn": "Lika Like Festival",
    "date": "2024-09-15",
    "time": "",
    "city": "Gornji Kosinj",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "petrinja-2025-04-14",
    "slug": "petrinja-2025-04-14",
    "titleHr": "Koncert · Petrinja",
    "titleEn": "Concert · Petrinja",
    "date": "2025-04-14",
    "time": "",
    "city": "Petrinja",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "virovitica-2025-05-13",
    "slug": "virovitica-2025-05-13",
    "titleHr": "Koncert · Virovitica",
    "titleEn": "Concert · Virovitica",
    "date": "2025-05-13",
    "time": "",
    "city": "Virovitica",
    "country": "Hrvatska",
    "venue": "Gradski muzej Virovitica",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "veliko-trgovisce-2025-05-28",
    "slug": "veliko-trgovisce-2025-05-28",
    "titleHr": "Koncert · Veliko Trgovišće",
    "titleEn": "Concert · Veliko Trgovišće",
    "date": "2025-05-28",
    "time": "",
    "city": "Veliko Trgovišće",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "borovnica-2025-10-12",
    "slug": "borovnica-2025-10-12",
    "titleHr": "Koncert · Borovnica",
    "titleEn": "Concert · Borovnica",
    "date": "2025-10-12",
    "time": "",
    "city": "Borovnica",
    "country": "Slovenija",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "grubisno-polje-2026-04-28",
    "slug": "grubisno-polje-2026-04-28",
    "titleHr": "Koncert · Grubišno Polje",
    "titleEn": "Concert · Grubišno Polje",
    "date": "2026-04-28",
    "time": "",
    "city": "Grubišno Polje",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "id": "zupanja-2026-07-03",
    "slug": "zupanja-2026-07-03",
    "titleHr": "Koncert · Županja",
    "titleEn": "Concert · Županja",
    "date": "2026-07-03",
    "time": "",
    "city": "Županja",
    "country": "Hrvatska",
    "venue": "",
    "address": "",
    "guestArtists": [],
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  }
]);

// Tour ranges from the ZTK calendar; cities and collaborators from the artistic dossier.
events.push(...[
  {
    "slug": "argentina-2023",
    "titleHr": "Turneja u Argentini",
    "titleEn": "Argentina tour",
    "date": "2023-10-22",
    "endDate": "2023-10-31",
    "city": "Buenos Aires",
    "otherCities": [
      "Córdoba"
    ],
    "country": "Argentina",
    "descriptionHr": "Koncerti u Buenos Airesu i Córdobi te radionice s lokalnim ansamblima tijekom turneje u Argentini.",
    "descriptionEn": "Concerts in Buenos Aires and Córdoba and workshops with local ensembles during the Argentina tour.",
    "guestArtists": [],
    "id": "argentina-2023",
    "time": "",
    "venue": "",
    "address": "",
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "slug": "berlin-2024",
    "titleHr": "Gostovanje u Berlinu",
    "titleEn": "Guest performance in Berlin",
    "date": "2024-11-24",
    "endDate": "2024-11-27",
    "city": "Berlin",
    "country": "Njemačka",
    "guestArtists": [
      "Jelena Kordić"
    ],
    "descriptionHr": "Gostovanje Zagrebačkog tamburaškog kvarteta u Berlinu u suradnji s mezzosopranisticom Jelenom Kordić.",
    "descriptionEn": "Zagreb Tambura Quartet’s Berlin visit with mezzo-soprano Jelena Kordić.",
    "id": "berlin-2024",
    "time": "",
    "venue": "",
    "address": "",
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  },
  {
    "slug": "kanada-2025",
    "titleHr": "Gostovanje u Kanadi",
    "titleEn": "Guest performance in Canada",
    "date": "2025-10-06",
    "endDate": "2025-10-10",
    "city": "Mississauga",
    "country": "Kanada",
    "guestArtists": [],
    "descriptionHr": "Koncertno gostovanje Zagrebačkog tamburaškog kvarteta u Mississaugi.",
    "descriptionEn": "Zagreb Tambura Quartet’s guest performance in Mississauga.",
    "id": "kanada-2025",
    "time": "",
    "venue": "",
    "address": "",
    "gallery": [],
    "videos": [],
    "repertoireIds": [],
    "published": true,
    "digitalProgrammeEnabled": false
  }
]);

export const videos: VideoRecord[] = [
  {
    id: 'uhlik-tambura-da-camera-ocic', workId: 'uhlik-tambura-da-camera',
    movementHr: 'Cjelovita izvedba · Iz salona Očić', movementEn: 'Complete performance · From the Očić Salon',
    url: 'https://www.youtube.com/watch?v=-F8PAvysvdQ', channel: 'Zagreb Tambura Quartet', official: true, published: true
  },
  {
    id: 'uhlik-tambura-da-camera-osijek', workId: 'uhlik-tambura-da-camera',
    movementHr: 'Cjelovita izvedba · Osijek 2021.', movementEn: 'Complete performance · Osijek 2021',
    url: 'https://www.youtube.com/watch?v=Q8PbD-U58hQ', channel: 'Tomislav Uhlik', official: false,
    noteHr: 'Potvrđena izvedba Zagrebačkog tamburaškog kvarteta.', noteEn: 'Verified performance by Zagreb Tambura Quartet.', published: true
  },
  {
    id: 'bertic-skica-ocic', workId: 'bertic-skica', movementHr: 'Cjelovita izvedba', movementEn: 'Complete performance',
    url: 'https://www.youtube.com/watch?v=-g9ZdkDFUxc', channel: 'Zagreb Tambura Quartet', official: true, published: true
  },
  {
    id: 'miletic-folklorne-kasacije', workId: 'miletic-folklorne-kasacije', movementHr: 'Cjelovita izvedba', movementEn: 'Complete performance',
    url: 'https://www.youtube.com/watch?v=GALsWbdlZxI', channel: 'Zagreb Tambura Quartet', official: true, published: true
  },
  {
    id: 'vlahek-orbital-hrt', workId: 'vlahek-orbital', movementHr: 'Izvedba uživo · HRT', movementEn: 'Live performance · HRT',
    url: 'https://www.youtube.com/watch?v=1uCicJj9HZ8', channel: 'Bruno Vlahek', official: false,
    noteHr: 'Potvrđena izvedba Zagrebačkog tamburaškog kvarteta.', noteEn: 'Verified performance by Zagreb Tambura Quartet.', published: true
  },
  {
    id: 'mozart-k136-andante', workId: 'mozart-divertimento-k136', movementHr: 'II. Andante', movementEn: 'II. Andante',
    url: 'https://youtu.be/5V11uYUwgMM', channel: 'Zagreb Tambura Quartet', official: true, published: true
  },
  {
    id: 'mozart-k136-presto', workId: 'mozart-divertimento-k136', movementHr: 'III. Presto', movementEn: 'III. Presto',
    url: 'https://youtu.be/T-MdsrQy6Nw', channel: 'Zagreb Tambura Quartet', official: true, published: true
  }
];

export const mediaLinks = [
  { label: 'YouTube', url: 'https://www.youtube.com/@zagreb.tambura.quartet' },
  { label: 'Tambura da camera — playlist', url: 'https://youtube.com/playlist?list=OLAK5uy_ndhnjOJGIHBec3z7tbwXGbjENOXU6tXv0' },
  { label: 'Instagram', url: 'https://www.instagram.com/zagreb.tambura.quartet/' },
  { label: 'Facebook', url: 'https://www.facebook.com/share/1DeHw1DFt3/' },
  { label: 'Apple Music', url: 'https://music.apple.com/hr/artist/zagreb-tambura-quartet/1752497211' }
];

export const published = <T extends { published: boolean }>(items: T[]) => items.filter((item) => item.published);
export const workTitle = (work: Work, lang: Lang) => lang === 'hr' ? work.titleHr : work.titleEn;
export const workInstrumentation = (work: Work, lang: Lang) => lang === 'hr' ? work.instrumentationHr : work.instrumentationEn;
export const workPremiere = (work: Work, lang: Lang) => lang === 'hr' ? work.premiereHr : work.premiereEn;
export const workVideos = (work: Work | string) => {
  const workId = typeof work === 'string' ? work : work.id;
  return published(videos).filter((video) => video.workId === workId);
};
export const publishedWorksByIds = (ids: string[]) => ids
  .map((id) => repertoire.find((work) => work.id === id))
  .filter((work): work is Work => Boolean(work?.published));
export const programmeWorks = (programme: Programme) => publishedWorksByIds(programme.repertoireIds);
export const workFilterTags = (work: Work) => [
  ...work.tags,
  work.workType !== 'unknown' ? work.workType : '',
  work.album ? 'album' : '',
  workVideos(work).length ? 'video' : '',
  work.writtenForZtk === true ? 'for-ztk' : '',
  work.premieredByZtk ? 'premiered-by-ztk' : ''
].filter(Boolean);
export const workSearchText = (work: Work) => [
  work.composer,
  work.titleHr,
  work.titleEn,
  work.arranger,
  ...(work.movements?.flatMap((movement) => [movement.titleHr, movement.titleEn]) ?? [])
].filter(Boolean).join(' ').toLocaleLowerCase('hr');
export const eventIsUpcoming = (event: EventItem, now = new Date()) => (event.endDate || event.date) >= new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zagreb', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);

const contentErrors: string[] = [];
const assertUnique = (label: string, values: string[]) => {
  const seen = new Set<string>();
  values.forEach((value) => {
    if (seen.has(value)) contentErrors.push(`Duplicate ${label}: ${value}`);
    seen.add(value);
  });
};

assertUnique('work id', repertoire.map((work) => work.id));
assertUnique('work slug', repertoire.map((work) => work.slug));
assertUnique('programme id', programmes.map((programme) => programme.id));
assertUnique('event id', events.map((event) => event.id));
assertUnique('video id', videos.map((video) => video.id));

programmes.forEach((programme) => programme.repertoireIds.forEach((workId) => {
  const work = repertoire.find((item) => item.id === workId);
  if (!work) contentErrors.push(`Programme ${programme.id} references missing work ${workId}`);
  else if (programme.published && !work.published) contentErrors.push(`Published programme ${programme.id} references unpublished work ${workId}`);
}));
repertoire.forEach((work) => work.programmeIds.forEach((programmeId) => {
  if (!programmes.some((programme) => programme.id === programmeId)) contentErrors.push(`Work ${work.id} references missing programme ${programmeId}`);
}));
events.forEach((event) => event.repertoireIds.forEach((workId) => {
  const work = repertoire.find((item) => item.id === workId);
  if (!work) contentErrors.push(`Event ${event.id} references missing work ${workId}`);
  else if (event.published && !work.published) contentErrors.push(`Published event ${event.id} references unpublished work ${workId}`);
}));
videos.forEach((video) => {
  const work = repertoire.find((item) => item.id === video.workId);
  if (!work) contentErrors.push(`Video ${video.id} references missing work ${video.workId}`);
  else if (video.published && !work.published) contentErrors.push(`Published video ${video.id} references unpublished work ${video.workId}`);
});

if (contentErrors.length) throw new Error(`Content integrity check failed:\n${contentErrors.join('\n')}`);
