import { useContext } from 'react'
import { HistoryContext } from '../context/HistoryContext'

export const useHistory = () => {
  return useContext(HistoryContext)
}