import React, { memo, useCallback, useState } from 'react'
import FormControl from '../FormControl/FormControl'
import { Box, Container, Divider } from '@mui/material'
import { FieldArray } from 'react-final-form-arrays'


// questionNameProp like questions[0]
function RadioGroup({ questionName: questionNameProp, mutators }) {

   const questionName = `${ questionNameProp }.question`
   const correctAnswerName = `${ questionNameProp }.correctAnswer`
   const choicesName = questionNameProp + '.choices'

   const handleAddNewField = useCallback(() => {
      mutators.push(choicesName, undefined)
   }, [mutators])

   return (
      <Box key={ questionName } sx={ { display: 'flex', flexDirection: 'column', mb: 3 } }>
         <FormControl
            label="Назва запитання"
            type="text"
            name={ questionName }
            defaultValue=""
            variant="outlined"
         />

         <FieldArray name={ choicesName }>
            { ({ fields }) =>
               <>
                  <FormControl
                     label="Правильна відповідь"
                     name={ correctAnswerName }
                     defaultValue=""
                     variant="select"
                     sx={ { mb: 2, mt: 2 } }
                     items={ fields.value?.map(value => ({ value, label: value })) }
                  />
                  { fields.map((name, index) => (
                     <Box sx={ { display: 'flex', alignItems: 'center' } }>
                        <FormControl
                           key={ name }
                           label={ 'Відповідь ' + (index + 1) }
                           name={ name }
                           boxSx={ { flexGrow: 1 } }
                        />
                        <span onClick={ () => fields.remove(index) }>❌</span>
                     </Box>
                  )) }
               </>
            }
         </FieldArray>

         <button onClick={ handleAddNewField }>
            Добавити поле
         </button>

         <Divider sx={ { mb: 2 } }/>
      </Box>
   )
}

export default memo(RadioGroup)