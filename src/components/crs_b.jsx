// This component is for Core / Human capital factors of the calculator. 
// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const DonutChart = require('./donut_chart')
const {connector} = require('../reducers/store')

class CrsA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spouseSchooling: [
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
      spouseFirstLanguage: [
        {value: null, name: 'Select...'},
        {value: 'crs-first-lang-1', name: 'CLB 4 or less'},
        {value: 'crs-first-lang-2', name: 'CLB 5 or 6'},
        {value: 'crs-first-lang-3', name: 'CLB 7 or 8'},
        {value: 'crs-first-lang-4', name: 'CLB 9 or more'}
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs.crsbform)

    const addEvent = node.addEventListener || node.attachEvent

    addEvent('keypress', this.handleKeyPress, false)
  }

  componentWillUnmount() {
    const removeEvent = node.removeEventListener || node.detachEvent

    removeEvent('keypress', this.handleKeyPress)
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
      <div>
        <div className='crs-b'>
          <form ref='crsbform' className='crs-b-form'>
             <p className='crs-b-question'>What's your spouse or common law's level of education?</p>
             <select id="spouse-education"
              onChange={this.handleChange}
              className='crs-select'>
              {this.state.spouseSchooling.map(createList)}
             </select>
             <p className='crs-b-question'>What's your spouse or common law's first official language profiency?</p>
             <select id="spouse-first-lang"
              onChange={this.handleChange} className='crs-select'>
              {this.state.spouseFirstLanguage.map(createList)}
             </select>
          </form>
        </div>
        <DonutChart />
      </div>
    )
  }
}

module.exports = connector(CrsA)
