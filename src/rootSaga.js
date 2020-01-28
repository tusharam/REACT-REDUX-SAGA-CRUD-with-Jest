import { all } from 'redux-saga/effects'
import { watchCreatePost, watchFetchPosts, watchUpdatePost, watchDeletePost } from './saga'

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchDeletePost(),
    watchCreatePost(),
    watchUpdatePost()
  ])
}
