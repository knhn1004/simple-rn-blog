import React, { useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state: blogPosts, deletePost, fetchPosts } = useContext(BlogContext)

  useEffect(() => {
    fetchPosts()
    const listener = navigation.addListener('didFocus', () => {
      fetchPosts()
    })
    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={post => String(post.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  ),
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
  },
  button: {},
})

export default IndexScreen
