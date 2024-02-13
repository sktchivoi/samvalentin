import { HashRouter as Router, Route } from 'react-router-dom'
import Index from './index.jsx'
import Acept from './acept.jsx'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/index" component={Index}/>
        <Route path="/acept" component={Acept}/>
      </Router>
    </>
  )
}

export default App
