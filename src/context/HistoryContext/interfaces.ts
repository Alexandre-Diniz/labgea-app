import { ReactNode } from 'react'

export type HistoryContextProviderProps = {
  children: ReactNode
}

export type HistoryContextProps = {
  history: HistoryProps[],
  getDateToFilter: (date:string)=>void,
  getHistory: ()=>Promise<void>,
  dateToFilter: string
}

export type HistoryProps = {
  created_at: string,
  name: string
}

export type getHistoryProps = {
  date?: string
}