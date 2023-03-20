import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const initialCredErrors={
        email:{required:false},
        pass:{required:false}
    }
    const[errors,setErrors]=useState(initialCredErrors)

   
    const[recieved,setData]=useState(null)
        useEffect(()=>{           
            fetch("http://127.0.0.1:8000/register")
            .then((data)=>{
                setData(data)               
            })
            .catch(err=>console.log(err))
        },[])
        const handleLogin=()=>{
            var  hasError=false
            if(recieved.Email !== cred.email){
                errors.email.required=true
                hasError=true
            }
            if(recieved.Password!==cred.pass){
                errors.email.required=true
                hasError=true
            }
            setErrors(errors)
            if(!hasError){
                console.log('logged in')
            }
        }

       const [cred,setCred]=useState({
        email:'',
        pass:''
    })
    const handleCred=(event)=>{
        setCred({...cred,[event.target.name]:event.target.value})
    }
  return (
        <div className='form'>
                <div className='title'>Login</div>
                <div className='cred'>
                    <form onSubmit={handleLogin}>
                <label>email    </label>
                        <input type='email' placeholder="email" name='email' onChange={handleCred}></input>
                        {errors.email.required?
                        (<span className='text-danger'>
                            email already exists
                        </span>):null}
                        <br/>
                        <label>Password    </label>
                        <input type='password' placeholder="password" name='pass' onChange={handleCred}></input>
                        {errors.email.required?
                        (<span className='text-danger'>
                            Password doesn't matches
                        </span>):null}
                        <br/>
                        <br/>
                        <br/>
                        <input type='submit' value='Log In'/>
                        </form>
                    </div>
          <br/>         
        <div><Link to="/Register">NewUser ? SignUp</Link></div>
    </div>
  )
}

export default Login