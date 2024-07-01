import BarraLateral from "./Containers/BarraLateral"
import EstiloGlobal, { Container } from "./styles"
import ListaDeTareas from "./Containers/ListaDeTareas/Index"

function App() {
  return (
<>
<EstiloGlobal />
<Container>
  <BarraLateral/>
  <ListaDeTareas/>
    </Container>
</>

  ) 
}

export default App
