import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContanier from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContanier greeting="Mis Productos"/>
    </>
  )
}

export default App