import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
    const [show, setShow] = useState(false);

    //const params = useParams()
    //console.log(params);
    const {id} = useParams()
    console.log(id);

    const allRestaurant = useSelector((state)=>state.restSlice.allRestaurent)
    console.log(allRestaurant);
    const selectedRestaurent = allRestaurant.find(item=>item.id == id)
    console.log(selectedRestaurent);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='m-5'>
        <div width={'80%'}>
            <Row>
                <Col md={1}></Col>
                <Col md={3}>
                    <img width={'100%'} height={'100%'} src={selectedRestaurent.photograph} alt="" />
                </Col>
                <Col md={7}>
                    <h1 className='text-center'>Restaurent <span className='text-secondary'>Details</span> </h1>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item disabled> <h2 className='text-center'>{selectedRestaurent.name}</h2> </ListGroup.Item>
                        <ListGroup.Item>Neighbourhood:{selectedRestaurent.neighborhood}</ListGroup.Item>
                        <ListGroup.Item>Cuisine_type:{selectedRestaurent.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item>Address:{selectedRestaurent.address}</ListGroup.Item>
                        <ListGroup.Item className='text-center mb-2 p-3'>
                            <Button className='me-3' onClick={handleShow}>Opening hours</Button>
                            <RestReview/>
                        </ListGroup.Item>
                    </ListGroup>
                    <hr />
                </Col>
                <Col md={1}></Col>
            </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opening Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:{selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{selectedRestaurent.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{selectedRestaurent.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday:{selectedRestaurent.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday:{selectedRestaurent.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday:{selectedRestaurent.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday:{selectedRestaurent.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>

        </div>
    </div>
  )
}

export default RestView