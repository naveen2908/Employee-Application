import React,{useState} from 'react'
import './employeLogin.css'
function EmployeLogin()
{
    const [values,setValues]=useState({email:'',password:''})
    const [error,setError]=useState({username:'',password:''})


    const changeHandler=(event)=>
    {
        const {name,value}=event.target
        setValues({
            ...values,[name]:value
        })
    }

    const validate=()=>
        {
    const error=[]
       
    if(!values.email)
    {
       error.email="This Field Cannot be Empty!"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
    error.email="Invalid E-mail Address!"
    }

  if(!values.password)
  {
      error.password="This Field Cannot be Empty!"
  }
   else if(values.password.length<8)
  { 
    error.password="Password Must be Greater than 8 Character!"
  }

  return error   
}
      const handleSubmit=(e)=>
      {
         setError(validate(error))
        e.preventDefault();
      }
    
    return(
        <div >
          <form noValidate onSubmit={handleSubmit} className="Login-box" >
            <h2>Login</h2>  
            <label>E-mail</label>
            <br/>
            <input className="Text-field" type="text" placeholder="E-mail" value={values.email} name="email" onChange={changeHandler} />
            <div className="login-error">
                <p style={{color:"red"}}>{error.email}</p>
            </div>
            <br/>
             <label>Password</label>
             <br/>
             <input className="Text-field" type="password"  placeholder="Password" value={values.password} name="password" onChange={changeHandler}/>
             <div className="login-error">
             <p style={{color:"red"}}>{error.password}</p>
            </div>
             <br/>
             <button className="Login-btn" type="submit">Login</button>
          </form>
        </div>
    )
}
export default EmployeLogin 