// import React from "react";
// import AppContext from "./AppContext";


// export default function AppState(props) {
//   const [store, setStore] = React.useState({
//     name: "Arjit",
//     address: "Lucknow",
//   });

//   const logSomething = ()=>{
//     console.log("Loogin here");
//   }

//   return <AppContext.Provider value={{store,logSomething}}>
//      {props.children}
//   </AppContext.Provider>;
// }

import { useState } from "react";
import AppContext from "./AppContext";

export default function AppState(props){

  const [name,setName] = useState("ETP Batch")


  return(
    <AppContext.Provider value={{name,setName}}>
      {props.children}
      {/* <App/> */}
    </AppContext.Provider>
  )
}