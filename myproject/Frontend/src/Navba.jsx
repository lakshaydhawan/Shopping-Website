import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function Navba(){
    return (
        <>
        
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Link className="navbar-brand " to="/"><h2 >Shopify</h2></Link>
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About Us</Link>
                <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                <Link className="nav-link" to="/Login">Login</Link>
                <Link className="nav-link" to="/Signup">Signup</Link>
              </Nav>
            </Container>
          </Navbar>
        
    
          
        </>
        
    )
}
export default Navba;