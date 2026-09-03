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
  descriptionHr: string;
  descriptionEn: string;
  repertoire?: string[];
  performers?: string;
  image?: string;
  published: boolean;
}

export interface Work {
  id: string;
  slug: string;
  composer: string;
  composerDates?: string;
  title: string;
  year?: string;
  duration?: string;
  instrumentation?: string;
  arranger?: string;
  writtenForZtk: boolean | 'unknown';
  premiere?: string;
  dedication?: string;
  descriptionHr?: string;
  descriptionEn?: string;
  videoUrls: string[];
  album?: string;
  programmeIds: string[];
  tags: string[];
  published: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  titleHr: string;
  titleEn: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
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
    bioFullHr: 'Glazbeno obrazovanje stekao je u Glazbenoj školi Ferdo Livadić u Samoboru. Na Muzičkoj akademiji Sveučilišta u Zagrebu završio je studij tambure 2021. u klasi doc. art. Siniše Leopolda i postao jedan od prvih magistara muzike na tamburi. Tijekom školovanja osvojio je brojne nagrade kao solist te član komornih i orkestralnih sastava.\n\nSurađivao je sa Zagrebačkim solistima, Simfonijskim orkestrom HRT-a i Tamburaškim orkestrom HRT-a. Od 2025. docent je na Odsjeku za glazbenu pedagogiju i tambure Muzičke akademije Sveučilišta u Zagrebu, a pohađa i doktorski studij komorne glazbe na Akademiji umetnosti u Novom Sadu.',
    bioFullEn: 'Marko studied at the Ferdo Livadić Music School in Samobor and graduated in tambura performance from the University of Zagreb Academy of Music in 2021, in the class of Siniša Leopold, becoming one of Croatia’s first master’s graduates in tambura performance. He has received numerous awards as a soloist and as a member of chamber and orchestral ensembles.\n\nHe has collaborated with the Zagreb Soloists, the Croatian Radiotelevision Symphony Orchestra and the Croatian Radiotelevision Tambura Orchestra. Since 2025 he has taught as an assistant professor at the University of Zagreb Academy of Music and is pursuing doctoral studies in chamber music at the Academy of Arts in Novi Sad.',
    photo: '/images/ensemble/dk-101664.webp', photoPosition: '35% center', published: true
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
    bioShortHr: 'Docent i pročelnik Odsjeka za glazbenu pedagogiju i tambure Muzičke akademije u Zagrebu, aranžer i dirigent.',
    bioShortEn: 'Assistant professor and Head of Music Education and Tambura at the University of Zagreb Academy of Music, arranger and conductor.',
    bioFullHr: 'Glazbeno obrazovanje stekao je u Vinkovcima i Križevcima. Na Muzičkoj akademiji Sveučilišta u Zagrebu završio je glazbenu pedagogiju 2019., a 2021. i studij tambure u klasi doc. art. Siniše Leopolda. Kao solist i član komornih i orkestralnih sastava osvojio je niz nagrada na državnim i međunarodnim natjecanjima.\n\nBavi se aranžiranjem za tamburaške sastave, a 2020. osnovao je Gradski tamburaški orkestar Ivan Goran Kovačić Sisak, gdje djeluje kao voditelj i dirigent. Docent je i pročelnik Odsjeka za glazbenu pedagogiju i tambure Muzičke akademije Sveučilišta u Zagrebu te pohađa doktorski studij komorne glazbe u Novom Sadu.',
    bioFullEn: 'Franjo studied in Vinkovci and Križevci before completing degrees in music education in 2019 and tambura performance in 2021 at the University of Zagreb Academy of Music. As a soloist and ensemble musician he has received awards at national and international competitions.\n\nHe arranges music for tambura ensembles and in 2020 founded the Ivan Goran Kovačić City Tambura Orchestra in Sisak, where he serves as conductor and artistic leader. He is Assistant Professor and Head of Music Education and Tambura at the University of Zagreb Academy of Music and is pursuing doctoral studies in chamber music in Novi Sad.',
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
  hr: ['Grand Prix i Zlatna plaketa s najvećom pohvalom, Osijek 2022.', 'Prva nagrada na 1er IMC – Les Musicales du Centre, Francuska 2022.', 'Turneja u Argentini te gostovanja u Njemačkoj i Kanadi.', 'Album Tambura da camera (2025.) i nominacija za nagradu Porin.'],
  en: ['Grand Prix and Gold Plaque with highest praise, Osijek 2022.', 'First Prize at 1er IMC – Les Musicales du Centre, France 2022.', 'Tour in Argentina and guest performances in Germany and Canada.', 'Tambura da camera album (2025) and a Porin Award nomination.']
};

