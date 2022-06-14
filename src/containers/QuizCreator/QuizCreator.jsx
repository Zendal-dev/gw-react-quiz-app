import QuizCreatorForm from '../../components/QuizCreatorForm/QuizCreatorForm'
import { connect } from 'react-redux'
import { createQuiz } from '../../redux/actions/quiz'
import { Header } from '../../components/common/styles/Header'
import * as S from './styles'
import image from "../../images/CreateTest.png"

const QuizCreator = ({ createQuiz }) => {
   return (
      <S.Wrapper>
         <Header><img src={image}></img></Header>
         <QuizCreatorForm createQuiz={ createQuiz } />
      </S.Wrapper>
   )
}

export default connect(
   null,
   { createQuiz }
)(QuizCreator)