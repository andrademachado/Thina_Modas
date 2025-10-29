import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import calcinha from '../../assets/images/MODA_INTIMA/calca.png'



const destaques: Thina[] = [
    {
        id:49,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 50,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 51,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 52,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 53,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 54,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 55,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    {
        id: 56,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: calcinha,
    },
    
]



const ModaIntima = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default ModaIntima