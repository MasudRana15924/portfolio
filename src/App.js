import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './screen/shared/Navbar';
import Footer from './screen/shared/Footer';
import { useEffect, useState } from 'react';
import Loader from './pages/loader/Loader';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
<div>
    { loading ? <div>
      <Loader></Loader >
    </div > : <div className="App">
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>}
</div>
  );
}

export default App;
