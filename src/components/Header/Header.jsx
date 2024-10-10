import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//autocomplete;
import Container from 'react-bootstrap/Container';
//import { Autocomplete } from '@react-google-maps/api';

import "./styles.css";


const Header = () => {
  return (
    <Navbar position="static" bg="dark" className="bg-dark justify-content-between"> 
    <Container>
    <h3 className='title'>Travel Advisor</h3>
    <Form inline >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search Places"         
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>


  )
}

export default Header