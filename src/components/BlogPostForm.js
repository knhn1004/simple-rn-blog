import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ btnName, handleSubmit, post }) => {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput onChangeText={setTitle} value={title} style={styles.input} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        onChangeText={setContent}
        value={content}
        style={styles.input}
      />
      <Button title={btnName} onPress={() => handleSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  post: {
    title: '',
    content: '',
  },
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

export default BlogPostForm
