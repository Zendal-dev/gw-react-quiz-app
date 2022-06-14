import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  position: fixed;
  left: -250px;
  top: 0;
  z-index: 1100;

  padding: 30px;
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  transition: transform .4s ease; 
  
  a {
    margin-bottom: 15px;
    font-size: 1.3rem;
    text-decoration: none;
    color: inherit;
    
    &.active {
      color: #f00;
    }
  }
  
  ${({ isOpen }) => isOpen && css`
    transform: translateX(250px);
  `}
`