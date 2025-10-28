import styled from "styled-components";
import { cores } from "../../styles";

export const  Card = styled.div`
    background-color: ${cores.branco};
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Titulo = styled.h3`
    font-weight: 700;
    font-size: 20px;
    display: block;
    margin: 0;
    color:${cores.preto}
`

export const Preco = styled.h2`
      margin: 8px 0 4px 0;   /* espaçamento acima e abaixo */
    font-size: 26px;       /* maior que Titulo */
    font-weight: 800;      /* mais pesado para destaque */
    color: rgba(0, 0, 0, 0.9);  /* quase preto, mas um pouco mais suave */
    text-align: center;    /* centralizado abaixo do titulo */
    line-height: 1.2;
    
`
export const Info = styled.h3`
    margin: 0;
    font-size: 22px;              /* menor que Preco e Titulo */
    font-weight: 300;             /* leve, sutil */
    text-align: center;           /* centralizado abaixo do Preco */
    line-height: 1.2;
    width: 100%;  
`
export const Imagem =styled.img`
    width: 100%;                /* ocupa a largura da coluna do grid */
    height: auto;
    aspect-ratio: 3 / 4;        /* reserva espaço para evitar reflow */
    object-fit: cover;
    display: block;
    border-radius: 4px;
`