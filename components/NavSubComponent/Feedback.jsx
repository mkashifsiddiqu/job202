import { Container } from '@mui/material'
import React from 'react'
import Alert from '@mui/material/Alert';
const Feedback = () => {
  return (
    <Container maxWidth='sm'>
            <Alert severity="success">Your Application is sended!</Alert>
    </Container>
  )
}

export default Feedback