import axios from "axios";
import { BASEURL } from "../assets/constants/urls";
const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
