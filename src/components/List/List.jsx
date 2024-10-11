import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = () => {

  const [type, setType]= useState('resturants');
  const [rating, setRating]= useState('');

  const places = [
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'}, 
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'}, 
  ];

  return (
      <div>
        <h2>Resturants, Hotels & Attractions around you!</h2>
        <Stack direction="horizontal" gap={3}>
        <Row>{/*/places form*/}
          <Col>
          <Form.Select value={type} onChange={(e)=> setType(e.target.value)} aria-label="Default select example">
            <option value="resturants">Resturant</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </Form.Select>
          </Col>
        </Row>

        <Row>{/*/ratings form*/}
          <Col>
          <Form.Select value={rating} onChange={(e)=> setRating(e.target.value)} aria-label="Default select example">
            <option>Rating</option>
            <option value ='all'>All</option>
            <option value={3}>Above 3</option>
            <option value={4}>Above 4</option>
            <option value={5}>5 stars</option>
          </Form.Select>
          </Col>
        </Row>
        </Stack>
        <Stack gap={3}>
            {places?.map((place, i) => (
              <Stack key={i}>
                <PlaceDetails place={place}/>
              </Stack>
            ))}
        </Stack>

      </div>
  
  )
}

export default List