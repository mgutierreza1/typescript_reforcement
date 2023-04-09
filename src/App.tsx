import { Contador } from "./components/Contador";
import { ContadorContHook } from "./components/ContadorContHook";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import TiposBasicos from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h3>Introduccion TS - React</h3>
      <hr/>
      <ContadorContHook/>
      {/* <Contador/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <TiposBasicos/> */}
    </div>
  )
}

export default App;