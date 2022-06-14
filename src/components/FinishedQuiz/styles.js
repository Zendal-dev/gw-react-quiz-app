import styled from 'styled-components'

export const QuestionWrapper = styled.div`
  padding: 15px;
  max-width: 400px;
  margin: 0 auto 15px;
  border: 1px solid #fff;
  border-radius: 10px;
`

export const Question = styled.div`
  margin-bottom: 15px;
  padding-bottom: 5px;
  font-size: 1.4rem;
  border-bottom: 1px solid #eee;
`

export const Answer = styled.div`
  margin-bottom: 5px;
  padding: 8px 10px 10px 10px;
   
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 10px;  
  
  background-color: ${ ({ isReallyCorrect, state }) => {
     if (isReallyCorrect || (state === 'success' && isReallyCorrect)) return '#28A745'
     if (state === 'wrong') return '#DC3545'
  }};
  
  &:last-child {
    margin-bottom: 0;
  }
`