import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import vestido from '../../assets/images/VESTIDOS/evangelica.png'




const destaques: Thina[] = [
    {
        id:13,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 14,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 15,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 16,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 17,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 18,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 19,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id:20,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id:21,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 22,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 23,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
    {
        id: 24,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
    },
]



const ModaEvangelica = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default ModaEvangelica