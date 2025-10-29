import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import bermuda from '../../assets/images/Feminino/Bermuda.png'



const destaques: Thina[] = [
    {
        id:1,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 2,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
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
        image: bermuda,
    },
    {
        id: 5,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 6,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 7,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 8,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 9,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 10,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 11,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    {
        id: 12,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: bermuda,
    },
    
]



const Feminino = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Feminino