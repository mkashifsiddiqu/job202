import React,{useState} from 'react'
import { Box,Typography,TextField, Grid, Button } from '@mui/material';
import Feedback from './Feedback';
const inputcss = {
    backgroundColor:`#ededed`,
    fontSize:`13px`,'& input::placeholder':{
    fontSize:`12px`,fontWeight:600,}
}
const Form = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setlastName] = useState('')
    const [email,setEmail]= useState('')
    const [phone,setPhone] = useState('')
    const [selfNote,SetSelfNote]=useState('')
    //send 
    const [send,setSend] =useState(false)
    const  onSubmit=async ()=>{
        const data = {firstName,lastName,email,phone,selfNote};
        console.log(data)
        setFirstName('')
        setlastName('')
        setEmail('')
        setPhone('')
        SetSelfNote('')
        setSend(true)
        const res = await fetch(`/api/applicationData/`, {
            method: `POST`, // or 'PUT'
            headers: {
              'Content-Type': `application/json`,
            },
            body: JSON.stringify(data),
          });
          const response = await res.json();
          console.log(response.data)
        
        
        const timeoutFn =()=>{
            setSend(false)
            clearTimeout(myTimeout)
        }
        const myTimeout = setTimeout(timeoutFn, 1000)
        
        
    }

  return (
          <form>
        {!send &&<Box mt={6}>
                <Typography variant='h4' fontWeight={600}>Want to be part?👋</Typography>
                {/* Name */}
                <Box mt={6}>
                    {/* name */}
                    <Box mb={2}>
                    <Typography mb={1} fontWeight={600}>Name:</Typography>
                    <Grid container direction={`row`} spacing={2}>
                        <Grid item md={6}> 
                            <TextField hiddenLabel
                            sx={inputcss}
                            type='text'
                            fullWidth
                            id="firstName"
                            placeholder='First Name'
                            color='info'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            name='firstName'
                            inputProps={{
                                style: {fontSize: 13} 
                              }}
                            size="small"/>
                        </Grid>
                        <Grid item md={6}>
                                <TextField
                                hiddenLabel
                                sx={inputcss}
                                fullWidth
                                id="lastName"
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e)=>setlastName(e.target.value)}
                                name='lastName'
                                size="small"
                                inputProps={{
                                    style: {fontSize: 13} 
                                  }}
                            />
                        </Grid>
                    </Grid>
                    </Box>
                    {/* mail */}
                    <Box mb={2}>
                    <Typography mb={1} fontWeight={600}>Your best email:</Typography>
                    <Grid container direction={`row`} spacing={2}>
                        <Grid item md={12}> 
                            <TextField hiddenLabel
                            sx={inputcss}
                            fullWidth
                            id="email"
                            placeholder='yourmail@domain.com'
                            value={email}
                            name='email'
                            onChange={(e)=>setEmail(e.target.value)}
                            color='info'
                            inputProps={{
                                style: {fontSize: 13} 
                              }}
                            size="small"/>
                        </Grid>
                    </Grid>
                    </Box>
                    {/* phone */}
                    <Box mb={2}>
                    <Typography mb={1} fontWeight={600}>Phone:</Typography>
                    <Grid container direction={`row`} spacing={2}>
                        <Grid item md={12}> 
                            <TextField hiddenLabel
                            sx={inputcss}
                            fullWidth
                            id="phone"
                            placeholder='+92 3052648206'
                            color='info'
                            value={phone}
                            name='phone'
                            onChange={(e)=>setPhone(e.target.value)}
                            inputProps={{
                                style: {fontSize: 13} 
                              }}
                            size="small"/>
                        </Grid>
                    </Grid>
                    </Box>
                    {/* about your self */}
                    <Box mb={2}>
                    <Typography mb={1} fontWeight={600}>Tell us about Yourself:</Typography>
                    <Grid container direction={`row`} spacing={2}>
                        <Grid item md={12}> 
                            <TextField hiddenLabel
                            sx={inputcss}
                            fullWidth
                            id="selfNote"
                            placeholder={`i'm looking for an oportunity`}
                            multiline
                            value={selfNote}
                            name='selfNote'
                            onChange={(e)=>SetSelfNote(e.target.value)}
                            color='info'
                            inputProps={{
                                style: {fontSize: 13} 
                              }}
                            size="small"/>
                        </Grid>
                    </Grid>
                    </Box>
                    {/* Your application */}
                    <Box mb={2}>
                        <Grid container direction={`row`} spacing={2}>
                            <Grid item md={6}> 
                                <Typography mb={1} fontWeight={600}>Your application:</Typography>
                            </Grid>
                            <Grid item md={6}> 
                                <Typography mb={1} fontWeight={600}>Extra file:</Typography>
                            </Grid>
                        </Grid>
                        
                    <Grid container direction={`row`} spacing={2}>
                        <Grid item md={6}> 
                            <Button variant='contained' fullWidth
                            component="label"  
                            style={{backgroundColor:`#5f63ea`,color:`#fff`}} 
                            sx={{textTransform:`capitalize`}}>
                                <input hidden  type="file" />
                                Choose file</Button>
                        </Grid>
                        <Grid item md={6}>
                          
                          <Button variant='contained' fullWidth
                          component="label"
                          style={{backgroundColor:`#b2396d`,color:`#fff`}}
                            sx={{textTransform:`capitalize`}}>Choose file
                             <input  hidden  type="file" />
                            </Button>
                            
                        </Grid>
                    </Grid>
                    </Box>
                    {/* submit button */}
                    <Box mb={2}>
                    <Typography mb={1} fontWeight={600}>Submit Application</Typography>
                    <Grid container direction={`row`} spacing={2}>
                        <Grid item md={12}> 
                        <Button variant='contained' fullWidth
                          
                            style={{backgroundColor:`#5f63ea`,color:`#fff`}}
                            sx={{textTransform:`capitalize`}} onClick={onSubmit}>Submit</Button>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
          </Box>}
          {send && <Feedback />}
          
        </form>
  )
}

export default Form