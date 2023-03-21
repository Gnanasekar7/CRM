import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:8000/"
const Register_Url="/register"
export const RegisterApi=(formValues)=>{
    let data={FirstName:formValues.fname,LastName:formValues.lname,Email:formValues.email,Password:formValues.pass,Phno:formValues.pno}
    return axios.post(Register_Url,data)
}