export const programmes: Programme[] = [
  {
    id: 'mozart', titleHr: 'Mozart', titleEn: 'Mozart', duration: 'cca 60 min',
    descriptionHr: 'Mozartov program za tamburaški kvartet i klarinet.',
    descriptionEn: 'A Mozart programme for tambura quartet and clarinet.',
    performers: 'Zagreb Tambura Quartet & Jan Plevko, clarinet', image: '/images/ensemble/dk-101470.webp',
    repertoire: ['W. A. Mozart — Divertimento in D major, K. 136: I.; II. Andante; III. Presto', 'W. A. Mozart — String Quartet K. 157', 'W. A. Mozart — Clarinet Quintet K. 581'],
    published: true
  },
  { id: 'tambura-da-camera', titleHr: 'Tambura da camera', titleEn: 'Tambura da camera', descriptionHr: 'Album i koncertni program suvremene tamburaške komorne glazbe.', descriptionEn: 'An album and concert programme of contemporary chamber music for tambura.', image: '/images/album/tambura-da-camera-cover.webp', published: true },
  { id: 'redovni-program', titleHr: 'Redovni koncertni program 2026./2027.', titleEn: 'Regular concert programme 2026/2027', duration: '50 min', descriptionHr: 'Četiri nova djela za tamburaški kvartet, pripremljena za praizvedbu odnosno premijernu izvedbu u gradu domaćinu.', descriptionEn: 'Four new works for tambura quartet, prepared for a world premiere or a first performance in the host city.', repertoire: ['Nikola Vilus — Tamburaški kvartet br. 1', 'Marko Bertić — Skice za tamburaški kvartet', 'Dubravko Palanović — Kvartet za četiri tambure (radni naziv)', 'Richard Boukas — Brazilske refleksije'], image: '/images/ensemble/jev-03494.webp', published: true },
  { id: 'po-dogovoru', titleHr: 'Program po dogovoru', titleEn: 'Bespoke programme', descriptionHr: 'Program oblikovan u razgovoru s organizatorom, prema kontekstu i publici događaja.', descriptionEn: 'A programme shaped with the organiser for the event, context and audience.', image: '/images/ensemble/dk-101584.webp', published: true }
];

