import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_blogposts':
      return action.payload
    // case 'add_blogpost':
    // return [
    // ...state,
    // {
    // id: Math.floor(Math.random() * 999999),
    // title: action.payload.title,
    // content: action.payload.content,
    // },
    // ]
    case 'delete_blogpost':
      return state.filter(post => post.id !== action.payload)
    case 'edit_blogpost':
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      )
    default:
      return state
  }
}

const fetchPosts = dispatch => async () => {
  const response = await jsonServer.get('/posts')
  dispatch({ type: 'fetch_blogposts', payload: response.data })
}

const addBlogPost = dispatch => async (title, content, cb) => {
  await jsonServer.post('/posts', {
    title,
    content,
  })
  // dispatch({
  // type: 'add_blogpost',
  // payload: {
  // title,
  // content,
  // },
  // })
  !!cb && cb()
}

const deletePost = dispatch => async id => {
  await jsonServer.delete(`/posts/${id}`)
  dispatch({ type: 'delete_blogpost', payload: id })
}

const editPost = dispatch => async (id, title, content, cb) => {
  await jsonServer.put(`/posts/${id}`, { title, content })

  dispatch({
    type: 'edit_blogpost',
    payload: {
      id,
      title,
      content,
    },
  })
  !!cb && cb()
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost, editPost, fetchPosts },
  []
)
