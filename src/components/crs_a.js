// This component is for Core / Human capital factors of the calculator. 
// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class CrsA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 0
    };
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs.crsaform);

    const addEvent = node.addEventListener || node.attachEvent;

    addEvent('keypress', this.handleKeyPress.bind(this), false);
  }

  componentWillUnmount() {
    const removeEvent = node.removeEventListener || node.detachEvent;

    removeEvent('keypress', this.handleKeyPress.bind(this));
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  handleChange(event) {
    this.setState({ age: event.target.value });
    console.log(this.state.age);
  }

  checkEnter(event) {
    if(event.key === 'Enter') {
      this.handleChange(event);
    }
  }

  render() {
    return (
      <div className='crs-a'>
        <form ref='crsaform' className='crs-a-form'>
          <p className='crs-a-question'>How old are you?</p>
          <input
           type='number'
           value={this.state.age}
           onChange={this.handleChange.bind(this)}
           onBlur={this.handleChange.bind(this)}
           onKeyPress={this.checkEnter.bind(this)} />
           <p className='crs-a-question'>What's your level of education?</p>
           <select className='crs-select'>
            <option className='crs-option' value='school'>Less than secondary</option>
            <option className='crs-option' value='school'>Secondary diploma</option>
            <option className='crs-option' value='school'>One-year degree, diploma or certificate from a university, college,
             trade or technical school, or other institute</option>
            <option className='crs-option' value='school'>One-year degree, diploma or certificate from  a university, college, trade or technical school,
              or other institute</option>
            <option className='crs-option' value='school'>Two-year program at a university, college, trade or technical school,
             or other institute</option>
            <option className='crs-option' value='school'>Bachelor's degree OR  a three or more year program at a university, college, trade or technical school,
             or other institute</option>
            <option className='crs-option' value='school'>Two or more certificates, diplomas, or degrees.
             One must be for a program of three or more years</option>
            <option className='crs-option' value='school'>Master's degree, OR professional degree needed to practice in a licensed profession
             (For “professional degree,” the degree program must have been in: medicine,
             veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)</option>
            <option className='crs-option' value='school'>Doctoral level university degree (Ph.D.)</option>
           </select>
           <p className='crs-a-question'>What's your first official language profiency?</p>
           <select className='crs-select'>
            <option className='crs-option'value='language-benchmark'></option>
            <option className='crs-option'value='language-benchmark'></option>
            <option className='crs-option'value='language-benchmark'></option>
            <option className='crs-option'value='language-benchmark'></option>
            <option className='crs-option'value='language-benchmark'></option>
            <option className='crs-option'value='language-benchmark'></option>
            <option className='crs-option'value='language-benchmark'></option>
           </select>
        </form>
      </div>
    )
  }
}

export default connect()(CrsA);