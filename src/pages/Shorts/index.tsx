import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import bermuda from '../../assets/images/SHORTS/jeans.2jpg.jpg'



const destaques: Thina[] = [
    {
        id: 69,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 70,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 71,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 72,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 73,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 74,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 75,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 78,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 79,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 80,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 81,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 82,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    
]



const Shorts = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Shorts