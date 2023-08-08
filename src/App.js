import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './screen/shared/Navbar';
import Projects from './pages/home/Projects';
import Footer from './screen/shared/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
