/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BOOKING_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
