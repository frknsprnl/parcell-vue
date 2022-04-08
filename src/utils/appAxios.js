import axios from "axios";

export const appAxios = axios.create({
  baseURL: "https://parcell-deneme.herokuapp.com/api",
  //baseURL: "https://localhost:44398/api",
});
