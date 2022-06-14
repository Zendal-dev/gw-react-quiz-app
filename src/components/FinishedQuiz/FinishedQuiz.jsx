import { Fragment } from 'react'
import { StyledButton } from '../common/styles/Button'
import * as S from './styles'

const FinishedQuiz = ({ results, questions, repeatQuiz, history }) => {

   const list = questions.map((question, index) => {
      const answersList = question.answers.map(answer => {
         const isAnswerSelectedUser = results[index] === answer.id
         const state = isAnswerSelectedUser && (results[index] === question.correctAnswerId)
            ? 'success' : 'wrong'

         return (
            <S.Answer
               key={ answer.id }
               state={ isAnswerSelectedUser && state }
               isReallyCorrect={ question.correctAnswerId === answer.id }
            >
               { answer.answer }
            </S.Answer>
         )
      })

      return (
         <S.QuestionWrapper key={ index }>
            <S.Question>{ question.question }</S.Question>
            { answersList }
         </S.QuestionWrapper>
      )
   })

   return (
      <Fragment>
         { list }
         <StyledButton onClick={ repeatQuiz } styleType="primary">Повторить</StyledButton>
         <StyledButton
            styleType="success"
            onClick={ () => history.push('/quiz-list') }
         >
            Перейти в список тестов
         </StyledButton>
      </Fragment>
   )
}

export default FinishedQuiz