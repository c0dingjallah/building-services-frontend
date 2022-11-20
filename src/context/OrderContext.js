import { createContext, useReducer } from 'react'

export const OrdersContext = createContext()

export const OrdersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ORDERS': 
      return {
        orders: action.payload
      }
    case 'CREATE_ORDER':
      return {
        //orders: [action.payload, ...state.orders]
        orders: [action.payload]
      }
    case 'DELETE_ORDER':
      return {
        orders: state.orders.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}



export const OrdersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrdersReducer, {
    orders: null
  })

  //console.log('OrderContext state:', state)

  return (
    <OrdersContext.Provider value={{...state, dispatch}}>
      { children }
    </OrdersContext.Provider>
  )
}