import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './styles/styles.css';


function App() {
  return (
    <>
    <div className="container">
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
