import React, { memo } from 'react'
import FormControl from '../FormControl/FormControl'

function TextQuestion({ questionName: questionNameProp,  }) {

   const questionName = questionNameProp + '.question'
   const controlPhraseName = questionNameProp + '.controlPhrase'

   return (
      <>
         <FormControl
            label="Назва запитання"
            type="text"
            name={ questionName }
            defaultValue=""
            variant="outlined"
         />
         <FormControl
            label="Контрольна фраза"
            name={ controlPhraseName }
            defaultValue=""
            type="text"
            sx={ { mb: 2, mt: 2 } }
         />
      </>
   )
}

export default memo(TextQuestion)