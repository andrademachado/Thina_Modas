// components/Banner/styles.tsx
import styled, { css } from "styled-components";

/* Nome da classe usada para esconder imagem (a11y) */
export const visuallyHiddenClassName = 'visually-hidden';

/* ---------- Swiper wrapper (estilos do swiper) ---------- */
export const SwiperWrapper = styled.div`
  --my-swiper-color:#000000A8;
  --swiper-navigation-color: var(--my-swiper-color);
  --swiper-pagination-color: var(--my-swiper-color);
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-bullet-horizontal-gap: 8px;
  --swiper-pagination-bullet-inactive-opacity: 0.45;

  .swiper-pagination { bottom: 14px; }

  .swiper-pagination-bullet {
    background: var(--swiper-pagination-color);
    opacity: var(--swiper-pagination-bullet-inactive-opacity);
    transition: transform 180ms ease, opacity 180ms ease;
    width: var(--swiper-pagination-bullet-size);
    height: var(--swiper-pagination-bullet-size);
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap);
  }

  .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.2); }

  .swiper-button-next, .swiper-button-prev {
    color: var(--swiper-navigation-color);
    background: transparent;
    outline: none;
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
  }

  .swiper-button-next svg, .swiper-button-prev svg {
    fill: var(--swiper-navigation-color);
    stroke: var(--swiper-navigation-color);
    width: 28px; height: 28px;
  }
`;

/* ---------- Imagem / slide ---------- */
export const Imagem = styled.div<{ overlayOpacity?: number }>`
  width: 100%;
  min-height: 320px;
  height: min(80vh, 700px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;   /* centraliza verticalmente o conteúdo do slide */
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, ${props => (typeof props.overlayOpacity === 'number' ? props.overlayOpacity : 0.35)});
    z-index: 1;
    pointer-events: none;
    transition: background-color 220ms ease;
  }
`;

/* ============================
   TIPAGENS: props esperadas
   ============================ */

/* <-- CORRIJA AQUI: se adicionar mais props que usa no BannerContent, acrescente aqui */
export interface BannerContentProps {
    fontFamily?: string;
    textColor?: string;
    titleLetterSpacing?: string;
    subtitleLetterSpacing?: string;
    titleSize?: string;
    subtitleSize?: string;
    layout?: 'column' | 'row' | string;
    position?: 'left' | 'center' | 'right' | string;
    contentBottomOffset?: string;   // <-- usa-se no array: ex '2%' ou '10%'
    contentTranslateY?: string;     // <-- usa-se no array: ex '0px' ou '120px'
    titleWeight?: number;
    subtitleWeight?: number;
    contentMarginLeft?: string;
    contentMarginRight?: string;
    contentAlign?: 'flex-start' | 'center' | 'flex-end';
    contentJustify?: string;
    contentGap?: string;
    maxWidth?: string;
    buttonAlign?: 'left' | 'center' | 'right';
    buttonBlockCentered?: boolean;
    buttonCenter?: boolean;
    buttonOrder?: 'first' | 'last';
    buttonSpacing?: string;
    buttonMarginLeft?: string;
    buttonMarginRight?: string;
    buttonMarginTop?: string;
  
}

