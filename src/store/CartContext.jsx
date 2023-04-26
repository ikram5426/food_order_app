import react from 'react';

const CartContext=react.createContext({
  items:[],
  totalAmount:null,
  addItem:(item)=>{},
  removeItem:(id)=>{}
})

export default CartContext