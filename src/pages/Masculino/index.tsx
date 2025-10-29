import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import blusaMasculina from '../../assets/images/DESTAQUE/blusa_masculina.png'




const destaques: Thina[] = [
    {
        id:25,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 26,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 27,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 28,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 29,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 30,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 31,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 32,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusaMasculina,
    },
    
]



const Masculino = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Masculino