/* ---------- BannerContent (container do texto + botão) ---------- */
/* <-- CORRIJA AQUI: este componente usa as props definidas acima */
export const BannerContent = styled.div<BannerContentProps>`
  position: absolute;

  /* ---------- vertical: distância do bloco até o rodapé ----------
     Ajuste no array: contentBottomOffset: '2%' (quanto menor -> mais próximo do rodapé) */
  bottom: ${p => p.contentBottomOffset ?? '6%'};   /* <-- CORRIJA AQUI no seu array defaultBanners */
  z-index: 2;
  display: flex;
  /* Direção do conteúdo: 'column' empilha verticalmente (texto então botão), 'row' coloca lado a lado */
  flex-direction: ${p => (p.layout === 'row' ? 'row' : 'column')};
  gap:  ${p => p.contentGap ?? '1rem'};
  width:  ${p => p.maxWidth ?? '1200px'};
  box-sizing: border-box;
  max-width: 1200px;
  margin-left: ${p => p.contentMarginLeft ?? 'auto'};   
  padding: 0 1.25rem;
  pointer-events: auto;
  /* tipografia e cor vindas do objeto */
  font-family: ${p => p.fontFamily || "'Montserrat', sans-serif"};
  color: ${p => p.textColor || '#ffffff'};

  /* Align horizontal (cross axis) — controla se o bloco fica à esquerda/centro/direita */
  align-items: ${p => {
    if (p.contentAlign) {
      return p.contentAlign; // ← USA A NOVA PROPRIEDADE
    }
        if (p.layout === 'column') {
            if (p.position === 'left') return 'flex-start';
            if (p.position === 'right') return 'flex-end';
            return 'center';
        }
        return 'center';
    }};

  /* Justify controla a posição no eixo principal:
- para column usamos flex-end para empurrar o conteúdo pra baixo (próximo ao rodapé)
     - para row centralizamos horizontalmente */
  justify-content: ${p => {
    if (p.position === 'left') return 'flex-start';
    if (p.position === 'right') return 'flex-end';
    return 'center';
  }};

  /* ---------- deslocamento extra (visual) ----------
     Útil se contentBottomOffset em % não for suficiente. Valores positivos movem para baixo. */
  transform: translateY(${p => p.contentTranslateY ?? '0px'}); /* <-- CORRIJA AQUI no array se quiser empurrar em px */

  h2 {
    margin: 0;
    line-height: 1.05;
    font-size: clamp(1.6rem, 4.5vw, 4.5rem);
    font-weight: ${p => p.titleWeight ?? 700};
    letter-spacing: ${p => p.titleLetterSpacing || '1.4px'};
    white-space: pre-line;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: clamp(0.9rem, 2.2vw, 1.25rem);
    font-weight: ${p => p.subtitleWeight ?? 400};
    letter-spacing: ${p => p.subtitleLetterSpacing || '1.2px'};
  }
`;

/* ---------- Bloco de texto (title + subtitle) ---------- */
export interface TextBlockProps {
  $gap?: string;  
}
export const TextBlock = styled.div<TextBlockProps>`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.$gap ?? '12px'};
`;

/* ---------- Tipagem do ButtonWrapper ---------- */
/* <-- CORRIJA AQUI: se você usar mais props no ButtonWrapper, adicione-as aqui */
export interface ButtonWrapperProps {
    buttonOrder?: 'first' | 'last';
    spacing?: string;        // spacing entre texto e botão
    buttonHeight?: string;
    mt?: string;
    layout?: 'column' | 'row' | string;
    horizontalSpacing?: string;
    buttonCenter?: boolean; 
    buttonBlockCentered?: boolean; 
    buttonAlign?: 'left' | 'center' | 'right';
    buttonMarginLeft?: string;
    buttonMarginRight?: string;
    buttonMarginTop?: string;

}

/* ---------- ButtonWrapper: controla order e spacing ----------
- Usamos margin-top quando botão está abaixo (buttonOrder === 'last') para NÃO empurrar o bloco horizontalmente.
- Se você usar layout: 'row' e quiser espaçamento horizontal, margin-left será considerada.
*/
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex: 0 0 auto;

  justify-content: ${p => (p.buttonCenter ? 'center' : 'flex-start')};

  order: ${p => (p.buttonOrder === 'first' ? 0 : 1)};
  
  margin-top: ${p => (p.buttonOrder === 'last' ? (p.spacing ?? '18px') : '0')};

  ${p => p.buttonBlockCentered && css`
    width: auto;
    align-self: center;
    justify-content: center;
  `}
  ${p => p.buttonAlign && css`
    justify-content: ${p.buttonAlign === 'center' ? 'center' :
      p.buttonAlign === 'right' ? 'flex-end' : 'flex-start'};
  `}
  margin-left: ${p => p.buttonMarginLeft || '0'};
  margin-right: ${p => p.buttonMarginRight || '0'};
  margin-top: ${p => p.buttonMarginTop || '0'};
`;
  
