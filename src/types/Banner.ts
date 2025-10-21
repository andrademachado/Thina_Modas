// src/types/Banner.ts
import type { BaseItem } from './BaseItem';
import type { ButtonProps } from '../components/Button';

export interface BannerConfig extends BaseItem {
    titleLetterSpacing?: string;
    subtitleLetterSpacing?: string;
    titleWeight?: number;
    subtitleWeight?: number;
    titleSize?: string;
    subtitleSize?: string;

    buttonProps?: ButtonProps;
    buttonSpacing?: string;
    buttonHeight?: string;
    buttonMt?: string;
    buttonOrder?: 'first' | 'last';
    layout?: 'column' | 'row'| string;
    position?: 'left' | 'center' | 'right'| string;
    textAlign?: 'left' | 'center' | 'right';
    contentMarginLeft?: string;
    contentMarginRight?: string; 
    buttonBlockCentered?: boolean;
    overlayOpacity?: number;

    // DISTÂNCIA DO BLOCO DE TEXTO EM RELAÇÃO AO RODAPÉ DO BANNER
    contentBottomOffset?:string;      // ex: '6%' ou '80%'
    contentTranslateY?:string;        // ex: '30px' ou '120px'
    contentAlign?: 'center' | 'flex-end' | 'flex-start' | string;
    contentLayout?: 'row' | 'column';   // Direção do flexbox dentro do conteúdo
    contentJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'|string;
    contentAlignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    contentGap?: string;               // Espaço entre elementos (texto e botão) no conteúdo
    horizontalSpacing?: string;
    buttonAlign?: 'left' | 'center' | 'right';
    buttonMarginLeft?: string;    // ← Margem esquerda do botão
    buttonMarginRight?: string;   // ← Margem direita do botão  
    buttonMarginTop?: string;
    buttonCenter?: boolean;
    maxWidth?: string;
}
