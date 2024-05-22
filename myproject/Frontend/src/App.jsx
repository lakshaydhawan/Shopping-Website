import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import Jeans from "./Jeans";
import Tshirts from "./Tshirts";
import Caps from "./Caps";
import Shirts from "./Shirts";
import Watches from "./Watches";
import Jackets from "./Jackets";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App(){
  return <>
  <Router>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contactus" element={<ContactUs/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Jean" element={<Jeans/>}/>
      <Route path="/Tshirt" element={<Tshirts/>}/>
      <Route path="/Cap" element={<Caps/>}/>
      <Route path="/Shirt" element={<Shirts/>}/>
      <Route path="/watch" element={<Watches/>}/>
      <Route path="/jacket" element={<Jackets/>}/>
    </Routes>

  </Router>
  
  </>
}
export default App;