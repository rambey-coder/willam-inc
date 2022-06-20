import './App.css';
import SignUp from './Components/SignUp'
import Page from './Components/Page';
import Pricing from './Components/Pricing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/page' element={<Page />} />
          <Route path='/price' element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
