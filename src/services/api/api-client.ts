import axios from "axios";
const BASE_URL = "https://pos-frontend-next-ruby.vercel.app/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
