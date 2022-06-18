import axios from 'axios'

export const apiPost = axios.create({
    baseURL: 'http://localhost:3333'
})

// export const apiGet = axios.get({
//     baseURL: import.meta.env.VITE_API_URL,
// })