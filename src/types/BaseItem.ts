export interface BaseItem {
    id?: string;           // id opcional (útil para keys)
    title: string;         // título principal
    subtitle?: string;     // subtítulo opcional
    image: string;         // caminho/URL da imagem do item
    imageAlt?: string;
    textColor?: string;    // cor do texto (hex, rgb, etc.)
    fontFamily?: string;   // família de fontes para o item
    buttonCenter?: boolean;
    textGap?: string;
}