import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div id='banner' className='bg-light h-50 text-center px-5 d-flex justify-content-center flex-column mb-4'>
        <h1 className='fw-bolder'>A warm welcome!</h1>
        <h4 className='py-3'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</h4>
        <div>

        <button className='btn btn-primary w-15'>Call to action</button>
        </div>
      </div>
    )
  }
}
