
import React from 'react';
import { connect } from 'react-redux';
import { CREATE_POST, FETCH_POSTS } from '../actionConstants';
class PostForm extends React.Component {
    state = {
        title: '',
        post: '',
        id: this.props.posts.length
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const { title, post } = this.state;
        this.setState({ id: this.props.posts.length + 1 }, () => {
            this.props.createPost({
                "name": title,
                "job": post
            });
            this.setState({
                title: '',
                post: ''
            });
        });

    }
    render() {
        return (
            <>
                <form id="form" type="submit" onSubmit={this.props.handleSubmit || this.handleSubmit}>
                    <input aria-label="titleLabel" id="title" className="inputClass" type="text" name="title" value={this.state.title} onChange={this.handleChange} /> <br />
                    <textarea id="post" className="inputClass" type="text" name="post" value={this.state.post} onChange={this.handleChange}></textarea><br />
                    <button type="submit">Post</button>
                </form>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts.items
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch({ type: FETCH_POSTS }),
        createPost: (payload) => dispatch({ type: CREATE_POST, payload })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);