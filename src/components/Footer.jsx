import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <Row className='mt-3'>
            <Col md={3} sm={12}>
                <h1>Restaurent</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorem fuga ea repudiandae quas sequi dignissimos adipisci veniam, earum corporis inventore recusandae porro quae obcaecati officiis, iure, dolor veritatis quaerat?</p>
            </Col>
            <Col md={3} sm={12}>
                <h3>Links</h3>
                <div className='d-flex flex-column'>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                </div>
            </Col>
            <Col md={3} sm={12}>
                <h3>Links</h3>
                <div className='d-flex flex-column'>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                    <a href="" style={{textDecoration:'none'}}>Menu</a>
                </div>
            </Col>
            <Col md={3} sm={12}>
                <h2>Contact us</h2>
                <form action="">
                    <input type="text" className='form-control border rounded mb-2' placeholder='Enter your email' />
                    <input type="button" className='form-control rounded btn-dark' value={'subscribe'} />
                </form>
            </Col>
        </Row>
    </div>
  )
}

export default Footer