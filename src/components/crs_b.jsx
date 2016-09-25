// This component is for Spousal factors of the calculator. 
// Note: The maximum # of points for this (A) and spousal (B) is 500 points.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const DonutChart = require('./donut_chart')
const {connector} = require('../reducers/store')

class CrsB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spouseSchooling: [
        {value: null, name: 'Select...'},
        {value: null, name: 'Less than secondary'},
        {value: 'highSchool', name: 'Secondary School (high school graduation)'},
        {value: 'oneYearPS', name: 'One-year program at a university, college, trade or technical school, or other institute '},
        {value: 'twoYearPS', name: 'Two-year program at a university, college, trade or technical school, or other institute'},
        {value: 'bachelor', name: "Bachelor's degree OR a three or more year program at a university, college, trade or technical school,or other institute" }, 
        {value: 'bachelorPG', name: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years'},
        {value: 'masterProfBatch', name: "Master's degree, OR professional degree needed to practice in a licensed profession"},
        {value: 'phd', name: 'Doctoral level university degree (Ph.D.)'}
      ],
      spouseFirstLanguage: [
        {value: null, name: 'Select...'},
        {value: null, name: 'CLB 4 or less'},
        {value: '5or6', name: 'CLB 5 or 6'},
        {value: 'CLB-7-or-', name: 'CLB 7 or 8'},
        {value: 'CLB-9-or-more', name: 'CLB 9 or more'}
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
      case 'spouse-education':
        this.props.handleSpouseEducation(value)
        break
      case 'spouse-first-lang':
        this.props.handleSpouseFirstLang(value)
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

module.exports = connector(CrsB)
