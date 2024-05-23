import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Cardd(props){
  let navigate = useNavigate();
    const shoot = () => {
      alert(props.name+" added to cart!");
    }
    const more = () => {
      navigate('/'+props.name);
    }
    return(
        <Card style={{ width: '18rem',margin: '45px' }}>
        <Card.Body>
          <img style={{height:200,width:200,marginLeft:15}} src={props.i}/>
          <Card.Title className='text-center'>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
          <button onClick={shoot} className='btn btn-primary'>Add to cart</button>
          <button style={{marginLeft:22}} onClick={more} className='btn btn-primary'>View more</button>
        </Card.Body>
      </Card>
    )
}
export default Cardd;