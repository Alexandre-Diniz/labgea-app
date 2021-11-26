import { ReactNode } from "react";

export type UserContextProviderProps = {
  children: ReactNode,
}

export type UserContextType = {
  userList: User[],
  getUsers: ()=>Promise<void>,
  filteredName: string,
  setFilteredName: (name:string)=>void,
  applyFilterByName: ()=>void,
  deleteUser: (tag:string) => Promise<void>
}

export type User = {
  name: string,
  tag: string
}