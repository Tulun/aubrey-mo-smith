const React = require('react')
const {browserHistory} = require('react-router')
const { Link } = require('react-router')
const {connector} = require('../reducers/store')

class Landing extends React.Component {
  render () {
    return (
      <h1 className='title'>Hello World</h1>
    )
  }
}

module.exports = connector(Landing)
