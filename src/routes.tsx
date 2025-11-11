import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Feminino from './pages/Feminino';
import ModaEvangelica from './pages/ModaEvangelica';
import Masculino from './pages/Masculino';
import Infantil from './pages/Infantil';
import Jeans from './pages/Jeans';
import ModaIntima from './pages/ModaIntima';
import Blusas from './pages/Blusas';
import Shorts from './pages/Shorts';
import Vestidos from './pages/Vestidos';
import Camisas from './pages/Camisas';
import Calcas from './pages/Calcas';
import Achadinhos from './pages/Achadinhos';
import ThinaKids from './pages/ThinaKids';
import NovaColecao from './pages/NovaColecao';



const Rotas = () => (
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Feminino" element={<Feminino />} />
        <Route path="/modaevangelica" element={< ModaEvangelica />} />
        <Route path="/masculino" element={< Masculino />} />
        <Route path="/infantil" element={< Infantil />} />
        <Route path="/jeans" element={< Jeans />} />
        <Route path="/modaintima" element={< ModaIntima />} />
        <Route path="/blusas" element={< Blusas />} />
        <Route path="/shorts" element={< Shorts />} />
        <Route path="/vestidos" element={< Vestidos />} />
        <Route path="/camisas" element={< Camisas />} />
        <Route path="/calcas" element={< Calcas />} />
        <Route path="/achadinhos" element={< Achadinhos />} />
        <Route path="/thina-kids" element={< ThinaKids />} />
        <Route path="/nova-colecao" element={< NovaColecao />} />
        <Route path="achadinhos" element={<Achadinhos />} />
        <Route path="thina-kids" element={<ThinaKids />} />
        <Route path="nova-colecao" element={<NovaColecao />} />
    </Routes>
)



export default Rotas
