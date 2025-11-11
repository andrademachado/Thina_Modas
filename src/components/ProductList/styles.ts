import styled from "styled-components";
import { cores } from '../../styles'

export const Container = styled.section`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px; 
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    margin-top: 40px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`
export const TituloSecao = styled.h2`
    font-size: 24px;          /* tamanho do título */
    font-weight: 700;         /* negrito para destaque */
    text-align: center;       /* centraliza horizontalmente */
    margin: 104px 0;           /* espaço acima e abaixo */
    width: 100%;              /* ocupa toda a largura do container */
    color: ${cores.pretoCinza}; /* cor consistente */
    letter-spacing: 10px;
`;