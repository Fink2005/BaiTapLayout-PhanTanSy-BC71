import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div id='header' className='px-5 d-flex justify-content-between align-items-center'>
      <h5 className='text-white'>Start Bootstrap</h5>
            <ul className='d-flex '>
                <li className='px-3 text-white list-group-item'>Home</li>
                <li className='px-3 text-white list-group-item'>About</li>
                <li className='px-3 text-white list-group-item' >Contact</li>
            </ul>
        </div>
    )
  }
}
