const React = require('react')
const {browserHistory} = require('react-router')
const { Link } = require('react-router')
const {connector} = require('../reducers/store')
const CrsA = require('./crs_a')
const DonutChart = require('./donut_chart')

class Landing extends React.Component {
  render () {
    return (
      <div>
        <h1 className='title'>Hello World</h1>
        <CrsA />
        <DonutChart />
      </div>
    )
  }
}

module.exports = connector(Landing)
