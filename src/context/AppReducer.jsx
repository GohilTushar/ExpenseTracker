const AppReducer=(state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
      // case 'UPDATE_TRANSACTION':
      // return {
      //   ...state,
      //   transactions: state.transactions.find(transaction =>transaction.id === action.payload.id)
      //   }
    default:
      return state;
  }
}
export default AppReducer