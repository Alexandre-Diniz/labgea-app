import { ReactNode } from "react";

export type CreateUserModalProps = {
  callback?: ()=>void,
  action: 'POST' | 'PUT'
}