export const repertoire: Work[] = [
  { id: 'uhlik-tambura-da-camera', slug: 'tambura-da-camera', composer: 'Tomislav Uhlik', title: 'Tambura da camera', writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary', 'album'], published: true },
  { id: 'bertic-skica', slug: 'skica', composer: 'Marko Bertić', title: 'Skica', writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary', 'album'], published: true },
  { id: 'miletic-folklorne-kasacije', slug: 'folklorne-kasacije', composer: 'Miroslav Miletić', title: 'Folklorne kasacije', writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', '20th', 'album'], published: true },
  { id: 'vlahek-orbital', slug: 'orbital', composer: 'Bruno Vlahek', title: 'Orbital', writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary', 'album'], published: true },
  { id: 'hrenic-musettura', slug: 'musettura', composer: 'Jurica Hrenić', title: 'Musettura', writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary', 'album'], published: true },
  { id: 'novosel-bunjevacka-igra-i-fuga', slug: 'bunjevacka-igra-i-fuga', composer: 'Filip Novosel', title: 'Bunjevačka igra i fuga', writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'contemporary', 'album'], published: true },
  { id: 'potocnik-cet-r-momka', slug: 'cetr-momka-od-iloka', composer: 'Božo Potočnik', title: "Čet'r momka od Iloka", writtenForZtk: 'unknown', videoUrls: [], album: 'Tambura da camera', programmeIds: ['tambura-da-camera'], tags: ['croatian', 'album'], published: true },
  { id: 'piazzolla-fuga-y-misterio', slug: 'fuga-y-misterio', composer: 'Astor Piazzolla', title: 'Fuga y misterio', arranger: 'F. Pećarić', writtenForZtk: false, videoUrls: [], programmeIds: [], tags: ['international', 'arrangement', '20th'], published: true },
  { id: 'vilus-kvartet-br-1', slug: 'tamburaski-kvartet-br-1', composer: 'Nikola Vilus', title: 'Tamburaški kvartet br. 1', writtenForZtk: 'unknown', videoUrls: [], programmeIds: ['redovni-program'], tags: ['croatian', 'contemporary'], published: true },
  { id: 'palanovic-kvartet', slug: 'kvartet-za-cetiri-tambure', composer: 'Dubravko Palanović', title: 'Kvartet za četiri tambure', writtenForZtk: 'unknown', videoUrls: [], programmeIds: ['redovni-program'], tags: ['croatian', 'contemporary'], published: true },
  { id: 'boukas-brazilske-refleksije', slug: 'brazilske-refleksije', composer: 'Richard Boukas', title: 'Brazilske refleksije', writtenForZtk: 'unknown', videoUrls: [], programmeIds: ['redovni-program'], tags: ['international', 'contemporary'], published: true },
  { id: 'mozart-divertimento-k136', slug: 'divertimento-k136', composer: 'W. A. Mozart', title: 'Divertimento in D major, K. 136', writtenForZtk: false, videoUrls: ['https://youtu.be/5V11uYUwgMM', 'https://youtu.be/T-MdsrQy6Nw'], programmeIds: ['mozart'], tags: ['international', 'arrangement', 'classical', 'video'], published: true },
  { id: 'mozart-string-quartet-k157', slug: 'string-quartet-k157', composer: 'W. A. Mozart', title: 'String Quartet K. 157', writtenForZtk: false, videoUrls: [], programmeIds: ['mozart'], tags: ['international', 'arrangement', 'classical'], published: true },
  { id: 'mozart-clarinet-quintet-k581', slug: 'clarinet-quintet-k581', composer: 'W. A. Mozart', title: 'Clarinet Quintet K. 581', writtenForZtk: false, videoUrls: [], programmeIds: ['mozart'], tags: ['international', 'arrangement', 'classical'], published: true }
];

export const events: EventItem[] = [
  {
    id: 'tambura-da-camera-zagreb-2026', slug: 'tambura-da-camera-zagreb-2026',
    titleHr: 'Tambura da camera – promocija albuma i 5 godina djelovanja Zagrebačkog tamburaškog kvarteta',
    titleEn: 'Tambura da camera – album presentation and five years of Zagreb Tambura Quartet',
    date: '2026-09-30', time: '20:00', venue: 'Dvorana Hrvatske matice iseljenika', address: 'Trg Stjepana Radića 3', city: 'Zagreb', country: 'Hrvatska', latitude: 45.8015214, longitude: 15.9801683,
    programme: 'tambura-da-camera', guestArtists: [], moderator: 'Sonja Mrnjavčić', heroImage: '/images/ensemble/jev-03488.webp', gallery: [], videos: [],
    descriptionHr: 'Promocija albuma uz koncertni program i moderirane razgovore o djelima, suradnji sa skladateljima i pet godina djelovanja kvarteta.',
    descriptionEn: 'An album presentation combining a concert programme with moderated conversations about the works, composer collaborations and the quartet’s first five years.',
    repertoireIds: [],
    published: true, digitalProgrammeEnabled: true
  },
  { id:'iz-salona-ocic-2023', slug:'iz-salona-ocic-2023', titleHr:'Iz salona Očić', titleEn:'From the Očić Salon', date:'2023-06-15', time:'', venue:'Salon Očić', address:'', city:'Zagreb', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:['vlahek-orbital','bertic-skica','hrenic-musettura'], descriptionHr:'Koncertno gostovanje uz izravan prijenos na Trećem programu Hrvatskog radija i tri praizvedbe.', descriptionEn:'A concert broadcast live on Croatian Radio’s Third Programme, featuring three world premieres.', published:true, digitalProgrammeEnabled:false },
  { id:'sancta-barbara-2023', slug:'sancta-barbara-2023', titleHr:'5. Festival drvenih kapela Sancta Barbara', titleEn:'5th Sancta Barbara Festival of Wooden Chapels', date:'2023-06-26', time:'', venue:'Kapela sv. Barbare', address:'', city:'Velika Mlaka', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'darko-lukic-2024', slug:'darko-lukic-2024', titleHr:'58. Tribina „Darko Lukić”', titleEn:'58th Darko Lukić Recital Series', date:'2024-10-20', time:'', venue:'Koncertna dvorana Glazbene škole Elly Bašić', address:'', city:'Zagreb', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'miletić-days-2024', slug:'dani-miroslava-miletica-2024', titleHr:'24. Dani glazbe Miroslava Miletića', titleEn:'24th Miroslav Miletić Music Days', date:'2024-11-08', time:'', venue:'Dom INA Rafinerije', address:'', city:'Sisak', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:['miletic-folklorne-kasacije'], published:true, digitalProgrammeEnabled:false },
  { id:'kuca-tambure-2024', slug:'kuca-tambure-2024', titleHr:'Koncert u Kući tambure', titleEn:'Concert at the House of Tambura', date:'2024-12-05', time:'', venue:'Kuća tambure – slavonska glazbena čitanka', address:'', city:'Slavonski Brod', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'rab-2025', slug:'rab-2025', titleHr:'Koncert u crkvi sv. Križa', titleEn:'Concert at the Church of the Holy Cross', date:'2025-08-25', time:'', venue:'Crkva sv. Križa', address:'', city:'Rab', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false },
  { id:'drnis-2025', slug:'drnis-2025', titleHr:'Koncert u crkvi sv. Roka', titleEn:'Concert at St Roch’s Church', date:'2025-08-26', time:'', venue:'Crkva sv. Roka', address:'', city:'Drniš', country:'Hrvatska', guestArtists:[], gallery:[], videos:[], repertoireIds:[], published:true, digitalProgrammeEnabled:false }
];

export const videos = [
  { composer: 'W. A. Mozart', work: 'Divertimento in D major, K. 136', movement: 'II. Andante', url: 'https://youtu.be/5V11uYUwgMM', channel: 'Zagreb Tambura Quartet', official: true },
  { composer: 'W. A. Mozart', work: 'Divertimento in D major, K. 136', movement: 'III. Presto', url: 'https://youtu.be/T-MdsrQy6Nw', channel: 'Zagreb Tambura Quartet', official: true }
];

export const mediaLinks = [
  { label: 'YouTube', url: 'https://www.youtube.com/@zagreb.tambura.quartet' },
  { label: 'Tambura da camera — playlist', url: 'https://youtube.com/playlist?list=OLAK5uy_ndhnjOJGIHBec3z7tbwXGbjENOXU6tXv0' },
  { label: 'Instagram', url: 'https://www.instagram.com/zagreb.tambura.quartet/' },
  { label: 'Facebook', url: 'https://www.facebook.com/share/1DeHw1DFt3/' },
  { label: 'Apple Music', url: 'https://music.apple.com/hr/artist/zagreb-tambura-quartet/1752497211' }
];

export const published = <T extends { published: boolean }>(items: T[]) => items.filter((item) => item.published);
export const eventIsUpcoming = (event: EventItem, now = new Date()) => new Date(`${event.date}T${event.time || '00:00'}:00`) >= now;
