import React from 'react'
// import './formstyle.css'
// import { userValidation } from './FormValidate'
// import axios from 'axios'; 
import { useState } from 'react';
import { RegisterApi } from './services/Api';
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
       
       if( inputs.fname === '' ) {
            errors.fname.required = true
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
       if(inputs.pass === '' && inputs.pass.length<8){
        errors.pass.required = true
        hasError=true
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
                        <input type='text' placeholder='First Name' name='fname' onChange={handleInput}></input>
                        {errors.fname.required?
                        (<span className="text-danger" >
                                     First Name is required.
                                </span>):null
                                }                       
                        <br></br>
                        <input type='text' placeholder='Last Name' name='lname' onChange={handleInput} ></input>
                        {errors.lname.required?
                        (<span className="text-danger" >
                                     last Name is required.
                                </span>):null
                                }
                        <br></br>
                        <input type='email' placeholder="Email" name='email' onChange={handleInput}></input>
                        {errors.email.required?
                        (<span className="text-danger" >
                                     Email is required.
                                </span>):null
                                }
                        <br></br>
                        <input type='password' placeholder="password" name='pass' onChange={handleInput}></input>
                        {errors.pass.required?
                        (<span className="text-danger" >
                                     Password is required.
                                </span>):null
                                }
                        <br></br>
                        <input type='password' placeholder="Confirm Password" name='cpass' onChange={handleInput}></input>
                        <br></br>
                        <input type='text' placeholder='88888-88888' name='pno' onChange={handleInput}></input>
                        {errors.pno.required?
                        (<span className="text-danger" >
                                     phNo is required.
                                </span>):null
                                }
                        <br></br>

                        <input type='submit' value='Register'/>
                    </form>
                </div>
                

            </div>
        )
        }
        
export default Reg