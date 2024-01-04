import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restSlice'
import Spinner from 'react-bootstrap/Spinner';


function Home() {
  const allrestaurent = useSelector((state)=>state.restSlice.allRestaurent)
  console.log(allrestaurent);
  const {loading,error} = useSelector((state)=>state.restSlice.allRestaurent)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRestaurent())
  },[])

  const myStyle = {
    backgroundImage : "url('https://media.istockphoto.com/id/1008291106/photo/barista-making-a-cup-of-coffee-in-machine.jpg?s=2048x2048&w=is&k=20&c=hirSx2lNspIBB_uaJ8o4R0IrGF3REaCQXR1g6JmJ0qY=')",
    height:'50vh',
    fontSize:'30px',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
  }

  return (
    <div>
        <Row className='bg-transparent mb-5'>
          <Col sm={12} md={12} className='d-flex justify-content-center align-items-center flex-column' style={myStyle}>
            <h1 style={{fontSize:'50px'}}>Food Circle</h1>
            <p>
              find all your favourites at one place
            </p>
          </Col>
        </Row>
        <Row>

          <div>
            { loading &&
              <p>
              <Spinner animation="border" variant="secondary" />Loading
            </p>
            }
          </div>

            {!loading && allrestaurent?.length>0?
              allrestaurent?.map((restaurent)=>(
              <Col className='px-5 py-3' sm={6} md={4} >
                <RestCard restaurent={restaurent}   />
            </Col>
              ))
            :
            <p className='text-danger fw-bolder'>No restaurent available</p>
            }

        </Row>
    </div>
  )
}

export default Home