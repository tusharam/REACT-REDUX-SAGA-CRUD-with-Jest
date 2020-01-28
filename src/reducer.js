

function posts(state = { items: [], loading: false },action) {
  switch (action.type) {
  case 'FETCH_POSTS_PENDING':
  case 'DELETE_POST_PENDING':
  case 'CREATE_POST_PENDING':
  case 'UPDATE_POST_PENDING':
    return {
      ...state,
      loading: true
    }
  case 'FETCH_POSTS_SUCCESS':
    return {
      items: action.payload,
      loading: false
    }
  case 'FETCH_POSTS_FAILURE':
    return {
      items: [],
      loading: false
    }
  case 'DELETE_POST_SUCCESS': {
    const post_id = action.id
    return {
      items: state.items.filter(post => post.id !== post_id),
      loading: false
    }
  }
  case 'CREATE_POST_SUCCESS':
    return {
      items: state.items.concat(action.payload),
      loading: false
    }
  case 'UPDATE_POST_SUCCESS': {
    const { id, ...rest } = action.payload;

    return {
      items: state.items.map(post => {
        if (post.id === id) {
          return { ...post, ...rest }
        }
        return post
      }),
      loading: false
    }
  }
  case 'CREATE_POST_FAILURE':
  case 'DELETE_POST_FAILURE':
  case 'UPDATE_POST_FAILURE':
    return {
      ...state,
      loading: false
    }
  default:
    return state
  }
}

export default posts;
