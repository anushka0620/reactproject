import React, { useContext } from 'react'
import AppContext from './context/AppContext'

export default function A({children}) {

  const state = useContext(AppContext)

  state.logSomething()

  return (
    <div>
     
      {state.name}
      <h1>A</h1>
    </div>
  )
}