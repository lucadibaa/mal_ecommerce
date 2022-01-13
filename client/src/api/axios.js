import axios from 'axios'

const api = axios.create({
    baseURL: "https://mal-ecommerce.herokuapp.com/api/"
})

export default api
