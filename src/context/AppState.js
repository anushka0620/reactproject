// React, { useState } from "react";
// AppContext from "./AppContext";
import { useState } from "react";
import AppContext from "./AppContext";
export default function AppState(props) {
  const [name, setNAme] = useState("ETP Batch")
  return <AppContext.Provider value={{name,setNAme}}>
     {props.children}
  </AppContext.Provider>;
}
//export default function AppState(props) {
  //const [store, setStore] = React.useState({
    //name: "Anushka Mishra",
    //address: "Lucknow",
  //});

  //const logSomething = ()=>{
 //   console.log("Login here");
 // }

//const [name,setName] = useState"Etp batch"
  //return 
  //<AppContext.Provider value ={{name,setName}}>
    // {props.children}
  //</AppContext.Provider>

  //<AppContext.Provider value={{store,logSomething}}>
    // {props.children}
  //</AppContext.Provider>;
