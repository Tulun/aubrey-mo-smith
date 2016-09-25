const redux = require('redux')
const reactRedux = require('react-redux')

const HANDLE_AGE = 'handleAge'
const HANDLE_EDUCATION = 'handleEducation'
const HANDLE_FIRST_LANG = 'handleFirstLang'
const HANDLE_SECOND_LANG = 'handleSecondLang'
const HANDLE_EXPERIENCE = 'handleExperience'


const initialState = {
  age: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_AGE:
      return reduceChange(state, action, {age: action.value})
    case HANDLE_EDUCATION:
      return reduceChange(state, action, {education: action.value})
    case HANDLE_FIRST_LANG:
      return reduceChange(state, action, {firstLang: action.value})
    case HANDLE_SECOND_LANG:
      return reduceChange(state, action, {secondLang: action.value})
    case HANDLE_EXPERIENCE:
      return reduceChange(state, action, {experience: action.value})
    default:
      return state
  }
}

const reduceChange = (state, action, type) => {
  const newState = {}
  Object.assign(newState, state, type)
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    age: state.age,
    education: state.education,
    firstLangProf: state.firstLang,
    secLangProf: state.secondLang,
    experience: state.experience
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAge (age) {
      dispatch({type: HANDLE_AGE, value: age})
    },
    handleEducation (education) {
      dispatch({type: HANDLE_EDUCATION, value: education})
    },
    handleFirstLang (firstLang) {
      dispatch({type: HANDLE_FIRST_LANG, value: firstLang})
    },
    handleSecondLang (secondLang) {
      dispatch({type: HANDLE_SECOND_LANG, value: secondLang})
    },
    handleExperience (experience) {
      dispatch({type: HANDLE_EXPERIENCE, value: experience})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
