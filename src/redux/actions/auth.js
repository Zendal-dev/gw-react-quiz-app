import { apiAuth } from '../../api/api'
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actionTypes/auth'
import { clearQuizzes } from './quizList'

export const auth = (authData, isLogin) => async dispatch => {
   try {
      const { email, password } = authData
      const response = isLogin
         ? await apiAuth.signIn(email, password)
         : await apiAuth.signUp(email, password)

      const { idToken, localId, expiresIn } = response.data
      const expirationDate = Date.now() + (expiresIn * 1000)

      localStorage.setItem('token', idToken)
      localStorage.setItem('userId', localId)
      localStorage.setItem('expirationDate', expirationDate.toString())

      dispatch(loginSuccess(idToken))
      dispatch(autoLogout(expiresIn * 1000))
   } catch (error) {
      dispatch(loginError(error))
   }
}

const loginSuccess = token => ({ type: LOGIN_SUCCESS, payload: token })
const loginError = error => ({ type: LOGIN_ERROR, payload: error })

export const logout = () => dispatch => {
   localStorage.removeItem('token')
   localStorage.removeItem('userId')
   localStorage.removeItem('expirationDate')

   dispatch(clearQuizzes())
   dispatch({ type: LOGOUT })
}

const autoLogout = time => dispatch => {
   setTimeout(() => {
      dispatch(logout())
   }, time)
}

export const autoLogin = () => dispatch => {
   const token = localStorage.getItem('token')

   if (!token) {
      dispatch(logout())
   } else {

      const expirationDate = localStorage.getItem('expirationDate')

      if (expirationDate < Date.now()) {
         dispatch(logout())
      } else {
         dispatch(loginSuccess(token))
         dispatch(autoLogout(3600 * 1000))
      }
   }
}
