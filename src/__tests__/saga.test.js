import { put, call, fork } from 'redux-saga/effects';
import * as saga from '../saga';
import { getPostsApi, deletePostsApi, createPostApi, updatePostsApi } from '../api';
import * as actions from '../actionConstants';
import assert from 'assert';

const initialState = {
    title: '',
    post: '',
    posts: {
        items: []
    }
}

describe('fetchPosts()', () => {
    const generator = saga.fetchPosts();
    it('should return the getPostsApi call', () => {
        assert.deepEqual(generator.next().value, call(getPostsApi));
    });
    it('should return the FETCH_POST_SUCCESS action', () => {
        assert.deepEqual(generator.next(initialState.posts.items).value, put(actions.recievePosts(initialState.posts.items)));
    });
    it('should be finished', () => {
        assert.equal(generator.next().done, true);
    });
});
describe('DeletePosts()', () => {
    const action = {
        payload: {
            id: 1
        }
    }
    const generator = saga.deletePost(action);
    it('should return the deletePostsApi call', () => {
        assert.deepEqual(generator.next().value, call(deletePostsApi, 1));
    });
    it('should return the DELETE_POST_SUCCESS action', () => {
        assert.deepEqual(generator.next(initialState.posts.items).value, put(actions.deletePosts(initialState.posts.items)));
    });
    it('should be finished', () => {
        assert.equal(generator.next().done, true);
    });
});
describe('createPost()', () => {
    const action = {
        payload: {
            id: 1,
            title: "hello",
            post: 'hai'
        }
    }
    const generator = saga.createPost(action);
    it('should return the createPostApi call', () => {
        assert.deepEqual(generator.next().value, call(createPostApi, action.payload));
    });
    it('should return the CREATE_POST_SUCCESS action', () => {
        assert.deepEqual(generator.next(initialState.posts.items).value, put(actions.createPosts(initialState.posts.items)));
    });
    it('should return the fetchPosts saga call', () => {
        assert.deepEqual(generator.next().value, call(saga.fetchPosts));
    });
    it('should be finished', () => {
        assert.equal(generator.next().done, true);
    });
});
describe('updatePosts()', () => {
    const action = {
        payload: {
            title: "hello",
            post: 'hai'
        }
    }
    const generator = saga.updatePost(action);
    it('should return the updatePostsApi call', () => {
        assert.deepEqual(generator.next().value, call(updatePostsApi, action.payload));
    });
    it('should return the UPDATE_POST_SUCCESS action', () => {
        assert.deepEqual(generator.next(initialState.posts.items).value, put(actions.updatePost(initialState.posts.items)));
    });
    it('should be finished', () => {
        assert.equal(generator.next().done, true);
    });
});