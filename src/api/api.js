import * as axios from 'axios'

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

const instance = axios.create({
   baseURL: 'https://react-quiz-app-8a8af-default-rtdb.firebaseio.com/'
})

export const apiQuiz = {
   fetchQuizzes: async () => {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const response = await instance.get(`quizzes/${userId}/.json?auth=${token}&access_token=${token}`)
      return response.data
   },

   fetchQuiz: async id => {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const response = await instance.get(`quizzes/${userId}/${id}/.json?auth=${token}`)
      return response.data
   },

   setQuiz: async quiz => {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const response = await instance.post(`quizzes/${userId}/.json?auth=${token}`, quiz)
      return response.data.name
   },
}

export const apiAuth = {
   signIn: async (email, password) => {
      return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
         email, password,
         returnSecureToken: true
      })
   },
   signUp: async (email, password) => {
      return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        email, password,
        returnSecureToken: true
      })
   }
}
