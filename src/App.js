import './App.css';
import SignUp from './Components/SignUp'
import Page from './Components/Page';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/page' element={<Page />} />
          <Route path='/price' element={<Pricing />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
