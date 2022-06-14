const startedSurveyConfig = {
   title: '',
   locale: "ua",
   showProgressBar: "off",
   showTimerPanel: "top",
   completedHtml: "<h4>Ви відповіли правильно на <b>{correctAnswers}</b> із <b>{questionCount}</b> запитань.</h4>",
   pages: [{
      elements: []
   }]
}

export default function createSurveyJsonFromFromValues(values) {

   const surveyConfig = { ...startedSurveyConfig }

   surveyConfig.title = values.quizName
   surveyConfig.maxTimeToFinish = values.timeToFinish

   const questions = values.questions

   const elements = questions.map(value => {

      const result = {
         name: value.question,
         title: value.question,
         type: value.type
      }

      if (value.type === 'radiogroup' || value.type === 'checkbox') {
         result.choices = value.choices.map(choice => ({
            value: choice,
            text: choice
         }))
         result.correctAnswer = value.correctAnswer
      }

      // if (value.type === 'checkbox') {
      //    result.choices = value.choices.map(choice => ({
      //       value: choice,
      //       text: choice
      //    }))
      //    result.correctAnswer = value.correctAnswer
      // }

      if (value.type === 'boolean') {
         delete result.title
         result.label = value.question
         result.correctAnswer = value.correctAnswer
      }

      return result
   })

   surveyConfig.pages[0].elements = elements

   return surveyConfig
}