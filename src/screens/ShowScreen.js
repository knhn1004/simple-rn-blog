import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const post = state.find(post => post.id === navigation.getParam('id'))

  useEffect(() => {
    navigation.setParams({
      title: post.title,
    })
  }, [post])

  return (
    <View>
      <Text>{post.title}</Text>
      {!!post.content && <Text>{post.content}</Text>}
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit', {
          id: navigation.getParam('id'),
        })
      }
    >
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  ),
  title: navigation.getParam('title'),
})

const styles = StyleSheet.create({})

export default ShowScreen
