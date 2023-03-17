import axios from "axios"
// import { useEffect, useState } from "react"
axios.defaults.baseURL="http://127.0.0.1:8000/"
const Register_Url="/register"
export const LoginApi=(cred)=>{
    let data={Email:cred.email,Password:cred.pass}
    return axios.post(Register_Url,data)
}

