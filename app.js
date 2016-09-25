require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const Store = require('./src/reducers/store.jsx')
const store = Store.store
const _ = require('lodash')
const fs = require('fs')
const port = 8080
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const ClientApp = require('./src/components/clientApp.jsx')
const Routes = ClientApp.Routes

const app = express()

app.use('/public', express.static('./public'))

app.use( (req,res) => {
  match({routes: Routes, location: req}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log(store)
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store: store}, 
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({body}))
    } else {
      res.status(404).send('Not found')
    }
  })
})

console.log('listening on port ' + port)
app.listen(port)
