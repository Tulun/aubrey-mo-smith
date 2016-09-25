const React = require('react')
const {browserHistory} = require('react-router')
const { Link } = require('react-router')
const {connector} = require('../reducers/store')
const DonutChart = require('./donut_chart')

class Landing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      married: [
        {value: null, name: 'Select...'},
        {value: true, name: 'Married or Common Law'}, 
        {value: false, name: 'Single'}
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    let value = event.target.value
    if (value === 'Select...') {
      value = null
      switch (event.target.id) {
        case 'married':
          this.props.handleMaritalStatus(value)
          break
      } 
    } else {
      value = value == 'true'
      switch (event.target.id) {
        case 'married':
          this.props.handleMaritalStatus(value)
          break
      }
    }
  }
  render () {
    var createList = (item, key) => {
      return <option className='crs-option' key={key} value={item.value}>{item.name}</option>
    }
    return (
      <div>
        <p className='pre-question'> Are you married or common law, or single?</p>
        <select
         id='married' 
         className='pre-question-select'
         onChange={this.handleChange}>
          {this.state.married.map(createList)}
        </select>
      </div>
    )
  }
}

module.exports = connector(Landing)
