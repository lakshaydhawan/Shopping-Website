import Carousel from 'react-bootstrap/Carousel';
import hoodie from "./images/hoodie.jpg";
import laptop from "./images/laptop.png";
import reebok from "./images/reebok.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className="d-block w-100" style={{height:417}} src={hoodie} alt="Image One"/> 
      </Carousel.Item>
      <Carousel.Item>
      <img  className="d-block  w-100" style={{height:417}} src={laptop} alt="Image One"/> 
      </Carousel.Item>
      <Carousel.Item>
      <img   className="d-block  w-100" style={{height:417}} src={reebok} alt="Image One"  /> 
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;