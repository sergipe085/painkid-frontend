import axios from "axios";

const api = axios.create({
    baseURL: "https://painkid.herokuapp.com/"
})

export default api;