import React, { Component } from 'react';
import { connect } from 'react-redux';

class TypeForm extends Component {

  render() {
    return (
      <div className='type-form'>
        <p> Hello World </p>
      </div>
    )
  } 
}

export default connect()(TypeForm);