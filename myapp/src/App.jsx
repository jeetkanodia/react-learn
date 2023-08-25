import Heading from "./components/Heading";
import "./styles/App.css";
import "./styles/Heading.css"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
const App = () => {
  return(
  <Router>
    <Heading/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Contact/>} />
     
    </Routes>

  </Router>
  )
}

export default App;
