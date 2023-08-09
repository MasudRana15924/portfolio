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
import Contact from './pages/home/Contact';
import Education from './pages/home/Education';
import Courses from './pages/home/Courses';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/course" element={<Courses/>} />
 
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
