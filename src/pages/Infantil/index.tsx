import ProductList from "../../components/ProductList"
import type Thina from "../../models/Thina"

import blusaMasculina from '../../assets/images/DESTAQUE/blusa_masculina.png'
import vestido from '../../assets/images/VESTIDOS/evangelica.png'
import bermuda from '../../assets/images/Feminino/Bermuda.png'
import esmeralda from '../../assets/images/OFERTAS/CONJ_ESMERALDA.png'



const destaques: Thina[] = [
    {
        id:1,
        title:'Blusa Masculina de Algodão',
        preco:'R$99,99',
        infos:'até 3X sem Juros',
        image: blusaMasculina,
    },
    {
        id: 2,
        title: 'Vestido Longo de Viscose Bordado',
        preco: 'R$99,99',
        infos: 'até 3X sem Juros',
        image: vestido,
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
        image: esmeralda,
    },
    
]



const Infantil = () => (
    <>       
        <ProductList thina={destaques} title="" />
    </>
)

export default Infantil