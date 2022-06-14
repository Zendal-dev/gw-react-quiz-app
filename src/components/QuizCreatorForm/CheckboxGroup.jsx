import React, { memo, useCallback } from 'react'
import FormControl from '../FormControl/FormControl'
import { Box, Divider } from '@mui/material'
import { FieldArray } from 'react-final-form-arrays'


// questionNameProp like questions[0]
function CheckboxGroup({ questionName: questionNameProp, mutators }) {

   const questionName = `${ questionNameProp }.question`
   const correctAnswersName = `${ questionNameProp }.correctAnswer`
   const choicesName = questionNameProp + '.choices'

   const handleAddNewField = useCallback(() => {
      mutators.push(choicesName, undefined)
   }, [mutators, choicesName])

   return (
      <Box key={ questionName } sx={ { display: 'flex', flexDirection: 'column', mb: 3 } }>
         <FormControl
            label="Назва запитання"
            type="text"
            name={ questionName }
            defaultValue=""
         />

         <FieldArray name={ choicesName }>
            { ({ fields }) => (
               <>
                  <FormControl
                     label="Правильні відповіді"
                     name={ correctAnswersName }
                     variant="multiselect"
                     sx={ { mb: 2, mt: 2 } }
                     items={fields.value?.map(value => ({ value, label: value }))}
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
            ) }
         </FieldArray>

         <button onClick={ handleAddNewField }>
            Добавити поле
         </button>

         <Divider sx={ { mb: 2 } }/>
      </Box>
   )
}

export default memo(CheckboxGroup)