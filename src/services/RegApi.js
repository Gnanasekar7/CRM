import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:8000/"
const Register_Url="/register"
export const RegisterApi=(inputs)=>{
    let data={FirstName:inputs.fname,LastName:inputs.lname,Email:inputs.email,Password:inputs.pass,Phno:inputs.pno}
    return axios.post(Register_Url,data)
}