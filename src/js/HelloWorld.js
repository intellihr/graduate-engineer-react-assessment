import React from 'react'

export default class HelloWorld extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Hey</h1>
          </div>
          <div className='col text-right'>
            <h1>IT WORKS</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='alert alert-success' role='alert'>
              Hello World
            </div>
          </div>
        </div>
      </div>
    )
  }
}
