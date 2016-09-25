// This component is for Core / Human capital factors of the calculator. 
// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const DonutChart = require('./donut_chart')
const {connector} = require('../reducers/store')
const {browserHistory} = require('react-router')

class CrsA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schooling: [
        {value: null, name:'Select...'},
        {value: 'lessHighSchool', name: 'Less than secondary'}, 
        {value: 'highSchool', name: 'Secondary diploma'},
        {value: 'oneYearPS', name: 'One-year degree, diploma or certificate from a university, college,' +
        'trade or technical school, or other institute'},
        {value: 'twoYearPS', name: 'Two-year program at a university, college, trade or technical school, or other institute'},
        {value: 'bachelor', name: "Bachelor's degree OR  a three or more year program at a university, college, trade or technical school,or other institute" }, 
        {value: 'bachelorPG', name: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years'},
        {value: 'masterProfBatch', name: "Master's degree, OR professional degree needed to practice in a licensed profession"},
        {value: 'phd', name: 'Doctoral level university degree (Ph.D.)'}
      ],
      firstLanguage: [
        {value: null, name: 'Select...'},
        {value: null, name: 'Less than CLB 4'},
        {value: '4or5', name: 'CLB 4 or 5'},
        {value: '6', name: 'CLB 6'},
        {value: '7', name: 'CLB 7'},
        {value: '8', name: 'CLB 8'},
        {value: '9', name: 'CLB 9'},
        {value: 'more10', name: 'CLB 10 or more'}
      ],
      secondLanguage: [
        {value: null, name: 'Select...'},
        {value: null, name: 'Less than CLB 4'},
        {value: '5or6', name: 'CLB 5 or 6'},
        {value: '7or8', name: 'CLB 7 or 8'},
        {value: 'more9', name: 'CLB 9 or more'}
      ],
      workExperience: [
        {value: null, name: 'Select...'},
        {value: null, name: 'Less than 1 year'},
        {value: '1', name: '1 year'},
        {value: '2', name: '2 years'},
        {value: '3', name: '3 years'},
        {value: '4', name: '4 years'},
        {value: 'more5', name: '5 or more years'}
      ],
      age: 0,
      school: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.goToNextFormPage = this.goToNextFormPage.bind(this)
    this.goToPreviousFormPage = this.goToPreviousFormPage.bind(this)
  }

  componentDidMount() {
    // const node = ReactDOM.findDOMNode(this.refs.crsaform)

    // const addEvent = node.addEventListener || node.attachEvent

    // addEvent('keypress', this.handleKeyPress.bind(this), false)
  }

  componentWillUnmount() {
    // const removeEvent = node.removeEventListener || node.detachEvent

    // removeEvent('keypress', this.handleKeyPress.bind(this))
  }

  handleKeyPress (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
    }
  }

  handleChange (event) {
    let value = event.target.value
    if (value === 'Select...') {
      value = null
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
    } else {
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
  }
  checkEnter (event) {
    if (event.key === 'Enter') {
      this.handleChange(event);
    }
  }
  goToNextFormPage (event) {
    if(this.props.married){
      browserHistory.replace('crs/b')
    } else {
      browserHistory.replace('crs/cd')
    }
    event.preventDefault()
  }
  goToPreviousFormPage (event) {
    browserHistory.replace('')
    event.preventDefault()
  }
  render() {
    var createList = (item, key) => {
      return <option className='crs-option' key={key} value={item.value}>{item.name}</option>
    }
    return (
      <div>
        <div className='crs-a'>
          <form ref='crsaform' className='crs-a-form'>
            <p className='crs-a-question'>How old are you?</p>
            <input
             id='age'
             type='number'
             onBlur={this.handleChange}
             onKeyPress={this.checkEnter.bind(this)} />
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
             <input type="button" onClick={this.goToPreviousFormPage} value="Back to Home Page" />
             <input type="button" onClick={this.goToNextFormPage} value="Next" />
          </form>
        </div>
        <DonutChart />
      </div>
    )
  }
}

module.exports = connector(CrsA)
