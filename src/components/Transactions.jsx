import { Box, Divider, List, Typography } from '@mui/material';
import Transactionnn from './Transaction';

const Transactions = ({transactions, setTransactions}) => {
  return (
    <Box>
       <Typography variant='h5'>Transaction Histtory</Typography>
       <Divider />
       <List>
           {
              transactions.map(transaction => (
                <Transactionnn 
                key={transaction.id}
                transaction={transaction}  //for each text and amount, 
                setTransactions={setTransactions}  //setTransactions comes from app.jsx as a props
                transactions={transactions}/>  //transactions comes from app.jsx as a props
              )) 
              
           }
       </List>
    </Box>
  ) 
}

export default Transactions;