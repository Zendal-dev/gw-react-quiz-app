import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StylesManager, Model, surveyLocalization } from 'survey-core'
import { Survey } from 'survey-react-ui'
import { useHistory, useParams } from 'react-router'
import { Box, Typography, Button } from '@mui/material'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import 'survey-core/defaultV2.css'

import Modal from '../../components/Modal/Modal'
import { fetchQuizById } from '../../redux/actions/quiz'
import closeFullscreen from '../../utils/closeFullscreen'
import openFullscreen from '../../utils/openFullscreen'

const myCustomSurveyStrings = {
   timerInfoText: 'Час',
   timerMin: 'хв',
   timerSec: 'сек',
   timerLimitSurvey: '{0} з {1}.',
   timerSpentPage: 'Пройшло',
   completeText: 'Завершити'
}

StylesManager.applyTheme('defaultV2')

surveyLocalization.locales['ua'] = myCustomSurveyStrings

const MAX_TAB_SWITCHING_COUNT = 3

function Quiz() {

   const history = useHistory()

   const params = useParams()

   const dispatch = useDispatch()

   const handle = useFullScreenHandle()

   const surveyJson = useSelector(state => state.quiz.quiz)

   const survey = new Model(surveyJson)

   const [tabSwitchingCount, setTabSwitchingCount] = useState(0)

   const isVisibleFirstWarningModal = tabSwitchingCount === 1

   useEffect(() => {
      dispatch(fetchQuizById(params.id))
   }, [])

   const handleDocumentVisibilityChange = useCallback(event => {
      if (document.visibilityState === 'visible') {
         console.log('tab is active')
      } else {
         console.log('tab is inactive')
         setTabSwitchingCount(prev => ++prev)
      }
   }, [document])

   const handleFullscreenChange = useCallback(event => {
      /* Close fullscreen */
      if (!document.fullscreenElement) {
         setTabSwitchingCount(prev => ++prev)
      }
   }, [document])

   useEffect(() => {
      if (typeof window !== 'undefined') {
         document.addEventListener('visibilitychange', handleDocumentVisibilityChange);

         ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'msfullscreenchange'].forEach(
            eventType => document.addEventListener(eventType, handleFullscreenChange)
         )
      }

      return () => document.removeEventListener('visibilitychange', handleDocumentVisibilityChange)
   }, [])

   const handleExcessNumberOfPeeps = useCallback(() => {
      survey.clear(true, true)
      survey.stopTimer()

      setTabSwitchingCount(0)
      closeFullscreen()
   }, [survey])

   const handleExitQuiz = useCallback(() => {
      closeFullscreen()
      history.push('/quiz-list')
   }, [])

   const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data)
      console.log('results', results)
   }, [])

   survey.onComplete.add(alertResults)
   survey.startTimer()
   survey.locale = 'ua'

   return (
      <div>
         <Modal
            open={ isVisibleFirstWarningModal }
            caption="Ей, козаче. Я все бачу"
            description="Ще раз так зробиш - начувайся."
            onClose={ openFullscreen }
         />

         <Modal
            open={ tabSwitchingCount === (MAX_TAB_SWITCHING_COUNT - 1) }
            caption="У вас залишилося одне попередження"
            onClose={ openFullscreen }
         />

         <Modal
            open={ tabSwitchingCount === MAX_TAB_SWITCHING_COUNT }
            caption="Тест завершено"
            onClose={ handleExcessNumberOfPeeps }
         />

         <Box sx={ {
            padding: '36px',
            backgroundColor: '#19b394',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 2
         } }>
            <Button variant="contained" color="secondary" onClick={ handleExitQuiz }>
               Повернутися до списку тестів
            </Button>

            <Typography variant="h6" align="right" color="white">
               Кількість попереджень: { MAX_TAB_SWITCHING_COUNT - tabSwitchingCount }
            </Typography>
         </Box>

         <Survey model={ survey }/>
      </div>
   )
}

export default memo(Quiz)