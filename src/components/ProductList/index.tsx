import type Thina from "../../models/Thina";
import Product from "../Product"
import{ Container, List, TituloSecao  } from './styles'

type Props = {
    title:string;
    thina: Thina[]
}

const ProuctList = ({ title, thina }: Props) =>(
    <Container>
        <div className="container">
            <TituloSecao>{title}</TituloSecao>
        <List>
            {thina.map((thina) =>(
                <Product 
                key={thina.id}
                title={thina.title}                 
                preco={thina.preco}
                image={thina.image}
                infos={thina.infos}
                />
            ))}
        </List>
        </div>
    </Container>
)


export default ProuctList