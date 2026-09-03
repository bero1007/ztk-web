import type { Lang } from '@/data/content';

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (pathname = '/') => `${base}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;

export const labels = {
  hr: { home: 'Početna', quartet: 'Kvartet', programmes: 'Programi', events: 'Događaji', repertoire: 'Repertoar', media: 'Mediji', booking: 'Booking', privacy: 'Privatnost' },
  en: { home: 'Home', quartet: 'Quartet', programmes: 'Programmes', events: 'Events', repertoire: 'Repertoire', media: 'Media', booking: 'Booking', privacy: 'Privacy' }
} as const;

export const routes = (lang: Lang) => lang === 'hr'
  ? { home: '/', quartet: '/kvartet/', programmes: '/programi/', events: '/dogadjaji/', repertoire: '/repertoar/', media: '/mediji/', booking: '/booking/', privacy: '/privatnost/' }
  : { home: '/en/', quartet: '/en/quartet/', programmes: '/en/programmes/', events: '/en/events/', repertoire: '/en/repertoire/', media: '/en/media/', booking: '/en/booking/', privacy: '/en/privacy/' };

export const formatDate = (date: string, lang: Lang) => new Intl.DateTimeFormat(lang === 'hr' ? 'hr-HR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T12:00:00`));
