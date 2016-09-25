// This component is for Core / Human capital factors of the calculator. 
// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const {connector} = require('../reducers/store')

class CrsA extends Component {
  constructor(props) {
    super(props)

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
        {value: 'crs-school-8', name: "Master's degree, OR professional degree needed to practice in a licensed profession"},
        {value: 'crs-school-9', name: 'Doctoral level university degree (Ph.D.)'}
      ],
      firstLanguage: [
        {value: null, name: 'Select...'},
        {value: 'crs-first-lang-1', name: 'Less than CLB 4'},
        {value: 'crs-first-lang-2', name: 'CLB 4 or 5'},
        {value: 'crs-first-lang-3', name: 'CLB 6'},
        {value: 'crs-first-lang-4', name: 'CLB 7'},
        {value: 'crs-first-lang-5', name: 'CLB 8'},
        {value: 'crs-first-lang-6', name: 'CLB 9'},
        {value: 'crs-first-lang-7', name: 'CLB 10 or more'}
      ],
      secondLanguage: [
        {value: null, name: 'Select...'},
        {value: 'crs-second-lang-1', name: 'Less than CLB 4'},
        {value: 'crs-second-lang-2', name: 'CLB 5 or 6'},
        {value: 'crs-second-lang-3', name: 'CLB 7 or 8'},
        {value: 'crs-second-lang-4', name: 'CLB 9 or more'}
      ],
      workExperience: [
        {value: null, name: 'Select...'},
        {value: 'crs-work-experience-1', name: 'Less than 1 year'},
        {value: 'crs-work-experience-2', name: '1 year'},
        {value: 'crs-work-experience-3', name: '2 years'},
        {value: 'crs-work-experience-4', name: '3 years'},
        {value: 'crs-work-experience-5', name: '4 years'},
        {value: 'crs-work-experience-6', name: '5 or more years'}
      ],
      age: 0,
      school: '',
    }
    this.handleChange = this.handleChange .bind(this)
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs.crsaform)

    const addEvent = node.addEventListener || node.attachEvent

    addEvent('keypress', this.handleKeyPress.bind(this), false)
  }

  componentWillUnmount() {
    const removeEvent = node.removeEventListener || node.detachEvent

    removeEvent('keypress', this.handleKeyPress.bind(this))
  }

  handleKeyPress (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
    }
  }

  handleChange (event) {
    const value = event.target.value 
    switch (event.target.id) {
      case 'age':
        this.props.handleAge(value)
        break
      case 'education':
        this.props.handleEducation(value)
        break
      case 'first-lang':
        this.props.handleFirstLang(value)
        break
      case 'second-lang':
        this.props.handleSecondLang(value)
        break
      case 'experience':
        this.props.handleExperience(value)
        break
    }
  }

  checkEnter (event) {
    if (event.key === 'Enter') {
      this.handleChange(event);
    }
  }
  render() {
    var createList = (item, key) => {
      return <option className='crs-option' key={key} value={item.value}>{item.name}</option>
    }
    return (
      <div className='crs-a'>
        <form ref='crsaform' className='crs-a-form'>
          <p className='crs-a-question'>How old are you?</p>
          <input
           id='age'
           type='number'
           onChange={this.handleChange}
           onBlur={this.handleChange}
           onKeyPress={this.checkEnter.bind(this, 'age')} />
           <p className='crs-a-question'>What's your level of education?</p>
           <select id="education"
            onChange={this.handleChange}
            className='crs-select'>
            {this.state.schooling.map(createList)}
           </select>
           <p className='crs-a-question'>What's your first official language profiency?</p>
           <select id="first-lang"
            onChange={this.handleChange} className='crs-select'>
            {this.state.firstLanguage.map(createList)}
           </select>
           <p className='crs-a-question'>What's your second official language profiency?</p>
           <select id="second-lang"
            onChange={this.handleChange} className='crs-select'>
            {this.state.secondLanguage.map(createList)}
           </select>
           <p className='crs-a-question'>How much experience do you have working for a Canadian company?</p>
           <select id="experience"
            onChange={this.handleChange}className='crs-select'>
            {this.state.workExperience.map(createList)}
           </select>
        </form>
      </div>
    )
  }
}

module.exports = connector(CrsA)
