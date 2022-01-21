import './App.css'
import { BrowserRouter as Router, Route, Routes , Navbar } from "react-router-dom";
import Hero from './components/Hero'
import Login from './components/login';
import Register from './components/register';
import List from './components/List'
import Add from './components/Add';

function App() {
  return (
    <div>
{/* <Hero/> */}

<Router>

    <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} /> 
       </Routes>
      </Router>

    </div>
  )
}
export default App; 