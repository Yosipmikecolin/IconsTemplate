import {Routes,Route} from "react-router-dom";
import IconFlecha from "./components/IconFlecha";
import IconSalir from './components/IconSalir';

const Icon1 = IconFlecha();
const Icon2 = IconSalir();

function App() {

  return (
   <Routes>
    <Route path='/icon-flecha' element={Icon1}/>
    <Route path='/icon-salir' element={Icon2}/>
   </Routes>
  )
}

export default App
