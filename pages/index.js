import { Careers } from '../components/Careers'
import Nav from '../components/Nav'
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
//global State 
// import {ColorContextProvider,ColorModeContext} from '../globalState'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {},modeCustom:'' });

function Home() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <CssBaseline />
      <Nav/>
      <Careers/>
    </>
  )
}
//for Dark mode 
export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      // modeCustom:mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
          ? {
              // palette values for light mode
              //for Custom Color
            }
          : {
              // palette values for dark mode
              text: {
                primary: '#fff',
                secondary: grey[500],
              },
            }),
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
