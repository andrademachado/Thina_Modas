import Banner from "../../components/Banner"
import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import blusaMasculina from '../../assets/images/DESTAQUE/blusa_masculina.png'
import vestido from '../../assets/images/VESTIDOS/evangelica.png'
import bermuda from '../../assets/images/Feminino/Bermuda.png'
import esmeralda from '../../assets/images/OFERTAS/CONJ_ESMERALDA.png'
import calça from '../../assets/images/jeans/Jeans.jpg'
import blusa from '../../assets/images/BLUSAS/Blusas.png'
import infantil from '../../assets/images/Infantil/SAIA_INFANTIL.png'
import evangelica from '../../assets/images/SHORTS/jeans.2jpg.jpg'



const destaques: Thina[] = [
    {
        id:1,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 2,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 3,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 4,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: esmeralda,
    },
]

const ofertas : Thina[] = [
    {
        id: 5,
        title: 'Calça Jeans Masculina',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calça,
    },
    {
        id: 6,
        title: ' Blusa de Manga Bordada',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusa,
    },
    {
        id: 7,
        title: 'Saia Infantil',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: infantil,
    },
    {
        id: 8,
        title: 'Short Jeans',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: evangelica,
    },
    
]

const Home = () => (
    <>
        <Banner />        
        <ProductList thina={destaques} title="DESTAQUES" />
        <ProductList thina={ofertas} title="OFERTAS " />
    </>
)

export default Home