import styled from "styled-components";

export const SwiperWrapper = styled.div`
/* variável local para a cor do Swiper (troque aqui para mudar a cor) */
--my-swiper-color: #79191d;
--swiper-navigation-color: var(--my-swiper-color);
--swiper-pagination-color: var(--my-swiper-color);
--swiper-pagination-bullet-size: 10px;
--swiper-pagination-bullet-horizontal-gap: 8px;
--swiper-pagination-bullet-inactive-opacity: 0.45;

/* Pagination bullets */
.swiper-pagination {
bottom: 14px;
}

.swiper-pagination-bullet {
background: var(--swiper-pagination-color);
opacity: var(--swiper-pagination-bullet-inactive-opacity);
transition: transform 180ms ease, opacity 180ms ease;
width: var(--swiper-pagination-bullet-size);
height: var(--swiper-pagination-bullet-size);
margin: 0 var(--swiper-pagination-bullet-horizontal-gap);
}

.swiper-pagination-bullet-active {
opacity: 1;
transform: scale(1.2);
}

/* Navigation buttons (seta) */
.swiper-button-next,
.swiper-button-prev {
color: var(--swiper-navigation-color);
background: transparent;
outline: none;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
}

/* Garantir que SVG/path use a cor que definimos */
.swiper-button-next svg,
.swiper-button-prev svg {
fill: var(--swiper-navigation-color);
stroke: var(--swiper-navigation-color);
width: 28px;
height: 28px;
}

.swiper-button-next,
.swiper-button-prev {
transform: scale(1.05);
}
`;

export const Imagem = styled.div<{ overlayOpacity?: number }>`
    width: 100%;
    height: 560px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
    content: '';
    position: absolute;
    inset: 0;
    top: 0;
    background-color: rgba(
        0,
        0,
        0,
        ${props => (typeof props.overlayOpacity === 'number' ? props.overlayOpacity : 0.35)}
    );
    z-index: 1;
    pointer-events: none;
    transition: background-color 220ms ease;
    }
`;

export const BannerContent = styled.div<{
    fontFamily?: string;
    textColor?: string;
    titleLetterSpacing?: string;
    subtitleLetterSpacing?:string;
    layout?:'column'|'row';
    position?:'left'|'center'|'right';
}>`
    
    position: relative;
    z-index: 2;
    text-align: center;
    color: ${props => props.textColor || 'white'};
    max-width: 900px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    font-family: ${props => props.fontFamily || "'Montserrat', sans-serif"};
    display: flex;
    gap:20px;
    align-items: center;
    /* direção: column (empilha) ou row (lado a lado) */
    flex-direction: ${props => props.layout === 'row' ? 'row' :'column'};
    /* quando em row, usamos justify-content para mover o grupo horizontalmente */
    justify-content: ${props => {
        if(props.layout==='row'){
            if(props.position==='left')return 'flex-start';
            if(props.position==='right')return 'flex-end';
            return'center';
        }
        return 'center';
    }};
    /* quando em column, usamos align-items para alinhar o grupo horizontalmente */
        align-items:${props => {
            if (props.layout === 'column'){
                if (props.position === 'left') return 'flex-start';
                if (props.position === 'right') return 'flex-end';
                return 'center';
            }
            return 'center';
        }};
    h2{
        font-size: 70px;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0);
        font-weight: 700;
        margin-top: 0;
        letter-spacing: ${props => props.titleLetterSpacing || '1.4px'};
        white-space: pre-line;
        font-family: "roboto condensed", sans-serif !important;
    }
    p{
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        font-weight: 400;
        letter-spacing: ${props => props.subtitleLetterSpacing || '1.4px'};
    }
`
export const TextBlock = styled.div`
    max-width: auto;
    display: flex;
    flex-direction: column;
`
export const ButtonWrapper = styled.div<{ buttonOrder?:'first' | 'last' }>`
display: flex;
align-items: center;
justify-content: center;
flex: 0 0 auto;
order:${ props => (props.buttonOrder === 'first' ? 0 : 1 )};
`;