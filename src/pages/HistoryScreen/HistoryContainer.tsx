import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { HistoryCard } from '../../components/HistoryCard'
import { useHistory } from '../../hooks/useHistory'
import { CalanderModal } from '../../components/CalendarModal'

export const HistoryContainer = () => {
  const { history, dateToFilter } = useHistory()

  return (
    <View style={{ backgroundColor: '#eee', flex: 1 }} >
      <View
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 1 }} >
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }} >Histórico de Entradas</Text>
        </View>
        <View style={{ width:60, justifyContent:'center', alignItems:"center" }} >
          <CalanderModal />
        </View>
      </View>
      {
        history.length===0?
        <View style={{ width:'100%', justifyContent:'center', alignItems:'center', marginTop:100 }} > 
          <Text>{`Ninguém entrou no LAGBEA em ${new Date(dateToFilter).toISOString().substr(0,10)}!`}</Text> 
        </View>
        :
        <ScrollView contentContainerStyle={{ paddingHorizontal: '5%' }} >
          {
            history.map((props, index) => {
              return (
                <HistoryCard key={`${index}`} {...props} />
              )
            })
          }
        </ScrollView>
      }
    </View>
  )
}