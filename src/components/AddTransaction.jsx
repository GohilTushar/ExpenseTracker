import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddTransaction = () => {
  // const [inputData,setInputData]=useState('')
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();
  const [date, setDate] = useState("")
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount || !date) {
      // alert('Hello')
      toast.error('Please Fill Data',{
        position:'top-right',
        autoClose:1000,
        transition:Slide
      });

      return
    } 
    else {
      toast.success('Expense Added Successfully',{
        position:'top-right',
        autoClose:1000,
        transition:Slide
      });
      setText('')
      setAmount('')
      setDate("")
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: date
    }

    addTransaction(newTransaction);
  }


  return (
    <>
      <h3>Add new transaction</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-floating">
          <input type="text" className='form-control' id="floating1" placeholder='Text' value={text} onChange={(e) => setText(e.target.value)} autoComplete='off' />
          <label for="floating1">Text</label>
        </div>
        <hr />
        <div className="form-floating">
          <input type="number" className="form-control" id="floating2" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} autoComplete='off' />
          <label for="floating2"
          >Amount</label>
        </div>
        <hr />
        <div className="form-floating">
          <input type="date" className="form-control" id="floating3" value={date} onChange={(event) => setDate(event.target.value)} />
          <label for="floating3">Date</label>
        </div>
        <hr />
        <button className="btn">Add transaction</button>
        <ToastContainer/>
      </form>
    </>
  )
}
