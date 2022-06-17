import './App.css';
import SignUp from './Components/SignUp'
import Page from './Components/Page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
