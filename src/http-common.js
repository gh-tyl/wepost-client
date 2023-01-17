import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8888/react/wepost-api/src/users",
    header:{

    }
})