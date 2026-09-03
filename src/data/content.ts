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

const awaitingBioHr = 'Biografija će biti dodana nakon autorizacije člana kvarteta.';
const awaitingBioEn = 'Biography will be added after approval by the quartet member.';

export const members: Member[] = [
  { name: 'Marko Blašković', slug: 'marko-blaskovic', instrument: { hr: 'bisernica', en: 'bisernica' }, bioShortHr: awaitingBioHr, bioShortEn: awaitingBioEn, bioFullHr: awaitingBioHr, bioFullEn: awaitingBioEn, published: true },
  { name: 'Martin Durbek', slug: 'martin-durbek', instrument: { hr: 'brač', en: 'brač' }, bioShortHr: awaitingBioHr, bioShortEn: awaitingBioEn, bioFullHr: awaitingBioHr, bioFullEn: awaitingBioEn, published: true },
  { name: 'Franjo Pećarić', slug: 'franjo-pecaric', instrument: { hr: 'e-brač', en: 'e-brač' }, bioShortHr: awaitingBioHr, bioShortEn: awaitingBioEn, bioFullHr: awaitingBioHr, bioFullEn: awaitingBioEn, published: true },
  { name: 'Ivan Koprić', slug: 'ivan-kopric', instrument: { hr: 'čelo', en: 'čelo' }, bioShortHr: awaitingBioHr, bioShortEn: awaitingBioEn, bioFullHr: awaitingBioHr, bioFullEn: awaitingBioEn, published: true }
];

export const programmes: Programme[] = [
  {
    id: 'mozart', titleHr: 'Mozart', titleEn: 'Mozart', duration: 'cca 60 min',
    descriptionHr: 'Mozartov program za tamburaški kvartet i klarinet.',
    descriptionEn: 'A Mozart programme for tambura quartet and clarinet.',
    performers: 'Zagreb Tambura Quartet & Jan Plevko, clarinet',
    repertoire: ['W. A. Mozart — Divertimento in D major, K. 136: I.; II. Andante; III. Presto', 'W. A. Mozart — String Quartet K. 157', 'W. A. Mozart — Clarinet Quintet K. 581'],
    published: true
  },
  { id: 'tambura-da-camera', titleHr: 'Tambura da camera', titleEn: 'Tambura da camera', descriptionHr: 'Album i koncertni program suvremene tamburaške komorne glazbe.', descriptionEn: 'An album and concert programme of contemporary chamber music for tambura.', published: true },
  { id: 'redovni-program', titleHr: 'Redovni koncertni program', titleEn: 'Regular concert programme', descriptionHr: 'Izbor iz aktualnog repertoara kvarteta. Detaljan program potvrđuje se za pojedini koncert.', descriptionEn: 'A selection from the quartet’s current repertoire. The detailed programme is confirmed for each concert.', published: true },
  { id: 'po-dogovoru', titleHr: 'Program po dogovoru', titleEn: 'Bespoke programme', descriptionHr: 'Program oblikovan u razgovoru s organizatorom, prema kontekstu i publici događaja.', descriptionEn: 'A programme shaped with the organiser for the event, context and audience.', published: true }
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
    programme: 'tambura-da-camera', guestArtists: [], moderator: 'Sonja Mrnjavčić', gallery: [], videos: [],
    repertoireIds: ['uhlik-tambura-da-camera', 'bertic-skica', 'miletic-folklorne-kasacije', 'vlahek-orbital', 'hrenic-musettura', 'novosel-bunjevacka-igra-i-fuga', 'potocnik-cet-r-momka'],
    published: true, digitalProgrammeEnabled: true
  }
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
