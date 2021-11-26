import React, { useState } from 'react'
import CalendarPicker from 'react-native-calendar-picker'
import {
  View, Modal, TouchableOpacity, Text
} from 'react-native'
import { CalenderIcon } from '../../assets/icons/CalendarIcon'
import { useHistory } from '../../hooks/useHistory'

export const CalanderModal = () => {
  const [visible, setVisible] = useState(false)

  const { getDateToFilter, getHistory } = useHistory()

  const openModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  return (
    <View>
      <Modal
        visible={visible}
        transparent
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
        >
          <View
            style={{
              backgroundColor: "#fff"
            }}
          >
            <CalendarPicker
              onDateChange={date=>getDateToFilter(date.toJSON())}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: '10%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 80,
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={closeModal}
              >
                <Text style={{ fontWeight: 'bold', color: '#666', width: '100%' }}>CANCELAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={async()=>{
                  await getHistory()
                  closeModal()
                }}
              >
                <Text style={{ fontWeight: 'bold', color: '#316aa0' }} >OK</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

      </Modal>

      <TouchableOpacity style={{ width: 40, height: 40 }} onPress={openModal} >
        <CalenderIcon color="#49bd32" />
      </TouchableOpacity>
    </View>
  )
}