import reducer from '../reducer.js'
import * as types from '../actionConstants';
import assert from 'assert'
const state = {
  items: [
    {
      id: 1,
      title: 'Some name',
      post: 'Some job',
    }, {
      id: 2,
      title: 'Other name',
      post: 'Other job',
    }
  ], loading: false
}
describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(state, {})).toEqual(state);
  });
  describe('FETCH_POSTS', () => {
    it('should handle FETCH_POSTS_SUCCESS', () => {
      expect(
        reducer(state, {
          type: types.FETCH_POSTS_SUCCESS,
          payload: state.items,
          loading: false
        })
      ).toEqual(
        {
          items: state.items,
          loading: false
        }
      )
    });
  });

  describe('DELETE_POST', () => {
    it('delete Post', () => {
      assert.deepEqual(
        reducer(state, {
          type: types.DELETE_POST_SUCCESS,
          id: 2,
        }), {
        items: [
          {
            id: 1,
            title: 'Some name',
            post: 'Some job',
          }
        ], "loading": false
      }
      );
    });
  });
  describe('CREATE_POST', () => {
    it('Create Post', () => {
      assert.deepEqual(
        reducer(state, {
          type: types.CREATE_POST_SUCCESS,
          payload: {
            id: 3,
            title: 'Some name',
            post: 'Some job'
          }
        }), {
        items: [
          {
            id: 1,
            title: 'Some name',
            post: 'Some job',
          },
          {
            id: 2,
            title: 'Other name',
            post: 'Other job',
          },
          {
            id: 3,
            title: 'Some name',
            post: 'Some job',
          },
        ], "loading": false
      }
      );
    });
  });
  describe('UPDATE_POST', () => {
    it('Update Post', () => {
      assert.deepEqual(
        reducer(state, {
          type: types.UPDATE_POST_SUCCESS,
          payload: {
            id: 2,
            title: 'Changed name',
            post: 'Changed JOB'
          }
        }), {
        items: [
          {
            id: 1,
            title: 'Some name',
            post: 'Some job',
          },
          {
            id: 2,
            title: 'Changed name',
            post: 'Changed JOB'
          }
        ], "loading": false
      }
      );
    });
  });
});