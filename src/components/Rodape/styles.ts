import styled from "styled-components"
import { cores } from "../../styles"

export const RodapeBar = styled.div`
    background-color: ${cores.vinho};
`
export const BaseRodape = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
`

export const Logo = styled.a`
    cursor: pointer;
    background: none;
    border: none;
    width: auto;
    height: auto;
    img {
        width: 60px; 
        height: auto;
        display: block;
    }
`
export const Marca =styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    h5{
        color: ${cores.branco};
        letter-spacing: 2px;
        margin: 0;
        font-size: 13px;
        white-space: nowrap;
    }
    
`

