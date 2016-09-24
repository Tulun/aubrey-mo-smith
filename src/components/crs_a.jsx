// This component is for Core / Human capital factors of the calculator. 
// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const {connector} = require('../reducers/store')

class CrsA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schooling: [
        {value: null, name: 'Select...'},
        {value: 'crs-school-1', name: 'Less than secondary'}, 
        {value: 'crs-school-2', name: 'Secondary diploma'},
        {value: 'crs-school-3', name: 'One-year degree, diploma or certificate from a university, college,' +
        'trade or technical school, or other institute'},
        {value: 'crs-school-4', name: 'One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute'}, 
        {value: 'crs-school-5', name: 'Two-year program at a university, college, trade or technical school, or other institute'},
        {value: 'crs-school-6', name: "Bachelor's degree OR  a three or more year program at a university, college, trade or technical school,or other institute" }, 
        {value: 'crs-school-7', name: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years'},
        {value: 'crs-school-8', name: "Master's degree, OR professional degree needed to practice in a licensed profession (For professional degree, the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)"},
        {value: 'crs-school-9', name: 'Doctoral level university degree (Ph.D.)'}
      ],
      age: 0,
      school: '',
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

  handleChange(name, event) {
    console.log(name);
    var nextState = {};
    nextState[name] = event.target.value;
    this.setState({ age: event.target.value });
    console.log(this.state.age);
  }

  checkEnter(event) {
    if(event.key === 'Enter') {
      this.handleChange(event);
    }
  }

  render() {
    var createSchoolList = (item, key) => {
      return <option className='crs-option' key={key} value={item.value}>{item.name}</option>
    }
    var createFirstLanguage = (item, key) => {

    }
    return (
      <div className='crs-a'>
        <form ref='crsaform' className='crs-a-form'>
          <p className='crs-a-question'>How old are you?</p>
          <input
           type='number'
           value={this.state.age}
           onChange={this.handleChange.bind(this,'age')}
           onBlur={this.handleChange.bind(this, 'age')}
           onKeyPress={this.checkEnter.bind(this, 'age')} />
           <p className='crs-a-question'>What's your level of education?</p>
           <select 
            className='crs-select'>
            {this.state.schooling.map(createSchoolList)}
           </select>
           <p className='crs-a-question'>What's your first official language profiency?</p>
           <select className='crs-select'>
            <option className='crs-option' value='language-benchmark'>Less than CLB 4</option>
            <option className='crs-option' value='language-benchmark'>CLB 4 or 5</option>
            <option className='crs-option' value='language-benchmark'>CLB 6</option>
            <option className='crs-option' value='language-benchmark'>CLB 7</option>
            <option className='crs-option' value='language-benchmark'>CLB 8</option>
            <option className='crs-option' value='language-benchmark'>CLB 9</option>
            <option className='crs-option' value='language-benchmark'>CLB 10 or more</option>
           </select>
           <p className='crs-a-question'>What's your second official language profiency?</p>
           <select className='crs-select'>
            <option className='crs-option' value='second-language-benchmark'>Less than CLB 4</option>
            <option className='crs-option' value='second-language-benchmark'>CLB 5 or 6</option>
            <option className='crs-option' value='second-language-benchmark'>CLB 7 or 8</option>
            <option className='crs-option' value='second-language-benchmark'>CLB 9 or more</option>
           </select>
           <p className='crs-a-question'>How much experience do you have working for a Canadian company?</p>
           <select className='crs-select'>
            <option className='crs-option' value='work-experience'>Less than 1 year</option>
            <option className='crs-option' value='work-experience'>1 year</option>
            <option className='crs-option' value='work-experience'>2 years</option>
            <option className='crs-option' value='work-experience'>3 years</option>
            <option className='crs-option' value='work-experience'>4 years</option>
            <option className='crs-option' value='work-experience'>5 or more years</option>
           </select>
        </form>
      </div>
    )
  }
}

module.exports = connector(CrsA)
