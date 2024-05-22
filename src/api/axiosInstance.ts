import axios, { AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://scraper-otef-it.apps.cluster-67msc.67msc.sandbox2228.opentlc.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;