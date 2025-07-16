
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Service from "./components/Service";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service/>}></Route>
      </Routes>
    </BrowserRouter>


  </>
}
export default App;