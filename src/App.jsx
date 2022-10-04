import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import Result from './pages/Result/Result';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App