import {
   FETCH_QUIZ_ERROR,
   FETCH_QUIZ_START,
   FETCH_QUIZ_SUCCESS,
   FINISH_QUIZ,
   NEXT_QUESTION,
   REPEAT_QUIZ, RESET_QUIZ, SET_SURVEY_JSON
} from '../actionTypes/quiz'

const initialState = {
   id: 1,
   isFinished: false,
   currentQuestion: 0,
   results: [],
   quiz: {},
   isLoading: false,
   error: null,
   surveyJson: {
      "title": "ЗНО",
      "locale": "ua",
      "showProgressBar": "bottom",
      "showTimerPanel": "top",
      "maxTimeToFinish": 60 * 15,
      "completedHtml": "<h4>Ви відповіли правильно на <b>{correctAnswers}</b> із <b>{questionCount}</b> запитань.</h4>",
      "pages": [
         {
            "elements": [
               {
                  "name": "Запитання",
                  "title": "Запитання",
                  "type": "radiogroup",
                  "choices": [
                     {
                        "value": "1",
                        "text": "1"
                     },
                     {
                        "value": "2",
                        "text": "2"
                     }
                  ],
                  "correctAnswer": "1"
               },
               {
                  "name": "Запитання2",
                  "title": "Запитання2",
                  "type": "radiogroup",
                  "choices": [
                     {
                        "value": "1111",
                        "text": "1111"
                     },
                     {
                        "value": "222",
                        "text": "222"
                     }
                  ],
                  "correctAnswer": "1"
               }
            ]
         }
      ]
   }
}

const quizReducer = (state = initialState, action) => {
   switch (action.type) {

      case NEXT_QUESTION :
         return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            results: [ ...state.results, action.payload ]
         }

      case FINISH_QUIZ :
         return {
            ...state,
            isFinished: true,
            results: [ ...state.results, action.payload ]
         }

      case REPEAT_QUIZ :
         return {
            ...state,
            results: [],
            currentQuestion: 0,
            isFinished: false
         }

      case RESET_QUIZ :
         return {
            ...state,
            results: [],
            currentQuestion: 0,
            isFinished: false,
            quiz: {
               quizName: '',
               questions: []
            }
         }

      case FETCH_QUIZ_START :
         return { ...state, isLoading: true }

      case FETCH_QUIZ_SUCCESS :
         return {
            ...state,
            isLoading: false,
            quiz: action.payload
         }

      case FETCH_QUIZ_ERROR :
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }

      case SET_SURVEY_JSON:
         return {
            ...state,
            surveyJson: action.payload
         }

      default :
         return state
   }
}

export default quizReducer