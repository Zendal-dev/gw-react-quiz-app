import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const StyledButton = styled.button(({ styleType }) => {
   let bgColor = '#6C757D'

   if (styleType === 'primary') bgColor = '#007BFF'
   else if (styleType === 'success') bgColor = '#28A745'
   else if (styleType === 'danger') bgColor = '#DC3545'

   return css`
     margin-right: 10px;
     padding: 10px 15px;

     font-family: inherit;
     font-size: 1rem;
     font-weight: 500;
     color: #fff;

     border-radius: 10px;
     border: 2px solid transparent;
     background-color: ${bgColor};
     transition: background-color .25s linear;
     
     &:disabled {
       background-color: ${darken(.2, bgColor)};
     }
     
     &:focus {
       border-color: #000;
       outline: none;
     }

     &:not(:disabled) {
       cursor: pointer;
       
       &:hover {
         background-color: ${ darken(.1, bgColor) };
       }
     }
   `
})