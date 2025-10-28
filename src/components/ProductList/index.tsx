import Product from "../Product"
import{ Container, List, TituloSecao  } from './styles'

type Props = {
    title:string;
}

const ProuctList = ({ title }: Props) =>(
    <Container>
        <div className="container">
            <TituloSecao>{title}</TituloSecao>
        <List>
                <Product title="Blusa  Gola Polo em Algodão  " preco="R$ 99,90" infos="3x de R$33,30*" image="//placehold.it/299x400"/>
                <Product title="Blusa Gola Polo   em Algodão   " preco="R$ 99,90" infos="3x de R$33,30*" image="//placehold.it/299x400" />
                <Product title="Blusa Gola Polo  em Algodão   " preco="R$ 99,90" infos="3x de R$33,30*" image="//placehold.it/299x400" />
                <Product title="Blusa Gola Polo  em Algodão   " preco="R$ 99,90" infos="3x de R$33,30*" image="//placehold.it/299x400" />
        </List>
        </div>
    </Container>
)


export default ProuctList