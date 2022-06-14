import {
   FETCH_QUIZ_ERROR, FETCH_QUIZ_START,
   FETCH_QUIZ_SUCCESS,
   FINISH_QUIZ,
   NEXT_QUESTION,
   REPEAT_QUIZ,
   RESET_QUIZ, SET_SURVEY_JSON,
} from '../actionTypes/quiz'

import { apiQuiz } from '../../api/api'

const fetchQuizStart = () => ({ type: FETCH_QUIZ_START })

const fetchQuizSuccess = quiz => ({ type: FETCH_QUIZ_SUCCESS, payload: quiz })

const fetchQuizError = error => ({ type: FETCH_QUIZ_ERROR, payload: error })

export const repeatQuiz = () => ({ type: REPEAT_QUIZ })

export const resetQuiz = () => ({ type: RESET_QUIZ })

export const setSurveyJson = surveyJson => ({ type: SET_SURVEY_JSON, payload: surveyJson })

export const nextQuestion = answerId => (dispatch, getState) => {
   const state = getState().quiz

   if (state.currentQuestion + 1 === state.quiz.questions.length) {
      dispatch({ type: FINISH_QUIZ, payload: answerId })
   } else {
      dispatch({ type: NEXT_QUESTION, payload: answerId })
   }
}

export const fetchQuizById = id => async dispatch => {
   dispatch(fetchQuizStart())
   try {
      const quiz = await apiQuiz.fetchQuiz(id)
      dispatch(fetchQuizSuccess(quiz))
   } catch (e) {
      dispatch(fetchQuizError(e))
   }
}

export const createQuiz = quiz => async () => {
   try {
      await apiQuiz.setQuiz(quiz)
   } catch (e) {
      console.log(e)
   }
}
