import { combineReducers } from 'redux'
import homeReducer from './app/home/duck/index'

const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer
