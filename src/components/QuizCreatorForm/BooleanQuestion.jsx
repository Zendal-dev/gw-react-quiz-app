import React, { memo } from 'react'
import FormControl from '../FormControl/FormControl'
import { Radios } from 'mui-rff'

function BooleanQuestion({ questionName: questionNameProp }) {

   const questionName = questionNameProp + '.question'
   const correctAnswer = questionNameProp + '.correctAnswer'

   return (
      <>
         <FormControl
            label="Твердження"
            type="text"
            name={ questionName }
            defaultValue=""
            variant="outlined"
         />

         <Radios
            label="Тверження правдиве?"
            name={ correctAnswer }
            data={ [
               { label: 'Правильно', value: 'true' },
               { label: 'Не правильно', value: 'false' }
            ] }
         />
      </>
   )
}

export default memo(BooleanQuestion)