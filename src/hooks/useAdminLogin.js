import { useState } from 'react'
import { useAdminContext } from './useAdminContext'

export const useAdminLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAdminContext()

  const adminlogin = async (emailornum, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/adminlogin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ emailornum, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('admin', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { adminlogin, isLoading, error }
}