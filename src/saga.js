import { takeLatest, put, takeEvery, call } from 'redux-saga/effects'
import { createPostApi, getPostsApi, deletePostsApi, updatePostsApi } from './api.js';
import * as actions from './actionConstants.js'

export function* createPost(action) {
  try {
    const data = yield call(createPostApi, action.payload);
    yield put(actions.createPosts(data));
    yield call(fetchPosts);
  } catch (error) {
    yield put({ type: 'CREATE_POST_FAILURE' })
    console.error(error);
  }
}

export function* watchCreatePost() {
  yield takeEvery('CREATE_POST', createPost);
}
export function* fetchPosts() {
  try {
    const data = yield call(getPostsApi);
    yield put(actions.recievePosts(data));
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE' })
  }
}

export function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS', fetchPosts)
}

export function* updatePost(action) {
  try {
    const data = yield call(updatePostsApi, action.payload);
    yield put(actions.updatePost(data));
  } catch (error) {
    yield put({ type: 'UPDATE_POST_FAILURE' })
    console.error(error)
  }
}

export function* watchUpdatePost() {
  yield takeLatest('UPDATE_POST', updatePost)
}

export function* deletePost(action) {
  try {
    const data = yield call(deletePostsApi,action.payload.id);
    yield put(actions.deletePosts(data));
  } catch (error) {
    yield put({ type: 'DELETE_POST_FAILURE' })
    console.error(error)
  }
}

export function* watchDeletePost() {
  yield takeLatest('DELETE_POST', deletePost)
}

