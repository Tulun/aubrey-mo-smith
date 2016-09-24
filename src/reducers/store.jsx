const redux = require('redux')
const reactRedux = require('react-redux')

const rootReducer = redux.combineReducers({
  state: (state = {}) => state
})

const initialState = {
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
