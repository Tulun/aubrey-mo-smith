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
        {value: 'crs-school-8', name: "Master's degree, OR professional degree needed to practice in a licensed profession (For professional degree, the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)"},
        {value: 'crs-school-9', name: 'Doctoral level university degree (Ph.D.)'}
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
           id='age'
           type='number'
           onChange={this.handleChange}
           onBlur={this.handleChange}
           onKeyPress={this.checkEnter.bind(this, 'age')} />
           <p className='crs-a-question'>What's your level of education?</p>
           <select id="education"
            className='crs-select'
            onChange={this.handleChange} >
            {this.state.schooling.map(createSchoolList)}
           </select>
           <p className='crs-a-question'>What's your first official language profiency?</p>
           <select id="first-lang" className='crs-select' onChange={this.handleChange}>
            <option className='crs-option' value='language-benchmark-1'>Less than CLB 4</option>
            <option className='crs-option' value='language-benchmark-2'>CLB 4 or 5</option>
            <option className='crs-option' value='language-benchmark-3'>CLB 6</option>
            <option className='crs-option' value='language-benchmark-4'>CLB 7</option>
            <option className='crs-option' value='language-benchmark-5'>CLB 8</option>
            <option className='crs-option' value='language-benchmark-6'>CLB 9</option>
            <option className='crs-option' value='language-benchmark-7'>CLB 10 or more</option>
           </select>
           <p className='crs-a-question'>What's your second official language profiency?</p>
           <select id="second-lang" className='crs-select' onChange={this.handleChange}>
            <option className='crs-option' value='second-language-benchmark-1'>Less than CLB 4</option>
            <option className='crs-option' value='second-language-benchmark-2'>CLB 5 or 6</option>
            <option className='crs-option' value='second-language-benchmark-3'>CLB 7 or 8</option>
            <option className='crs-option' value='second-language-benchmark-4'>CLB 9 or more</option>
           </select>
           <p className='crs-a-question'>How much experience do you have working for a Canadian company?</p>
           <select id="experience" className='crs-select' onChange={this.handleChange}>
            <option className='crs-option' value='work-experience-1'>Less than 1 year</option>
            <option className='crs-option' value='work-experience-2'>1 year</option>
            <option className='crs-option' value='work-experience-3'>2 years</option>
            <option className='crs-option' value='work-experience-4'>3 years</option>
            <option className='crs-option' value='work-experience-5'>4 years</option>
            <option className='crs-option' value='work-experience-6'>5 or more years</option>
           </select>
        </form>
      </div>
    )
  }
}

module.exports = connector(CrsA)
