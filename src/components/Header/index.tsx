// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CampoPesquisar, HeaderBar, Logo, Lupa, MenuNav, Pesquisa, Sacola } from './styles';
import logo from '../../assets/images/LOGOS/LOGOBranco-T M 2.svg';
import lupa from '../../assets/images/Icones/lupaSearch.svg';
import sacola from '../../assets/images/Icones/SacolaVector.svg';

const Header: React.FC = () => (
    <HeaderBar>
        {/* Logo: usar Link para navegar ao home */}
        <Logo as={Link} to="/">
            <img src={logo} alt="Tina Modas" />
        </Logo>

        <Pesquisa>
            <CampoPesquisar type="text" placeholder="Pesquisar produto" />
            <Lupa type="button" aria-label="Pesquisar">
                <img src={lupa} alt="pesquisar" />
            </Lupa>
        </Pesquisa>

        {/* Sacola (carrinho) como Link para /carrinho */}
        <Sacola as={Link} to="/carrinho" aria-label="Carrinho">
            <img src={sacola} alt="Carrinho de compras" />
        </Sacola>

        <MenuNav>
            <ul>
                <li><Link to="/categoria/feminino">FEMININO</Link></li>
                <li><Link to="/categoria/moda-evangelica">MODA EVANGÉLICA</Link></li>
                <li><Link to="/categoria/masculino">MASCULINO</Link></li>
                <li><Link to="/categoria/infantil">INFANTIL</Link></li>
                <li><Link to="/categoria/jeans">JEANS</Link></li>
                <li><Link to="/categoria/moda-intima">MODA ÍNTIMA</Link></li>
            </ul>
        </MenuNav>
    </HeaderBar>
);

export default Header;
