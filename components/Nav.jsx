import React from 'react'
import { Box } from '@mui/system'
import Link from '@mui/material/Link';
import Image from 'next/image'
import ModeButton from './NavSubComponent/ModeButton';
import logo from '../public/logo.jpg'
import { Typography } from '@mui/material';
const navItem ={
    m:1,p:1,
    color:'black',//need for add in dark mode option
    fontSize:16,fontWeight:500,
    '&:hover':{
        color:'#5f63ea'
    }
}
const Nav = () => (
    <Box sx={{display:`flex`,height:`100%`,width:`100%`,
    justifyContent:`space-around`,
    alignItems:`center`,
    boxShadow:`0px 1px 7px gray`,mb:4,
   }}>
        <Box>
            <img src={logo.src}  width="25px" height="25px" alt="logo"/>
        </Box>
        <Box display={`flex`} alignItems={`center`}>
            <Link href="#" underline="none"  sx={navItem}>Product</Link>
            <Link href="#" underline="none" sx={navItem}>Solution</Link>
            <Link href="#" underline="none" sx={navItem}>Company</Link>
            <Link href="#" underline="none" sx={navItem}>Careers</Link>
        </Box>
        <Box>
            
            <ModeButton/>
        </Box>
    </Box>
)

export default Nav