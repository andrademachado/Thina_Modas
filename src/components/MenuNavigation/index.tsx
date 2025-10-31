import { Link } from "react-router-dom"
import { Container } from "../../styles"
import { Imagem, Item, MenuLinks, NavBar, Texto } from "./styles"

import blusas from '../../assets/images/Icones/blusas2.svg'
import shorts from '../../assets/images/Icones/short.svg'
import vestidos from '../../assets/images/Icones/vestido.svg'
import calca from '../../assets/images/Icones/Calca.svg'
import camisa from '../../assets/images/Icones/camisa.svg'

const MenuNavigation = () => (
    <NavBar>
    <Container>
            <MenuLinks>
                <Item>
                    <Link to="/blusas" >
                        <Imagem>
                        <img src={blusas} alt="" />
                        </Imagem>
                        <Texto>BLUSAS</Texto>
                </Link>
                </Item>
                <Item>
                    <Link to="/shorts" >
                        <Imagem>
                        <img src={shorts} alt="" />
                        </Imagem>
                    <Texto>SHORTS</Texto>
                </Link>
                </Item>
                <Item>
                    <Link to="/vestidos" >
                        <Imagem>
                        <img src={vestidos} alt="" />
                        </Imagem>
                    <Texto>VESTIDOS</Texto>
                </Link>
                </Item>
                <Item>
                    <Link to="/camisas" >
                        <Imagem>
                        <img src={camisa} alt="" />
                        </Imagem>
                    <Texto>CAMISAS</Texto>
                    </Link></Item>
                <Item>
                    <Link to="/calcas" >
                        <Imagem>
                            <img src={calca} alt="" />
                        </Imagem>
                        <Texto>CALÇAS</Texto>
                    </Link></Item>
            </MenuLinks>
    </Container>
    </NavBar>

)

export default MenuNavigation