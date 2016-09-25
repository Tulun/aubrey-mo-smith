const redux = require('redux')
const reactRedux = require('react-redux')
const data = require('../../public/data.json')

// These are constants actions for the cases in props to be passed to Redux
const HANDLE_AGE = 'handleAge'
const HANDLE_EDUCATION = 'handleEducation'
const HANDLE_FIRST_LANG = 'handleFirstLang'
const HANDLE_SECOND_LANG = 'handleSecondLang'
const HANDLE_EXPERIENCE = 'handleExperience'
const HANDLE_MARITAL_STATUS = 'handleMaritalStatus'
const HANDLE_SPOUSE_EDUCATION = 'handleSpouseEducation'
const HANDLE_SPOUSE_FIRST_LANG = 'handleSpouseFirstLang'
const HANDLE_CERT_QUALIFY = 'handleCertQualify'
const HANDLE_ARRANGED_EMPLOY = 'handleArrangedEmploy'
const HANDLE_PROV_TERRITORY_NOM = 'handleProvTerritoryNom'

const initialState = {
  status: '',
  age: 0,
  ageScore: 0
}

const calculateAgeScore = (state, value) => {
  let ageCriteria, ageScore
  if (state.status) {
    ageCriteria = data.ageCriteria.single
  } else { 
    ageCriteria = data.ageCriteria.married
  }
  if (value >= '20' && value <= '29') {
    ageScore = ageCriteria['20to29'] 
  } else if (value === '19' || value === '30') {
    ageScore = ageCriteria['19or30'] 
  } else if (value === '18' || value === '31') {
    ageScore = ageCriteria['18or31']
  } else {
    ageScore = ageCriteria[value]
  }

  if (!ageScore) {
    ageScore = 0
  }
  return ageScore
}

const rootReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case HANDLE_AGE:
      const ageScore = calculateAgeScore(state, action.value)
      return reduceChange(state, action, {age: action.value, ageScore: ageScore})
    case HANDLE_EDUCATION:
      return reduceChange(state, action, {education: action.value})
    case HANDLE_FIRST_LANG:
      return reduceChange(state, action, {firstLang: action.value})
    case HANDLE_SECOND_LANG:
      return reduceChange(state, action, {secondLang: action.value})
    case HANDLE_EXPERIENCE:
      return reduceChange(state, action, {experience: action.value})
    case HANDLE_MARITAL_STATUS:
      return reduceChange(state, action, {married: action.value})
    case HANDLE_SPOUSE_EDUCATION:
      return reduceChange(state, action, {spouseEducation: action.value})
    case HANDLE_SPOUSE_FIRST_LANG:
      return reduceChange(state, action, {spouseFirstLang: action.value})
    case HANDLE_CERT_QUALIFY:
      return reduceChange(state, action, {certQualify: action.value})
    case HANDLE_ARRANGED_EMPLOY:
      return reduceChange(state, action, {arrangedEmploy: action.value})
    case HANDLE_PROV_TERRITORY_NOM:
      return reduceChange(state, action, {provTerritoryNom: action.value})
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
    experience: state.experience,
    married: state.married,
    spouseEducation: state.spouseEducation,
    spouseFirstLang: state.spouseFirstLang,
    certQualify: state.certQualify,
    arrangedEmploy: state.arrangedEmploy,
    nominated: state.nominated
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
    },
    handleMaritalStatus (married) {
      dispatch({type: HANDLE_MARITAL_STATUS, value: married})
    },
    handleSpouseEducation (spouseEducation) {
      dispatch({type: HANDLE_SPOUSE_EDUCATION, value: spouseEducation})
    },
    handleSpouseFirstLang (spouseFirstLang) {
      dispatch({type: HANDLE_SPOUSE_FIRST_LANG, value: spouseFirstLang})
    },
    handleCertQualify (qualified) {
      dispatch({type: HANDLE_CERT_QUALIFY, value: qualified})
    },
    handleArrangedEmploy (arrangedEmploy) {
      dispatch({type: HANDLE_ARRANGED_EMPLOY, value: arrangedEmploy})
    },
    handleProvTerritoryNom (nominated) {
      dispatch({type: HANDLE_PROV_TERRITORY_NOM, value: nominated})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
