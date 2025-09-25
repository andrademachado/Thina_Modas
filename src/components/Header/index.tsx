import { CampoPesquisar, HeaderBar, Logo, Lupa, MenuNav, Pesquisa, Sacola, } from './styles'
import logo from '../../assets/images/LOGOS/LOGOBranco-T M 2.svg'
import lupa from '../../assets/images/Icones/lupaSearch.svg'
import sacola from '../../assets/images/Icones/SacolaVector.svg'

const Header = () => (
    <HeaderBar>
        <Logo href="#">
            < img src={logo} alt='Tina Modas' />
        </Logo>
        <Pesquisa>
            <CampoPesquisar type="text" placeholder='Pesquisar produto' />
            <Lupa>
                <img src={lupa} alt="pesquisar" />
            </Lupa>
        </Pesquisa>
        <Sacola href="#">
            <img src={sacola} alt="Carrinho de compras" />
        </Sacola>
        <MenuNav>
            <ul>
                <li><a href="#">FEMININO</a></li>
                <li><a href="#">MODA EVANGÉLICA</a></li>
                <li><a href="#">MASCULINO</a></li>
                <li><a href="#">INFANTIL</a></li>
                <li><a href="#">JEANS</a></li>
                <li><a href="#">MODA ÍNTIMA</a></li>
            </ul>
        </MenuNav>
    </HeaderBar>
)
export default Header