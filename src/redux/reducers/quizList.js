import { CLEAR_QUIZZES, FETCH_QUIZZES_ERROR, FETCH_QUIZZES_START, FETCH_QUIZZES_SUCCESS } from '../actionTypes/quizList'

const initialState = {
   isLoading: false,
   error: null,
   quizzes: []
}

const quizListReducer = (state = initialState, action) => {

   switch (action.type) {
      case FETCH_QUIZZES_START :
         return { ...state, isLoading: true }

      case FETCH_QUIZZES_SUCCESS :
         return {
            ...state,
            isLoading: false,
            quizzes: action.payload
         }

      case FETCH_QUIZZES_ERROR :
         console.log(action.payload)
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }

      case CLEAR_QUIZZES :
         return { ...state, quizzes: [] }

      default :
         return state
   }
}

export default quizListReducer