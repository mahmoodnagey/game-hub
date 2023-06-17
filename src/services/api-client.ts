import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0c69a1ff8244422f919d1e8a293df7d8'
    }
})