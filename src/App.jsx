import React from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Todo />} /> 
      </Routes>
    </Router>
  )
}

export default App
