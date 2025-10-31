import styled from "styled-components";
import { cores } from '../../styles'

export const NavBar = styled.nav`
    background-color: ${cores.rosaBranco};
    padding: 8px;
    margin-bottom: 100px;
`
export const MenuLinks =  styled.ul`
    display:  flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    
`

export const Item = styled.li`
    margin-right: 24px;
    margin-left: 60px;
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: inherit;
          gap: 12px; /* Ou use margin no Texto */
    }
`
export const Imagem = styled.div`
    width: 100px;
    height: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* 👈 Mantém proporção da imagem */
    }
` 
export const Texto = styled.span`
    text-align: center;
    margin-top: 2px;
`

