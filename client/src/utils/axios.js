import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = process.env.URL_BASE;

export default axios;
