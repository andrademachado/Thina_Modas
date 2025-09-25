import styled from "styled-components"
import { cores } from '../../styles'

export const HeaderBar = styled.header`
    background-color: ${cores.branco};
    display: grid;
    grid-template-areas:
        "logo search bag"
        "logo menu menu";
    grid-template-columns:  auto 1fr auto;
    align-items: start;
    justify-content: space-between;
    padding: 5px 0;
    gap: 10px;
    padding: 5px 0;

    

`
export const Logo = styled.a`
    grid-area: logo;
    height: 126px;
    cursor: pointer;
    background: none;
    border: none;
    margin-top: 20px;
`
export const Pesquisa = styled.form`
    grid-area: search;
    position: relative;
    display: flex;
    align-items: center;
    width: 450px;
    margin-top: 25px;
    margin-left: 150px;
`
export const CampoPesquisar = styled.input`
    width: 100%;  
    font-family: 'Roboto flex', 'sans-serif';        
    font-weight: 300;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 25px;
    outline: none;
    padding: 10px 45px 10px 20px;
    text-align: center;

    & :focus {
        border-color: #007bff;
    }

    
`
export  const Lupa = styled.button`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6x;

    img {
        width: 20px;
        height: 20px;
    }
`
export const Sacola = styled.a`
    grid-area: bag;
    cursor: pointer;
    background: none;
    border: none;
    margin-top: 25px; 
    
    && img {
        width: 25px !important;
        height: 25px !important;
        object-fit: contain !important;
    }
`
export const MenuNav = styled.nav`
    grid-area: menu;
    margin-top: 20px;
    width: 100%;

    ul{
        display: flex;
        justify-content: center;
        gap: 15px;
        list-style: none;
        padding:0;
        margin: 0;
        flex-wrap: wrap;
    }

    li{
        margin: 0;
    }

    a{
        text-decoration: none;
        color: ${cores.pretoCinza};
        font-family: 'Roboto flex', 'sans-serif';
        font-weight: 300;
        font-size: 15px;
        padding: 8px 12px;
        white-space: nowrap;
        letter-spacing: 1.3px;
    }
`
