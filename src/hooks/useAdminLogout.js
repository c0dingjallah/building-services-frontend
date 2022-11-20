import { useAdminContext } from './useAdminContext'


export const useAdminLogout = () => {
  const { dispatch } = useAdminContext()


  const adminlogout = () => {
    // remove admin from storage
    localStorage.removeItem('admin')

    // dispatch admin logout action
    dispatch({ type: 'LOGOUT' })

  }

  return { adminlogout }
}