import { Box, Button, styled, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const Container = styled(Box)`
      display: flex;
      flex-direction: column;
      & > h5, & > div, & > button {
        margin-top: 30px;
      }
`

const NewTransactions = ({setTransactions}) => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState();

    const addTransaction = () => {
        const transaction = {
          id: Math.floor(Math.random() * 100000),
          text: text,
          amount: +amount,
        }
        setTransactions(prevState => [transaction, ...prevState]);
        setText('');
        setAmount('');
    }
  
  return (
    <Container>

        <Typography variant='h5'>New Transaction</Typography>
        <TextField 
        label="Enter expense" 
        type='text'
        value={text} 
        onChange={(e) => setText(e.target.value)}
        />

        <TextField 
        type='number'
        label="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />

        <Button 
        variant='contained' 
        onClick={() => addTransaction()}>Add Transaction
        </Button>

    </Container>
  )
}

export default NewTransactions