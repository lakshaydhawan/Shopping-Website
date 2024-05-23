import Card from 'react-bootstrap/Card';
function Cardd2(props){

    
    return(
        <Card style={{ width: '18rem',margin: '45px' }}>
        <Card.Body>
          <img style={{height:200,width:200,marginLeft:15}} src={props.i}/>
          <Card.Title className='text-center'>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
        
        </Card.Body>
      </Card>
    )
}
export default Cardd2;