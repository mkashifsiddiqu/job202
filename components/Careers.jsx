import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Divider, List, ListItem, Typography,TextField, Grid } from '@mui/material';
import { Stack } from '@mui/system';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import bulbIcon from '../public/icon/lightbulb.png' 
import filesIcon from '../public/icon/files.png'
import breifcaseIcon from '../public/icon/briefcase.png'
import moneyIcon from '../public/icon/money-bag.png'
import Form from './NavSubComponent/Form';



const box1 ={
    backgroundColor:`#5f63ea`,color:`#fff`,py:1,px:2,borderTopLeftRadius:`10px`
    ,borderTopRightRadius:`10px`,borderBottomRightRadius:`10px`,fontSize:`14px`,fontWeight:500,
    
}
const box2={
    backgroundColor:`#fff`,
    color:`#5f63ea`,
    py:1,px:2,
    border:`1px solid #5f63ea`,
    cursor:`pointer`,
    '&:hover':{
        boxShadow:`0px 1px 5px #5f63ea`
    }
    
}

export const Careers = () => {
    
  return (
    
    <Container maxWidth="md" sx={{lg:{maxWidth:`lg`},md:{maxWidth:`md`}}}>
        {/* title of Job */}
        <Box mb={3}>
            <Stack spacing={2} direction='row'>
                <ArrowBackIcon fontSize='small'/>
                <Typography fontSize={14} fontWeight={600}>sell all position</Typography>
            </Stack>
            <Box display={`flex`} justifyContent={'space-between'} mt={3}>
                <Box sx={box1}>You're applying for:</Box>
                <Box sx={box2}>Human Resource</Box>
            </Box>
        </Box>
        <Divider />
       {/* Mian Job Area or discription of job  */}
        <Box mt={3}>
            <Box>
                <Typography variant='h4' fontWeight={600}>Senior Technical Talent Hunter</Typography>
                <Typography variant='caption' color={`gray`} fontWeight={600}>Gujrat - Pakistan</Typography>
            </Box>
            <Box display={`flex`} justifyContent='space-between' alignItems={`center`} my={2}>
                <Stack spacing={2} direction='row' alignItems={`center`}>
                        <Box> <img src={filesIcon.src} alt='bulb' width={`30px`} height={`30px`}/></Box>
                        <Box>
                            <Typography color={`gray`}>Contract type:</Typography>
                            <Typography fontWeight={600} color={`#303046`}>Employee</Typography>
                        </Box>
                </Stack>
                <Stack spacing={2} direction='row' alignItems={`center`}>
                        <Box> <img src={breifcaseIcon.src} alt='bulb' width={`30px`} height={`30px`}/></Box>
                        <Box>
                            <Typography color={`gray`}>Work regime:</Typography>
                            <Typography fontWeight={600} color={`#303046`}>Full-time</Typography>
                        </Box>
                    </Stack>
                    <Stack spacing={2} direction='row' alignItems={`center`}>
                        <Box>
                            <img src={bulbIcon.src} alt='bulb' width={`30px`} height={`30px`}/>
                        </Box>
                        <Box>
                            <Typography color={`gray`}>Level:</Typography>
                            <Typography fontWeight={600} color={`#303046`}>Senior</Typography>
                        </Box>
                    </Stack>
                    <Stack spacing={2} direction='row' alignItems={`center`}>
                        <Box> <img src={moneyIcon.src} alt='bulb' width={`30px`} height={`30px`}/></Box>
                        <Box>
                            <Typography color={`gray`}>Payment:</Typography>
                            <Typography fontWeight={600} color={`#303046`}>$3,5000.00</Typography>
                        </Box>
                    </Stack>
            </Box>
            <Box my={2}>
                <Typography variant='h6' fontWeight={600}>What we are looking for:</Typography>
                <List sx={{listStyleType: 'disc',pl: 6,py:0,listStylePosition: "inside",
                        '& .MuiListItem-root': {
                        display: 'list-item',
                        },}}>
                    <li>Data asskd  ssk</li>
                    <li>Data asskd</li>
                </List>
            </Box>
            {/* form for apply */}
            <Form/>

        </Box>
      </Container>
  )
}
