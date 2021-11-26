import React from 'react'
import { UserContainer } from './UserContainer'
import { UserContextProvider } from '../../context/UserContext'


export const UserScreen = () => {
  return (
    <UserContextProvider >
      <UserContainer />
    </UserContextProvider>
  )
}