import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"


import saia from '../../assets/images/Infantil/SAIA_INFANTIL.png'





const destaques: Thina[] = [
    {
        id:34,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: saia,
    },
    {
        id: 35,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    {
        id: 36,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    {
        id: 36,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    {
        id: 37,
        title: 'Blusa Masculina de Algodão',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    {
        id: 38,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    {
        id: 39,
        title: 'Bermuda de lycra',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    {
        id: 40,
        title: 'Conjunto Esmeralda de Viscose',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: saia,
    },
    
]



const Infantil = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Infantil