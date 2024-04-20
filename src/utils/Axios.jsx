import axios from "axios";

const instance = axios.create({
    baseURL : "https://www.swiggy.com/"
})

export default instance;