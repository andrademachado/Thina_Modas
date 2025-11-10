import styled from 'styled-components'
import  { cores } from '../../styles'

export const InfoCard = styled.div`
    background-color: ${cores.rosa};
`

export const Image = styled.img`
    width: 310px;
    height:170px ;
    display:  flex;

`
export const Info = styled.div`
        display: flex;
        justify-content: space-around;
        margin-left: 28px;
        gap: 50px;
        
`
export const Item = styled.div`
    display: flex;
    
`

export const Svg = styled.img`
    width: 45px;
    height: 35px;
    
    padding: 55px 0;
`