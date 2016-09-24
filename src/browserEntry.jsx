const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/clientApp')
const { match } = require('react-router')

match({history: App.History, routes: App.routes}, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('Browser entry error', error)
  }
  ReactDOM.render(<App />, document.getElementById('app'))
})
