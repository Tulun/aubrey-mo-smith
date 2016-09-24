const React = require('React')

const Layout = (props) => (
  <div className='app-container'>
  {props.children}
  </div>
)

const {element} = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
