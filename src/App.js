import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./page/Menu";
import About from "./page/About";
import Contact from "./page/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
