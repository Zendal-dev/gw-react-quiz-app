import * as S from './styles'

const AnswerList = ({ question, answers, questionsCount, currentQuestion, onAnswerClick }) => {

   const answerClickHandler = answerId => {
      onAnswerClick(answerId)
   }

   const answersList = answers.map(answer => (
      <li
         key={ answer.id }
         onClick={ () => answerClickHandler(answer.id) }
      >
         { answer.answer }
      </li>
   ))

   return (
      <S.Wrapper>
         <S.Title>{ question }</S.Title>

         <S.Counter>
            { currentQuestion }/{ questionsCount }
         </S.Counter>

         <S.List>
            { answersList }
         </S.List>
      </S.Wrapper>
   )
}

export default AnswerList