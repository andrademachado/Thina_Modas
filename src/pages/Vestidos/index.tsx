import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import bermuda from '../../assets/images/VESTIDOS/evangelica.png'



const destaques: Thina[] = [
    {
        id: 83,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 84,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 85,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 86,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 87,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 88,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 89,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 90,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 91,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 92,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 93 ,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 94,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    
]



const Vestidos = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Vestidos