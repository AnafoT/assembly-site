import axios from "axios";

const _Axios = axios.create({
  baseURL: process.env.STAGE === "dev" ? "http://localhost:2358" : process.env.PROD_URL,
  headers: {
    "X-Auth-Token": process.env.STAGE === "dev" ? "admin" : process.env.AUTHN_TOKEN,
    "X-Auth-User": process.env.STAGE === "dev" ? "admin" : process.env.AUTHZ_TOKEN
  }
});

export default _Axios;
