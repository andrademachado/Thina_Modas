import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import achadinhos from '../../assets/images/DESTAQUE/conjunto_short.png'



const destaques: Thina[] = [
    {
        id: 119,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 120,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 121,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 122,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 123,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 124,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 125,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 126,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 127,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 128,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 129,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    {
        id: 130,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: achadinhos,
    },
    
]



const Achadinhos = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Achadinhos