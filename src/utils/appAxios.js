import axios from "axios";

export const appAxios = axios.create( {
    baseURL : "https://parcellbackendapi.azure-api.net/v1",
}) 