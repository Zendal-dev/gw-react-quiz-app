import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
`

export const List = styled.ul`
  cursor: pointer;

  li {
    margin-bottom: 20px;
    padding: 10px 10px 10px 50px;
    
    background-color: #fff;
    border-radius: 5px;
    
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color:#000;
    text-align: left;

    box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
    
    overflow: hidden;
    position: relative;
    transition: box-shadow .1s ease-out, background-color .1s ease-out;
    counter-increment: answer;

    &:hover { 
      box-shadow: none;
      background-color: #eee;
    }
    
    &::before {
      content: counter(answer);
      position: absolute;
      top: 0;
      left: 0;
      width: 35px;
      height: 100%;
      
      display: inline-flex;
      justify-content: center;
      align-items: center;

      font-size: 1rem;
      font-weight: 500;
      background-color: #000;
      color: #fff;
    }
  }
`

export const Counter = styled.div`
  margin-bottom: 10px;
  text-align: right;
`

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 400;
`