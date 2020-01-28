import React from 'react';
import { mount } from 'enzyme';
import PostForm from '../Components/PostForm';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('<PostForm/> component', () => {
  it('rendered', () => {
    const history = {
      push: jest.fn(),
    };
    const initialState = {
      title: '',
      post: '',
      posts: {
        items: []
      }
    }
    const createPost = jest.fn();
    const mockStore = configureMockStore();
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><PostForm handleSubmit={createPost} history={history} posts={0} /></Provider>);
    const input = wrapper.find('input');
    input.simulate('change', { target: { name: "title", value: "spam" } });
    expect(input.props()).toHaveProperty('aria-label')
    input.simulate('change', { target: { name: "post", value: "cats" } });
    expect(wrapper.find('input').prop('value')).toBe('spam');
    const fakeEvent = { e: () => console.log('preventDefault') };
    const form = wrapper.find('#form')
    form.simulate('submit', fakeEvent);
    expect(createPost).toHaveBeenCalled();
  });
});
