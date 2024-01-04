import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home" className='d-flex flex-row'>
          <i class="fa-solid fa-burger me-2"></i>
            {' '}
           <h4> <span className='danger'>Food</span> Circle</h4>
          </Navbar.Brand>

            <input type="text" onChange={(e)=>dispatch(search(e.target.value))} className='form-control w-25' placeholder='search by neighbourhood' />
            
        </Container>
      </Navbar>
    </div>
  )
}

export default Header