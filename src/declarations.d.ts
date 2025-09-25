// src/declarations.d.ts
// Declarações para permitir imports de CSS do Swiper
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';

// Declarações úteis genéricas (opcional, cobre qualquer import de .css)
declare module '*.css';
declare module '*.scss';

// Declarações para importação de imagens (útil se o TS reclamar ao importar .png/.jpg)
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';
