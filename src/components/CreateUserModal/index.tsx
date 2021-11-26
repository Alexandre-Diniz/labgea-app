import React, { useState } from 'react'
import {
  Modal, View, TouchableOpacity, Text, TextInput, Alert
} from 'react-native'
import { AddIcon } from '../../assets/icons/AddIcon'
import { api } from '../../services/api'

import { CreateUserModalProps } from './interfaces'

export const CreateUserModal = ({ callback = () => { } }: CreateUserModalProps) => {
  const [visible, setVisible] = useState(false)
  const [rfid, setRfid] = useState('Não Encontrada!')
  const [name, setName] = useState('')

  const openModal = async () => {
    setVisible(true)
    await getTag()
  }

  const closeModal = () => {
    setVisible(false)
    setRfid('Não Encontrada!')
    setName('')
  }

  const getTag = async () => {
    try {
      const response = await api.get('/rfid')
      console.log(response.data)
      setRfid(response.data?.tag)
    } catch (error) {
      setRfid('Não Encontrada!')
    }
  }

  const createUser = async (name: string, tag: string) => {
    try {
      if (name.trim() !== '' || tag.trim()!=='') {
        const body = { name, tag }
        const response = await api.post('/users', body)
        console.log(response.data)
        callback()
        Alert.alert('Usuário Criado com sucesso')
        closeModal()
      } else {
        Alert.alert('Nenhum nome ou tag disponível')
      }
    } catch (error) {
      console.log(error)
      Alert.alert(error.message)
    }
  }

  return (
    <View>
      <Modal
        visible={visible}
        animationType="slide"
        transparent
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: -1
          }}
        >
          <View
            style={{
              width: '80%',
              paddingVertical: 40,
              backgroundColor: '#fff',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}
          >
            <Text style={{ display: 'flex', alignSelf: 'flex-start', marginHorizontal: 15 }} >Nome</Text>
            <TextInput
              placeholder='Nome do Usuário'
              value={name}
              onChangeText={name => setName(name)}
              placeholderTextColor='#ccc'
              style={{
                width: '90%',
                height: 40,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#ccc',
                paddingHorizontal: 10,
                color: '#000'
              }}
            />
            <Text
              style={{ display: 'flex', alignSelf: 'flex-start', marginHorizontal: 15 }}
            >
              {`RFID TAG: ${rfid}`}
            </Text>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 45,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#47a04b',
                borderRadius: 5,
                marginTop: 20
              }}
              onPress={async () => {
                await createUser(name, rfid)
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >CRIAR USUÁRIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 45,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ccc',
                marginTop: 20
              }}
              onPress={closeModal}
            >
              <Text
                style={{
                  color: '#c91919',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={openModal}
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#3aaf61',
          marginLeft: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <AddIcon />
      </TouchableOpacity>
    </View>
  )
}