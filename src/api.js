const baseUrl = 'https://reqres.in/api';

export const createPostApi = (data) => (
    fetch(baseUrl + '/users', {
        method: 'post',
        body: JSON.stringify(data)
    })
)

export const getPostsApi = () =>
    fetch(baseUrl + '/users', {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.data;
    });

export const deletePostsApi = (id) =>
    fetch(baseUrl + '/users/' + id, {
        method: 'delete'
    })
export const updatePostsApi = (id) =>
    fetch(baseUrl + '/users/' + id, {
        method: 'put'
    })