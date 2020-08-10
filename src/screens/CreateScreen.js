import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  const handleAdd = (title, content) => {
    addBlogPost(title, content, () => {
      navigation.navigate('Index')
    })
  }

  return <BlogPostForm btnName="Add" handleSubmit={handleAdd} />
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
})

export default CreateScreen
