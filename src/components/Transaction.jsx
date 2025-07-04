import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

const Detail = styled(ListItem)`
      margin-top: 10px;
`

const Transactionnn = ({transaction, setTransactions, transactions}) => {

    const color = transaction.amount > 0 ? "green" : "red";

    const deleteTransaction = (id) => {
        setTransactions (transactions.filter(transaction => transaction.id !== id))
    }

    return (
      <Detail style={{color: `${color}`, color: transaction.amount > 0 ? "green" : "red"}}>
               <ListItemIcon>
                   <DeleteIcon  onClick={() => deleteTransaction(transaction.id)}/>
               </ListItemIcon>
           <ListItemText>{transaction.text}</ListItemText>
           <ListItemText>{transaction.amount}</ListItemText>
      </Detail>
  )
}

export default Transactionnn