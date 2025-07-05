import { Typography, styled, Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState, useEffect } from 'react';
import { Switch, FormControlLabel } from '@mui/material';



const Header = styled(Typography)`
  font-size: 28px;
  margin: 0;
  text-align: center;
`;

const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,
  width: '800px',
  padding: '10px',
  borderRadius: '20px',
  margin: 'auto',
  flexDirection: 'row',
  color: theme.palette.text.primary,
  '& > div': {
    height: '80vh',
    width: '50%',
    padding: '10px',
  },
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    width: '90%',
    '& > div': {
      width: '100%',
      height: 'auto',
      padding: '10px 0',
    },
  },
}));



function App() {

  const [darkMode, setDarkMode] = useState(() => {  //useState for dark mode, also store in localStorage
  const saveMode = localStorage.getItem('darkMode')  
  return saveMode ? JSON.parse(saveMode) : [];
  });

  useEffect(() => {  //useEffect for darkMode save
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  },[darkMode])



  const [transactions, setTransactions] = useState(() => {  //useState for save transactions in localStorege
    const data = localStorage.getItem('transactions');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => { //useEffect for transaction localStorage
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);



  //theme toggal
  const darkTheme = createTheme({  //dark theme
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
      },
    },
  });

  const lightTheme = createTheme({  //light theme
    palette: {
      mode: 'light',
      background: {
        default: '#f4f4f4',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
  });

  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      
      <Box sx={{ backgroundColor: darkMode ? '#121212' : '#f4f4f4', minHeight: '100vh', paddingBottom: '20px' }}>
        
        <Box 
        sx={{ 
          width: '100%', 
          display: 'flex',    
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '20px',
          padding: '10px' }}>

        <Header color="primary">Expense Tracker</Header>

        <FormControlLabel
          control={
          <Switch 
           checked={darkMode}
           onChange={() => setDarkMode(!darkMode)}
           color="primary"
        />
          }
          label={darkMode ? 'Dark Mode' : 'Light Mode'}
          sx={{ color: darkMode ? 'white' : 'black' }}
         />
        </Box>

        
        <Component>
          <Box>
            <Balance transactions={transactions} />
            <ExpenseCard transactions={transactions} />
            <NewTransactions setTransactions={setTransactions} />
          </Box>
          <Box>
            <Transactions transactions={transactions} setTransactions={setTransactions} />
          </Box>
        </Component>
      </Box>
    </ThemeProvider>
  );
}

export default App;
