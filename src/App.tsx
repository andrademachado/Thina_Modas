import Banner from "./components/Banner"
import Header from "./components/Header"
import Topo from "./components/Topo"
import { Container, GlobalCss, } from "./styles"

function App() {
  return (
        <>
        <GlobalCss />
        <Topo/>
        <Container>
          <Header />
          
        </Container>
      <Banner />
    </>
  )
}

export default App
