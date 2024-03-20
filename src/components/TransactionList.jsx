import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  let { transactions } = useContext(GlobalContext);
  transactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  return (
    <>
      <h3>History</h3>
      <hr />
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
