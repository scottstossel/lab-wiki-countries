import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CountryCard = ({object: {name, flag}}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;