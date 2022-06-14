import React, { memo } from 'react'
import { Box, Typography } from '@mui/material'

function QuestionBlock({ questionNumber, children }) {
   return (
      <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid gray', borderRadius: '10px', padding: '15px', mb: 3 }}>
         <Typography variant="subtitle1" component="h4" fontWeight="700" fontSize="large">
            Запитання №{ questionNumber }
         </Typography>
         { children }
      </Box>
   )
}

export default memo(QuestionBlock)