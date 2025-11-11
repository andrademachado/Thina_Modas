import styled from 'styled-components'
import  { cores } from '../../styles'

export const InfoCard = styled.div`
    background-color: ${cores.rosa};
    padding: 20px 0px;
`

export const Image = styled.img`
    width: 310px;
    height:170px ;
    display:  block;
`
export const Info = styled.div`
        display: flex;
        justify-content: center;
        
        padding: 0 10px;
        align-items: center;
        gap: 80px;
        padding-left: 60px;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    & > * {
        flex-shrink: 0; // Impede que os elementos encolham
    }
`

export const Svg = styled.img`
    width: 45px;
    height: 35px;    
    
`