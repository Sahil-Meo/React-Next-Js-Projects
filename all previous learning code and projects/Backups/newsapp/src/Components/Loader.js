import React, { Component } from 'react'
import image from './loading.svg'

export default class Loader extends Component {
  render() {
    return (
      <div className=' text-center my-4'>
        <img src={image} alt='loader-img' style={{width: '50px'}} />
      </div>
    )
  }
}
