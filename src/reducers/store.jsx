const redux = require('redux')
const reactRedux = require('react-redux')

const HANDLE_AGE = 'handleAge'
const HANDLE_EDUCATION = 'handleEducation'
const HANDLE_FIRST_LANG = 'handleFirstLang'
const HANDLE_SECOND_LANG = 'handleSecondLang'
const HANDLE_EXPERIENCE = 'handleExperience'


const initialState = {
  status: '',
  age: 0,
  ageScore: 0
}

const rootReducer = (state = initialState, action) => {
  let type = {}
  switch (action.type) {
    case HANDLE_AGE:
      if (action.value > 20) {
        const ageScore = 100
        type = {age: action.value, ageScore: ageScore}
      } else {
        const ageScore = 50
        type = {age: action.value, ageScore: ageScore}
      }
      return reduceChange(state, action, type)
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
    status: state.status,
    age: state.age,
    ageScore: state.ageScore,
    education: state.education,
    firstLang: state.firstLang,
    secLang: state.secondLang,
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
