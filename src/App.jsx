import { HashRouter as Router, Route } from 'react-router-dom'
import Index from './index.jsx'
import Acept from './acept.jsx'

function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Index/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/acept" element={<Acept/>}/>
      </Router>
    </>
  )
}

export default App
