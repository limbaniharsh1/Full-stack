import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Homescreen from './Screen/Homescreen'

function Allroutes() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' Component={Homescreen} exact/>
        </Routes>
      </Router>
    </div>
  )
}

export default Allroutes
