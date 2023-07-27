import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Homescreen from './Screen/Homescreen'
import ProductsDetail from './Screen/ProductsDetail'

function Allroutes() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' Component={Homescreen} exact/>
            <Route path='/products/:id' Component={ProductsDetail}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Allroutes
