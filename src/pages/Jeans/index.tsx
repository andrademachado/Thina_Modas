import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import calca from '../../assets/images/jeans/Jeans.jpg'



const destaques: Thina[] = [
    {
        id:41,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: calca,
    },
    {
        id: 42,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    {
        id: 43,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    {
        id: 44,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    {
        id: 45,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    {
        id: 46,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    {
        id: 47,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    {
        id: 48,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calca,
    },
    
]



const Jeans = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Jeans