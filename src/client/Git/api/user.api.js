import { api } from '../../../api/api';

export const getUser = (username) => api.get(`https://api.github.com/users/${username}`)
