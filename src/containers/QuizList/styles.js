import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  text-align: center;
`

export const List = styled.div`
  margin: 0 auto;
  max-width: 400px;
  counter-reset: quizzes;
        
  a {
    display: block;
    margin-bottom: 20px;
    padding: 10px 15px 10px 60px;

    font-size: 1rem;
    text-decoration: none;
    color: #000;
    text-align: left;

    background-color: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 2px 7px rgba(0, 0, 0, .2);
    border: 1px solid #eee;
    transition: box-shadow .1s ease-out;
    
    &:hover { box-shadow: none; }
    
    &:before {
      counter-increment: quizzes;
      content: counter(quizzes);
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      
      font-weight: 500;
      color: #fff;
      border-radius: 5px 0 0 5px;
      background-color: #000;
    }
  }
`

export const Empty = styled.p`
  font-size: 1.2rem;
  text-align: center;
`