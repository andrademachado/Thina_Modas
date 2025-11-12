import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Topo from './components/Topo';
import Rotas from './routes';
import { GlobalCss, Container } from './styles';
import Rodape from './components/Rodape';
import Footer from './components/Footer';

function App() {  
  return (
    <BrowserRouter>
      <GlobalCss />
      <Topo />
      <div className='container'>
        <Container>
        <Header/>
        </Container>        
      </div>      
        <Rotas/>
        <Footer />
        <Rodape />
    </BrowserRouter>
  )
  
}

export default  App
