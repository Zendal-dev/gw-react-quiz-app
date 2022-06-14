import React, { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as Yup from 'yup'
import { Divider, MenuItem, Select, Container, InputLabel, Button, Box, Typography } from '@mui/material'

import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

import FormControl from '../FormControl/FormControl'
import { QuestionType, questionTypes } from '../../constants'
import { v4 as uuidv4 } from 'uuid'
import createDecorator from 'final-form-calculate'
import createSurveyJsonFromFromValues from '../../utils/createSurveyJsonFromFromValues'
import RadioGroup from './RadioGroup'
import QuestionBlock from './QuestionBlock'
import CheckboxGroup from './CheckboxGroup'
import { setSurveyJson } from '../../redux/actions/quiz'
import { useDispatch } from 'react-redux'
import TextQuestion from './TextQuestion'
import BooleanQuestion from './BooleanQuestion'
import { apiQuiz } from '../../api/api'

const validationSchema = Yup.object({
   question: Yup.string().required('Обязательное поле'),
   quizName: Yup.string().required('Обязательное поле'),
   answers: Yup.array()
      .of(
         Yup.object({
            answer: Yup.string().required('Обязательное поле'),
         })
      ),
   correctAnswer: Yup.string().required('Обязательное поле'),
   answerCount: Yup.string().required('Обязательное поле')
})

const defaultInitialValues = {
   quizName: '',
   questionName: '',
   questions: {} // questions names
}

const QuizCreatorForm = ({ createQuiz }) => {

   const dispatch = useDispatch()

   const [isPreviousQuestionsFilled, setIsPreviousQuestionsFilled] = useState(false)
   const [isEditingCreatedQuestion, setIsEditingCreatedQuestion] = useState(false)

   const [editingQuestionsNames, setEditingQuestionsNames] = useState([])

   const [editingQuestionObject, setEditingQuestionObject] = useState(null)

   const [addedQuestions, setAddedQuestions] = useState([])
   const [questionType, setQuestionType] = useState(questionTypes[0])

   const [initialValues, setInitialValues] = useState(defaultInitialValues)

   const handleSubmit = useCallback(values => {
      const copy = { ...values }

      /* To minutes */
      copy.timeToFinish = Number.isInteger(+values.timeToFinish)
         ? values.timeToFinish * 60
         : values.timeToFinish * 100

      const surveyJson = createSurveyJsonFromFromValues(copy)

      dispatch(setSurveyJson(surveyJson))

      apiQuiz.setQuiz(surveyJson)
   }, [])

   const handleQuestionTypeChange = useCallback(event => {
      setQuestionType(event.target.value)
   }, [])

   const handleAddQuestion = useCallback((values, mutators) => {
      if (isEditingCreatedQuestion) {
         console.log('SAVE quiestion', values, initialValues)
         setInitialValues(prev => ({ ...prev, ...values }))
         setIsEditingCreatedQuestion(false)
         // TODO: add alert with text: "Question saved sucessfully"
         setEditingQuestionObject(null)
      } else {
         mutators.push('questions', { type: questionType })
      }
   }, [questionType, addedQuestions, isEditingCreatedQuestion])

   const renderQuestion = useCallback((mutators, questionType, name) => {
      const question = {
         [QuestionType.Text]: <TextQuestion questionName={ name }/>,
         [QuestionType.RadioGroup]: <RadioGroup questionName={ name } mutators={ mutators }/>,
         [QuestionType.Checkbox]: <CheckboxGroup questionName={ name } mutators={ mutators }/>,
         [QuestionType.Boolean]: <BooleanQuestion questionName={ name }/>
      }

      return question[questionType]
   }, [])

   const validate = useCallback(values => {
      const errors = { questions: {} }
      const questions = values.questions

      const editingObjectKey = editingQuestionObject ? Object.keys(editingQuestionObject)[0] : ''
      const editingObjectKeys = editingQuestionObject ? Object.keys(Object.values(editingQuestionObject)[0]) : []

      editingObjectKeys.forEach(editingKey => {
         if (!questions[editingObjectKey][editingKey]) {
            errors.questions = {
               ...errors.questions,
               [editingObjectKey]: {
                  ...errors.questions[editingObjectKey],
                  [editingKey]: 'Failed'
               }
            }
         } else {
            delete errors.questions?.[editingObjectKey]?.[editingKey]
         }
      })

      return errors
   }, [editingQuestionObject])

   return (
      <Form
         onSubmit={ handleSubmit }
         mutators={ {
            ...arrayMutators,
         } }
         render={ ({ handleSubmit, invalid, errors, values, form: { mutators } }) => (
            <form onSubmit={ handleSubmit }>
               <Container maxWidth="xs" sx={ { display: 'flex', flexDirection: 'column' } }>
                  <FormControl
                     type="text"
                     name="quizName"
                     label="Назва тесту"
                     variant="outlined"
                  />

                  <FormControl
                     type="number"
                     name="timeToFinish"
                     label="Час проходження (в хвилинах)"
                     variant="outlined"
                  />

                  <InputLabel htmlFor="question-types">
                     Тип запитання
                  </InputLabel>
                  <Select
                     labelId="question-types"
                     id="question-types"
                     value={ questionType }
                     onChange={ handleQuestionTypeChange }
                  >
                     { questionTypes.map((type, idx) => (
                        <MenuItem key={ idx } value={ type }>
                           { type }
                        </MenuItem>
                     )) }
                  </Select>
                  <Divider sx={ { mt: 2, mb: 2 } }/>

                  { Boolean(addedQuestions.length) && (
                     <>
                        <Typography sx={ { mt: 2 } }>
                           Запитання:
                        </Typography>
                        <Divider sx={ { mt: 2, mb: 2 } }/>
                     </>
                  ) }

                  <FieldArray name="questions">
                     { ({ fields }) =>
                        fields.map((name, index) => {
                           const type = fields.value[index].type

                           return (
                              <QuestionBlock key={ name } questionNumber={ index + 1 }>
                                 { renderQuestion(mutators, type, name) }
                                 <Button
                                    variant="contained"
                                    color="error"
                                    sx={ { mt: 2, mb: 2 } }
                                    onClick={ () => fields.remove(index) }
                                 >
                                    Видалити це запитання
                                 </Button>
                              </QuestionBlock>
                           )
                        }) }
                  </FieldArray>

                  <Box sx={ { display: 'flex', flexDirection: 'column' } }>
                     <Button
                        variant="contained"
                        onClick={ () => handleAddQuestion(values, mutators) }
                        color={ isEditingCreatedQuestion ? 'success' : 'primary' }
                        // disabled={ invalid }
                     >
                        { isEditingCreatedQuestion ? 'Зберегти запитання' : 'Добавити запитання' }
                     </Button>
                     <Button
                        type="submit"
                        sx={ { mt: 2 } }
                        variant="contained"
                        color="success"
                        // disabled={ !isCanCreateQuiz }
                     >
                        Створити тест
                     </Button>
                  </Box>
               </Container>
            </form>
         ) }
      />
   )
}

export default QuizCreatorForm


