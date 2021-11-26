import React, { createContext, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { User, UserContextProviderProps, UserContextType } from './interfaces'
import { Alert } from 'react-native'

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }:UserContextProviderProps) => {
  const [userList, setUserList] = useState<User[]>([])
  const [userFilteredList, setUserFilteredList] = useState<User[]>([])
  const [filteredName, setFilteredName] = useState('')

  const navigation = useNavigation()

  const getUsers = async () => {
    try {
      const response = await api.get('/users')
      console.log(response.data)
      setUserList(response.data)
      setUserFilteredList(response.data)
    } catch (error) {
      console.error(error)
      setUserList([]) 
    }
  }

  const applyFilterByName = () => {
    const filterdUserList = userList.filter(user=>user.name.toLowerCase().includes(filteredName.toLowerCase()))
    setUserFilteredList(filterdUserList)
    setFilteredName('')
  }

  const deleteUser = async (tag:string) => {
    try {
      await api.delete(`/users/${tag}`)
      await getUsers()
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',async ()=>{
      console.log('focuns on users')
      await getUsers()
    })
    return ()=>{
      console.log('taking off focus on users', unsubscribe())
      unsubscribe()
    }
  },[navigation])

  return (
    <UserContext.Provider value={{ userList:userFilteredList, getUsers, filteredName, setFilteredName, applyFilterByName, deleteUser }} >
      {children}
    </UserContext.Provider>
  )
}