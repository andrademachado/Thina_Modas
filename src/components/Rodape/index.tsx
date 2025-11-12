import { Link } from "react-router-dom"
import { Container } from "../../styles";
import logo from '../../assets/images/Icones/New_Logo.svg';
import beelder from '../../assets/images/Icones/New_Beelder.svg';
import { BaseRodape, Logo, Marca, RodapeBar } from "./styles";

const Rodape = () => (
    <RodapeBar>
    <Container>
        <BaseRodape>
                <Marca>
            <Logo className="container" as={Link} to="/">
                <img src={logo} alt="Tina Modas" />        
            </Logo>
                <h5>
                    2025 - &copy; THINA MODAS Todos  os direitos reservados
                </h5>
                </Marca>
                <Marca>
                    <Logo 
                        href="https://andrademachado.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="container"
                        
                        >
                        <img src={beelder} alt="Beelder - Soluções Digitais"  loading="lazy"/>
                    </Logo>
                    <h5>BEELDER - SOLUÇOES DIGITAIS</h5>
                </Marca>

            </BaseRodape>
    </Container>
    </RodapeBar>

)

export default Rodape