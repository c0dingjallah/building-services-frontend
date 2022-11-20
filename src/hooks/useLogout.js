import { useAuthContext } from './useAuthContext'
import { useOrdersContext } from './useOrdersContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchOrders } = useOrdersContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchOrders({ type: 'SET_ORDERS', payload: null })
  }

  return { logout }
}