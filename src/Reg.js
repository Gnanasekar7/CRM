import React from 'react'
// import './formstyle.css'
// import { userValidation } from './FormValidate'
// import axios from 'axios'; 
import { useState } from 'react';
import { RegisterApi } from './services/RegApi';
function Reg () {

    const initialStateErrors = {
        fname:{required:false},
        lname:{required:false},
        email:{required:false},
        pass:{required:false},
        cpass:{required:false},
        pno: {required:false},       
    }
    const [errors,setErrors] = useState(initialStateErrors);

    const handleSubmit=(event)=>{
        event.preventDefault() 
       let hasError = false
       let errors=initialStateErrors 
       let regularExpression= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
       
       if( inputs.fname === ''
    //     && inputs.lname === '' && inputs.email === '' && inputs.pass === '' 
    //    && inputs.pass === '' && inputs.cpass === '' && inputs.pno === '')
        ) {
            errors.fname.required = true
            // errors.lname.required = true
            // errors.email.required = true
            // errors.pass.required = true
            // errors.cpass.required =true
            // errors.pno.required = true


            hasError=true
       }
       if(inputs.lname === ''){
            errors.lname.required = true
            hasError=true
       }
       if(inputs.email === ''){
        errors.email.required = true
        hasError=true
       }
       if(inputs.pass === '' ){
        errors.pass.required = true
        hasError=true
       }
       
       if( inputs.pass !==''  ){
       if(!regularExpression.test(inputs.pass) ){
       
        alert("password should contain atleast one number and one special character")
        hasError=true
       }
    }

       if(inputs.cpass === ''){
        errors.cpass.required =true
        hasError=true
       }
       if(inputs.pno === ''){
        errors.pno.required = true
        hasError=true
       }
       setErrors(errors)
       if(!hasError){
        //sending api request
        RegisterApi(inputs).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
       }
    }

    const[inputs,setInputs]=useState({
        fname:'',
        lname:'',
        email:'',
        pass:'',
        cpass:'',
        pno: '',  
    })
      
    const handleInput=(event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }
    // console.log(inputs.pass.length)
        return (
            <div className='form'>
                <div className='title'>SignUp</div>
                <div className='inputs'>
                    <form onSubmit={handleSubmit}>
                        <label>First Name    </label>
                        <input type='text' placeholder='First Name' name='fname' onChange={handleInput}></input>
                        <br/>
                        {errors.fname.required?
                        (<span className="text-danger" >
                                     First Name is required.
                                </span>):null
                                }                       
                        <br/>
                        <label>Last Name    </label>
                        <input type='text' placeholder='Last Name' name='lname' onChange={handleInput} ></input>
                        <br/>
                        {errors.lname.required?
                        (<span className="text-danger" >
                                     last Name is required.
                                </span>):null
                                }
                        <br/>
                        <label>Email    </label>
                        <input type='email' placeholder="Email" name='email' onChange={handleInput}></input>
                        <br/>
                        {errors.email.required?
                        (<span className="text-danger" >
                                     Email is required.
                                </span>):null
                                }
                        <br/>
                        <label>PhoneNumber    </label>
                        <input type='text' placeholder='88888-88888' name='pno' onChange={handleInput}></input>
                        <br/>
                        {errors.pno.required?
                        (<span className="text-danger" >
                                     phNo is required.
                                </span>):null
                                }
                        <br/>
                        <label>Password    </label>
                        <input type='password' placeholder="password" name='pass' onChange={handleInput}></input>
                        <br/>
                        {errors.pass.required?
                        (<span className="text-danger" >
                                     Password is required.
                                </span>):null
                                }
                        <br/>
                        <label>confirmPassword    </label>
                        <input type='password' placeholder="Confirm Password" name='cpass' onChange={handleInput}></input>
                        <br/>
                        <br/>
                        <input type='submit' value='Register'/>
                    </form>
                </div>
                

            </div>
        )
        }
        
export default Reg