import React from 'react'
import { HistoryContainer } from './HistoryContainer'
import { HistoryContextProvider } from '../../context/HistoryContext'

export const HistoryScreen = () => {
  return(
    <HistoryContextProvider>
      <HistoryContainer/>
    </HistoryContextProvider>
  )
}