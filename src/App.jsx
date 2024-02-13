import { Routes, Route } from 'react-router-dom'
import Index from './index.jsx'
import Acept from './acept.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/acept" element={<Acept/>}/>
      </Routes>
    </>
  )
}

export default App
