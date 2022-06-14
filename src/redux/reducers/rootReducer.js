import { combineReducers } from 'redux'
import quizReducer from './quiz'
import quizListReducer from './quizList'
import authReducer from './auth'

export const rootReducer = combineReducers({
   quiz: quizReducer,
   quizList: quizListReducer,
   auth: authReducer
})