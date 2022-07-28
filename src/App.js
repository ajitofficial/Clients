import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import CodeforInterview from './components/CodeforInterview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<CodeforInterview />} />
          <Route exact path="/all" element={<AllUser />} />
          <Route exact path='/add' element={<AddUser />}/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
