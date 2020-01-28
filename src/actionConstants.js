export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const DELETE_POST = 'DELETE_POST'
export const DELETE_POST_PENDING = 'DELETE_POST_PENDING'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_PENDING = 'CREATE_POST_PENDING'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'

export const UPDATE_POST = 'UPDATE_POST'
export const UPDATE_POST_PENDING = 'UPDATE_POST_PENDING'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE'


export function recievePosts(data) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
}

export function deletePosts(data) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: data
  }
}
export function createPosts(data) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data
  }
}
export function updatePost(data) {
  return {
    type: UPDATE_POST_SUCCESS, payload: data
  }
}
