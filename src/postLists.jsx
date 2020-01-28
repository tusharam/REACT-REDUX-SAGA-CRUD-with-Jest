import React from 'react';
import { connect } from 'react-redux';
import { FETCH_POSTS, UPDATE_POST, DELETE_POST } from "./actionConstants";
class PostLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyvalue: 0,
            title: '',
            post: '',
            id: 0

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    editPost = (key, keyObj) => {
        this.setState({ keyvalue: key, title: keyObj.title, post: keyObj.post, id: keyObj.id });
    }
    updatePost = () => {
        const payload = {
            title: this.state.title,
            post: this.state.post,
            id: this.state.id
        }
        this.props.updatePost(payload);
        this.setState({ keyvalue: 0 })
    }
    render() {
        console.log(this.props)
        const Posts = [];
        for (let key in this.props.posts) {
            let keyObj = this.props.posts[key];
            Posts.push(<React.Fragment key={key}><tr>
                {this.state.keyvalue === key ? <td> <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /> </td>: <td>{keyObj.first_name}</td>}
                {this.state.keyvalue === key ? <td><textarea type="text" name="post" value={this.state.post} onChange={this.handleChange}></textarea></td> : <td>{keyObj.last_name}</td>}
                <td>
                    {this.state.keyvalue === key ? <button type="click" onClick={() => this.updatePost()}>Update</button> :
                        <button type="click" onClick={() => this.editPost(key, keyObj)}>Edit</button>}
                    <button type="click" onClick={() => this.props.deletePost(keyObj)}>Delete</button>
                </td></tr></React.Fragment>)
        }
        return (
            <>
                {this.props.posts.length > 0 && <table>
                    <thead>
                        <tr><th>Title</th><th>Post</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        {Posts}
                    </tbody>
                </table>}
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
        updatePost: (payload) => dispatch({ type: UPDATE_POST, payload }),
        deletePost: (payload) => dispatch({ type: DELETE_POST, payload })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostLists);