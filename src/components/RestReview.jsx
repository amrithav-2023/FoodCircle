import React from 'react'
import { Button } from 'react-bootstrap'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function RestReview() {
    const [open, setOpen] = useState(false);

    const {id} = useParams()
    console.log(id);


    const allRestaurant = useSelector((state)=>state.restSlice.allRestaurent)
    console.log(allRestaurant);
    const selectedRestaurent = allRestaurant.find(item=>item.id == id)
    console.log(selectedRestaurent);

  return (
    <>
        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>click here to view the review</Button>
        <Collapse in={open}>
            
            <div className='my-2'>
                <hr />
                <div className='mt-5'>
                    <h6>{selectedRestaurent.reviews[1].name} ,{selectedRestaurent.reviews[1].date}</h6>
                    <p>rating:{selectedRestaurent.reviews[1].rating}</p>
                    <p>{selectedRestaurent.reviews[1].comments}</p>
                </div>
            </div>
                 
        </Collapse>

    </>
  )
}

export default RestReview