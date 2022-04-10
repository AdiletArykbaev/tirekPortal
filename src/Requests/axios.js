import axios from "axios";

export default axios.create({
    baseURL: "https://tirek-backend.herokuapp.com"
})