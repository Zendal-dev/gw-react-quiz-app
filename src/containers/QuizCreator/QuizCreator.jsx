import QuizCreatorForm from '../../components/QuizCreatorForm/QuizCreatorForm'
import { connect } from 'react-redux'
import { createQuiz } from '../../redux/actions/quiz'
import { Header } from '../../components/common/styles/Header'
import * as S from './styles'

const QuizCreator = ({ createQuiz }) => {
   return (
      <S.Wrapper>
         <Header>Створення тесту</Header>
         <QuizCreatorForm createQuiz={ createQuiz } />
      </S.Wrapper>
   )
}

export default connect(
   null,
   { createQuiz }
)(QuizCreator)