import {Typography, styled, Box} from '@mui/material';
import './App.css';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = styled(Typography)`
  font-size: 28px;
  color: blue;
  margin: 0; 
  text-align: center;
`;

const Component = styled(Box)`
  display: flex;
  background: white;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  flex-direction: row;

  & > div {
    height: 80vh;
    width: 50%;
    padding: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;              

    & > div {
      width: 100%;
      height: auto;
      padding: 10px 0;
    }
  }
`;

function App() {

  const [transactions, setTransactions] = useState(() => {
    const data = localStorage.getItem('transactions');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  console.log('Loaded from localStorage:', transactions);

  

  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>

        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransactions setTransactions={setTransactions}/>
        </Box>

        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>

      </Component>
    </div>
  )
}

export default App