import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurent}) {
  return (
    <div>
    <Link to={`/restaurent-view/${restaurent.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%' }}>
          <Card.Img height={'350px'} variant="top" src={restaurent.photograph} />
          <Card.Body>
            <Card.Title className='text-center'>{restaurent.name}</Card.Title>
            <hr />
           <Row className='p-4'>
            <Col className='ms-4'>
                <Card.Text>
                    {restaurent.neighborhood}
                </Card.Text>
            </Col>
            <Col className='ms-4'>
                <Card.Text>
                    {restaurent.cuisine_type}
                </Card.Text>
            </Col>
           </Row>
          </Card.Body>
        </Card>
    </Link>
    </div>
  )
}

export default RestCard