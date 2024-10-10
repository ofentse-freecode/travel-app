import React, { useState, useEffect } from "react";
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Maps from './components/Map/Map.jsx';
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { getPlacesData } from './api'

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
   getPlacesData()
   .then((data) => {
    console.log(data);
    setPlaces(data);
   })
  },[]);

  return (
    <div>
      <Header />
     
   <Stack direction="horizontal" gap={3}>
    <Row>
      <Col >
    <List />
    </Col> 
    <Col>
    <Maps />
    </Col>  
    </Row>
  </Stack>

  </div>
  );
}

export default App;
