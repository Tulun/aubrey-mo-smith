// This component is for Skill transferability factors. 
// Note: The maximum # of points for this is 100 points.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const DonutChart = require('./donut_chart')
const {connector} = require('../reducers/store')

class CrsCD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      yes_no: [
        {value: null, name: 'Select...'},
        {value: true, name: 'Yes'},
        {value: false, name: 'No'}
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs.crscdform)

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
    let value = event.target.value 
    if (value === 'Select...') {
      value = null;
      switch (event.target.id) {
        case 'cert-qualify':
          this.props.handleCertQualify(value)
          break
        case 'arranged-employ':
          this.props.handleArrangedEmploy(value)
          break
        case 'prov-territory-nom':
          this.props.handleProvTerritoryNom(value)
          break
      }
    } else {
      value = value == 'true'
      switch (event.target.id) {
        case 'cert-qualify':
          this.props.handleCertQualify(value)
          break
        case 'arranged-employ':
          this.props.handleArrangedEmploy(value)
          break
        case 'prov-territory-nom':
          this.props.handleProvTerritoryNom(value)
          break
      }
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
        <div className='crs-c-d'>
          <form ref='crscdform' className='crs-b-form'>
            <p className='crs-cd-question'>Do you have a certifcate of qualification?</p>
            <select id="cert-qualify"
             onChange={this.handleChange}
             className='crs-select'>
              {this.state.yes_no.map(createList)}
            </select>
            <p className='crs-cd-question'>Do you have arranged employment? (positive Labour Market Impact Assessment required)</p>
            <select id="arranged-employ"
            onChange={this.handleChange} className='crs-select'>
              {this.state.yes_no.map(createList)}
            </select>
            <p className='crs-cd-question'>Do you have provincial or territorial nomination?</p>
            <select id="prov-territory-nom"
            onChange={this.handleChange} className='crs-select'>
              {this.state.yes_no.map(createList)}
            </select>
          </form>
        </div>
        <DonutChart />
      </div>
    )
  }
}

module.exports = connector(CrsCD)
