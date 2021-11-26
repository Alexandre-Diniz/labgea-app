import React, { createContext, useEffect, useState } from 'react'
import {
  HistoryContextProviderProps,
  HistoryContextProps,
  HistoryProps,
  getHistoryProps
} from './interfaces'
import { api } from '../../services/api'
import { useNavigation } from '@react-navigation/native'

export const HistoryContext = createContext({} as HistoryContextProps)

const today = new Date()

export const HistoryContextProvider = (props:HistoryContextProviderProps) => {
  const [history, setHistory] = useState<HistoryProps[]>([])
  const [dateToFilter, setDateToFilter] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0).toJSON())
  const navigation = useNavigation()

  const getHistory = async () => {
    try {
      const params = {
        date:dateToFilter
      }
      const response = await api.get('/history', { params })
      const history = response.data
      setHistory(history)
    } catch (error) {
      console.error(error.message)
    }
  }

  const getDateToFilter = (date:string)=>setDateToFilter(date)

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',async ()=>{
      try {
        await getHistory()
      } catch (error) {
        console.error(error)
        setHistory([])
      }
    })
    return ()=>{
      unsubscribe()
      console.log('removing focus on history')
    }
  },[navigation])

  return (
    <HistoryContext.Provider value={{ history, getDateToFilter, getHistory, dateToFilter }} >
      {props.children}
    </HistoryContext.Provider>
  )
}