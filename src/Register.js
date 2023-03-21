import React from 'react'
// import './formstyle.css'
// import { userValidation } from './FormValidate'
// import axios from 'axios'; 
import { useState,useEffect } from 'react';
import { RegisterApi } from './services/RegApi';
function Register () {

    const initialValues={fname:'',lname:'',email:'',pno:'',pass:'',cpass:''}
    const[formValues,setFormValues]=useState(initialValues)
    const[formErrors,setFormErrors]=useState({})
    const[hasError,setHasError]=useState(false)
    
    const handleChange=(e)=>{      
        const {name,value}=e.target
        setFormValues({...formValues, [name] :value})
        console.log(formValues)
        
    }  
    const validate = (value)=>{
        const errors={}
        const regex= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if(!value.fname){
            errors.fname="FirstName is required"
        }
        if(!value.lname){
            errors.lname="LasttName is required"
        }
        if(!value.email){
            errors.email="Email is required"
        }
        if(!value.pno){
            errors.pno="Phone number is required"
        }
        if(!value.pass){
            errors.pass="password is required"
        }
        else if(value.pass.length<8){
            errors.pass="password must contain atleast 8 character"
        }
        
        else if(!regex.test(value.pass)){
            errors.pass="Minimum eight characters, at least one letter, one number and one special character"
        }
        if(value.cpass!==""){
        if(value.cpass!==value.pass){
            errors.cpass="password doesn't match!"
        }
    }
        return errors
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setHasError(true)
    }
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && hasError){
            RegisterApi(formValues).then((response)=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[formErrors])
        return (
            <div className='form'>
                <div className='title'>SignUp</div>
                <div className='inputs'>
                    <form onSubmit={handleSubmit}>
                        <label>First Name    </label>
                        <input type='text' placeholder='First Name' name="fname" value={formValues.fname} onChange={handleChange}></input>
                        
                        <p>{formErrors.fname}</p>
                        <label>Last Name    </label>
                        <input type='text' placeholder='Last Name' name="lname" value={formValues.lname} onChange={handleChange} ></input>                   
                        <br/>
                        <p>{formErrors.lname}</p>
                        <label>Email    </label>
                        <input type='email' placeholder="Email"  name="email" value={formValues.email} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.email}</p>
                        <label>PhoneNumber    </label>
                        <input type='text' placeholder='88888-88888' name="pno" value={formValues.pno} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.pno}</p>
                        <label>Password    </label>
                        <input type='password' placeholder="password" name="pass" value={formValues.pass} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.pass}</p>
                        <label>confirmPassword    </label>
                        <input type='password' placeholder="Confirm Password" name="cpass" value={formValues.cpass} onChange={handleChange}></input>
                        <br/>
                        <p>{formErrors.cpass}</p>
                        <br/>
                        <input type='submit' value='Register'/>
                    </form>
                </div>
                

            </div>
        )
        }
        
export default Register