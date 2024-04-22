import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Users() {

  const [users, setUsers] = useState([])

  const apiURL = process.env.EXPO_PUBLIC_URL

  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiURL}/users`)
      setUsers(response.data.users)

    }
    catch (error) {
      console.error(error)
    }
  }

  const CreateUsers = async () => {
    try {
      const response = await axios.post(`${apiURL}/users`, {
        name: "John Doe",
        email: "jonhgonnaback.com@.br5",
        password: "123456"
      })
      console.log(response.data.user)
      getUsers()
    }
    catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getUsers()
    console.log(users)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Users</Text>
        {users ? (
          users.map((user) => (
            <View key={user.id} style={styles.user}>
              <Text style={styles.userText}>{user.name}</Text>
              <Text style={styles.userText}>{user.email}</Text>
            </View>
          ))
        ) : (<Text>Loading...</Text>)}

        <TouchableOpacity style={styles.reloadButton} onPress={getUsers}>
          <Text style={styles.reloadText}>Reload</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reloadButton} onPress={CreateUsers}>
          <Text style={styles.reloadText}>Create User</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}