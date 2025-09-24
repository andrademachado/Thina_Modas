import styled from "styled-components";
import { cores} from '../../styles'

export const TopoInfo = styled.div`
    background-color: ${cores.vinho};
    padding: 10px;
    width: 100%;
`
export const ContainerFrete = styled.div`
    display: flex;
    align-items: center;     /* Alinha verticalmente no centro */
    justify-content: center; /* Centraliza horizontalmente */
    gap: 20px;               /* Espaço entre imagem e texto */
`
export const InfoFrete = styled.h5`
    color: ${cores.branco};
    margin: 0;              
    padding: 0;
`
export const Frete = styled.img`
    width: 33px;
    height: 18px;
`