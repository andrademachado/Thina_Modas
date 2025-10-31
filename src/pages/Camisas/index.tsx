import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import bermuda from '../../assets/images/CALCAS/Miguel_masculino.jpg'



const destaques: Thina[] = [
    {
        id: 95,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 96,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 97,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 98,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 99,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 100,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 101,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 102,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 103,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 104,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 105,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 106,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    
]



const Camisas = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Camisas