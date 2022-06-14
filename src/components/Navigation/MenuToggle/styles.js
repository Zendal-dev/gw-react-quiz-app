import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  position: fixed;
  top: 35px;
  left: 45px;
  z-index: 1200;
  
  cursor:pointer;
  transition: transform .3s ease;
  
  svg {
    font-size: 2rem;
    color: #fff;
  }
  
  ${({ isOpen }) => isOpen && css`
    transform: translateX(250px)
  `}
`

