import React from "react";
import AppContext from "./AppContext";

export default function AppState(props) {
  const [store, setStore] = React.useState({
    name: "Anushka Mishra",
    address: "Lucknow",
  });

  const logSomething = ()=>{
    console.log("Login here");
  }

  return <AppContext.Provider value={{store,logSomething}}>
     {props.children}
  </AppContext.Provider>;
}