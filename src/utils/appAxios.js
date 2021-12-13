import axios from "axios";

export const appAxios = axios.create( {
    //baseURL : "https://parcellbackendapi.azure-api.net/v1",
    baseURL: "https://localhost:44398/api",
}) 