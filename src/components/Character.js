import React from 'react';
import { Col } from 'react-materialize';


// Template for each repeating image square
const Character = props => (
    <Col l={3} m={4} s={6}>
      <img src={ props.image }
      alt={ props.alt }
      key={ props.id }
      id={ props.id }
      // click={ props.click.toString() }
      // Adding "() =>" tells the onClick to wait until clicked to fire the handleClick function
      onClick={ () => props.handleClick(props.id) }
      className="z-depth-4"
      />
    </Col>
  );

export default Character;
