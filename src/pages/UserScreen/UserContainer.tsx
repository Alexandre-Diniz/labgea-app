import React from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useUser } from '../../hooks/useUser'
import { CreateUserModal } from '../../components/CreateUserModal'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { DelIcon } from '../../assets/icons/DelIcon'

export const UserContainer = () => {
  const { userList, getUsers, filteredName, setFilteredName, applyFilterByName, deleteUser } = useUser()
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }} >
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: '#ddd',
            color: '#000'
          }}
          placeholder='Procure por alguém'
          placeholderTextColor='#aaa'
          value={filteredName}
          onChangeText={name => setFilteredName(name)}
          onBlur={applyFilterByName}
        />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#dbdbdb',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={applyFilterByName}
        >
          <SearchIcon />
        </TouchableOpacity>

        <CreateUserModal action='POST' callback={async () => await getUsers()} />

      </View>
      <ScrollView contentContainerStyle={{ width: '95%', marginHorizontal: '2.5%' }} >
        {
          userList.map(({ name, tag }, index) => {
            return (
              <View key={`${index}`}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                  borderColor: '#ddd',
                  borderWidth: 1,
                  marginVertical: 5,
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection:'row',
                  justifyContent:'space-between'
                }}
              >
                <View
                  style={{
                  }}
                >
                  <Text>{`Nome: ${name}`}</Text>
                  <Text>{`Tag: ${tag}`}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={async()=>{
                      Alert.alert(
                        'Cuidado!',
                        'Você quer remover esse usuário?',
                        [
                          {
                            text:'Não',
                            onPress:()=>{},
                            style: 'cancel'
                          },
                          {
                            text:'Ok',
                            onPress: async()=>await deleteUser(tag)
                          }
                        ]
                      )
                    }}
                    style={{ height:40, width:40, justifyContent:'center', alignItems:'center' }}
                  >
                    <DelIcon/>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}