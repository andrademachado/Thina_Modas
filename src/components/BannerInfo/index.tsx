import { InfoCard, Image, Info, Item, Svg } from "./styles"
import { Container } from "../../styles"
import TextoFrete from '../../assets/images/Icones/TextoFrete1.svg'
import frete from '../../assets/images/Icones/Frete.svg'
import cartao from '../../assets/images/Icones/CartaoInfo.svg'
import zap from '../../assets/images/Icones/zapInfo.svg'
import TextCartao from '../../assets/images/Icones/InfoPacela2.svg'
import TextoZap from '../../assets/images/Icones/INFOnovo2.svg'


const BannerInfo =()=> (
    <InfoCard>                   
        <Container>
            <Info>
                <Item>
                    <Svg src={frete} alt="" />
                    <Image src={TextoFrete} alt="" />
                </Item>
                <Item>
                    <Svg src={cartao} alt="" />
                    <Image src={TextCartao} alt="" />
                </Item>
                <Item>
                    <Svg src={zap} alt="" />
                    <Image src={TextoZap} alt="" />
                </Item>
            </Info>
            
        </Container>
        
    </InfoCard>
)

export default BannerInfo

