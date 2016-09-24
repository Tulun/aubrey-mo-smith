const redux = require('redux')
const reactRedux = require('react-redux')

const HANDLE_CHANGE = 'handleChange'

const initialState = {
  age: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return reduceAge(state, action)
    default:
      return state
  }
}

const reduceAge = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {age: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange (age) {
      dispatch({type: HANDLE_CHANGE, value: age})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
