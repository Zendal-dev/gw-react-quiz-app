import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actionTypes/auth'

const initialState = {
   token: null,
   isLoading: true,
   error: null
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case LOGIN_SUCCESS :
         return {
            ...state,
            token: action.payload,
            isLoading: false
         }

      case LOGIN_ERROR :
         return { ...state, error: action.payload }

      case LOGOUT :
         return {
            ...state,
            token: null,
            isLoading: false
         }

      default :
         return state
   }
}

export default authReducer