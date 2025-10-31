import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import blusas from '../../assets/images/BLUSAS/Blusas.png'



const destaques: Thina[] = [
    {
        id:57,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 58,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 59,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 60,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 61,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 62,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 63,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 64,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 65,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 66,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 67,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    {
        id: 68,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: blusas,
    },
    
]



const Shorts = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Shorts