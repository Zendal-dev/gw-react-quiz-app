import React, { Fragment } from 'react'
import { StyledErrorMessage } from '../../common/styles/StyledErrorMessage'
import { StyledField } from '../../common/styles/StyledField'

const Input = ({
   type = 'text',
   placeholder = 'Название теста',
   name, formik
}) => (
   <Fragment>
      <StyledField
         type={ type }
         name={ name }
         placeholder={ placeholder }
         $isInvalid={ formik.errors[name] && formik.touched[name] }
      />
      <StyledErrorMessage component="div" name={ name } />
   </Fragment>
)

export default Input