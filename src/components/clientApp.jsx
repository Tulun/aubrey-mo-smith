const React = require('react')
const Layout = require('./layout')
const {Router, browserHistory} = require('react-router')
const {store} = require('../reducers/store')
const {Provider} = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const myRoutes = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'dashboard',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('./dashboard'))
        })
      }
    },
    {
      path: 'crs/a',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('./crs_a'))
        })
      }
    },
    {
      path: 'crs/b',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('./crs_b'))
        })
      }
    },
    {
      path: 'crs/c',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('./crs_c'))
        })
      }
    },
    {
      path: 'crs/d',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('./crs_d'))
        })
      }
    }
  ]
}

const App = React.createClass({

  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={myRoutes} />
      </Provider>
    )
  }

})

App.Routes = myRoutes
App.History = browserHistory

module.exports = App
