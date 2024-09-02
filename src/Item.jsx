import React, { Component } from 'react'

export default class Item extends Component {

  render() {
    return (
      <div className='item d-flex flex-wrap justify-content-between'>
        <div  className='card  position-relative'>
        <div className=" card-body  container bg-light d-flex justify-content-center flex-column" >
          <h4 className='card-title text-center fw-bold'>Fresh new layout</h4>
          <p id='itemP'  className='card-title  fst-italic'> With Bootstrap 5, we've created a fresh new layout for this template!</p>
          <div  className="card bg-primary position-absolute">
          </div>
        </div>
      </div>
        <div  className='card position-relative'>
        <div className=" card-body  container bg-light  d-flex justify-content-center flex-column">
          <h4 className='card-title text-center fw-bold'>Free to download</h4>
          <p id='itemP' className='card-title fst-italic'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
          <div  className="card bg-primary position-absolute">
          </div>
        </div>
      </div>
        <div  className='card position-relative '>
        <div className="card-body  container bg-light  d-flex justify-content-center flex-column">
          <h4 className='card-title text-center fw-bold'>Jumbotron hero header</h4>
          <p id='itemP' className='card-title fst-italic'>The heroic part of this template is the jumbotron hero header!</p>
          <div  className="card bg-primary position-absolute">
          </div>
        </div>
      </div>
        <div  className='card position-relative '>
        <div className="card-body  container bg-light  d-flex justify-content-center flex-column">
          <h4 className='card-title text-center fw-bold'>Feature boxes</h4>
          <p id='itemP' className='card-title fst-italic'>We've created some custom feature boxes using Bootstrap icons!</p>
          <div  className="card bg-primary position-absolute">
          </div>
        </div>
      </div>
        <div  className='card position-relative '>
        <div className="card-body  container bg-light  d-flex justify-content-center flex-column">
          <h4 className='card-title text-center fw-bold'>Simple clean code</h4>
          <p id='itemP' className='card-title fst-italic'>We keep our dependencies up to date and squash bugs as they come!</p>
          <div  className="card bg-primary position-absolute">
          </div>
        </div>
      </div>
        <div  className='card position-relative '>
        <div className="card-body  container bg-light  d-flex justify-content-center flex-column">
          <h4 className='card-title text-center fw-bold'>A name you trust</h4>
          <p id='itemP' className='card-title fst-italic'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
          <div  className="card bg-primary position-absolute">
          </div>
        </div>
      </div>
      </div>
     
    )
  }
}
