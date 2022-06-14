import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { autoLogin } from './redux/actions/auth'
import './index.css'
import Layout from './hoc/Layout/Layout'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import Logout from './components/Logout/Logout'
import Quiz from './containers/Quiz/Quiz'
import MainPage from './MainPage'
import Kabinet from './containers/Kabinet/Kabinet'


const App = ({ isAuthorized, autoLogin, isLoading }) => {
   useEffect(() => {
      autoLogin()
   }, [autoLogin])

   let routes = (
      <Switch>
         <Route exact path="/" component={Auth} />
         <Route path="/auth" component={Auth} />
         { !isLoading && <Redirect to="/auth" /> }
      </Switch>
   )

   if (isAuthorized) {
      routes = (
         <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/me" component={Kabinet} />
            <Route exact path="/quiz/:id" component={Quiz} />
            <Route path="/quiz-list" component={QuizList} />
            <Route path="/create-quiz" component={QuizCreator} />
            <Route path="/logout" component={Logout} />
  
            <Redirect to="/quiz-list" />
         </Switch>
      )
   }

   return (
      <Layout>
         { routes }
      </Layout>
   )
}

const mapStateToProps = state => ({
   isAuthorized: !!state.auth.token,
   isLoading: state.auth.isLoading
})

export default connect(
   mapStateToProps,
   { autoLogin }
)(App)


