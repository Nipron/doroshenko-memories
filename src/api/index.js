import axios from 'axios';

const url = 'https://slots-city.herokuapp.com/posts';
//const url = 'http://localhost:5000';

export const ssEvents = new EventSource(`${url}/stream`, { withCredentials: true });

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);