import {Routes,Route} from "react-router-dom";
import IconFlecha from "./components/IconFlecha";
import IconSalir from './components/IconSalir';

function App() {

  return (
   <Routes>
    <Route path='/icon-salir' element={<IconSalir/>}/>
    <Route path='/icon-flecha' element={<IconFlecha/>}/>
   </Routes>
  )
}

export default App
