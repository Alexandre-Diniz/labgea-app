import React from 'react'
import { View, Text } from 'react-native'

import { HistoryCardProps } from './interfaces'

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"]

const dateFotmated = (date:string)=>{
  const data = new Date(date)
  return `${data.getDate()}/${meses[data.getMonth()]}/${data.getFullYear()} ${data.getHours()}h${data.getMinutes()}min${data.getSeconds()}s`
}

export const HistoryCard = ({ created_at, name }: HistoryCardProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        marginVertical: 5,
        backgroundColor: '#fff',
        display: 'flex',
      }}
    >
      <Text>{`Nome: ${name}`}</Text>
      <Text>{`Entrada às: ${dateFotmated(created_at)}`}</Text>
    </View>
  )
}