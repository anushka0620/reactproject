import "./App.css";
import A from "./A";
import B from "./B";
import C from "./C";
import { useContext } from "react";
import AppContext from './context/AppContext.js'
function App() {

  const state = useContext(AppContext);
  console.log("State",state);
  
  return (
    <div>
      <A>
      
      </A>
      <B/>
        <C/>
    </div>
  );
}

export default App;
