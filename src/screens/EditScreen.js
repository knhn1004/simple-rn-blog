import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(Context)
  const post = state.find(post => post.id === navigation.getParam('id'))

  useEffect(() => {
    navigation.setParams({
      title: post.title,
    })
  }, [])

  return (
    <BlogPostForm
      btnName="Update"
      post={post}
      handleSubmit={(title, content) =>
        editPost(navigation.getParam('id'), title, content, navigation.pop)
      }
    />
  )
}

EditScreen.navigationOptions = ({ navigation }) => ({
  title: `Editing: ${navigation.getParam('title')}`,
})

const styles = StyleSheet.create({})

export default EditScreen
