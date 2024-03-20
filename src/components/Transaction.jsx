import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction} = useContext(GlobalContext);
  // const {updateTransaction}=useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+';
  const Delete=()=>{
    {deleteTransaction(transaction.id)};
    toast.success('Expense Deleted Successfully',{
        position:'top-right',
        autoClose:1000,
        transition:Slide
    })
  }
  // const Update=()=>{
  //   {updateTransaction(transaction.id)};
  //   toast.success('Expense Updated Successfully',{
  //       position:'top-right',
  //       autoClose:1000,
  //       transition:Slide
  //   })
  // }

  return (
    <>
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.date}
    <button onClick={Delete} className="delete-btn">x</button>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
      {/* <button className="update-btn">T</button> */}
    </li>
    </>
  )
}
