import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 0zKCYR6r26gJbFciFeGno9GtsaFgCt3q3rH9euOWf9w'
    },
    
})