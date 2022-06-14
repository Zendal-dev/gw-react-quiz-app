import React, { memo, useEffect } from 'react'
import { Box, Button, Typography, Modal as ModalMui } from '@mui/material'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   borderRadius: '10px',
   boxShadow: 24,
   p: 4,
   border: 'none',
   outline: 'none',
}


function Modal({ caption, description, open: openProp, onClose = () => {} }) {
   const [open, setOpen] = React.useState(openProp)

   useEffect(() => {
      setOpen(openProp)
   }, [openProp])

   const handleClose = () => {
      setOpen(false)
      onClose()
   }

   return (
      <ModalMui
         keepMounted
         open={ open }
         onClose={ handleClose }
      >
         <Box sx={ style }>
            <Typography variant="h6" component="h2">
               { caption }
            </Typography>
            <Typography sx={ { mt: 2 } }>
               { description }
            </Typography>
         </Box>
      </ModalMui>
   )
}

export default memo(Modal)