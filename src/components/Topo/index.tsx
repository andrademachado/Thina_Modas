import { Container } from '../../styles'
import { ContainerFrete, Frete, InfoFrete, TopoInfo } from './styles'
import frete from '../../assets/images/Icones/FreteVector.svg'


const Topo = () => (
    <TopoInfo>
        <Container>
            <ContainerFrete>
                <Frete src={frete} alt='Caminhão' />
                <InfoFrete>ENTREGAMOS PRA TODO O  BRASIL</InfoFrete>
            </ContainerFrete>
            
        </Container>
    </TopoInfo>
)
export default Topo