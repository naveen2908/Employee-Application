import React,{useState} from 'react'
import './mainform.css'
import EmployeLogin from './employeLogin'
import EmployeRegister from './employeRegister'
function Mainform()
{
    const [showpage,setShowpage]=useState({login:true,Register:false})
    const handleClickLogin=()=>
    {
        setShowpage({
           login:true,Register:false
       })
    }
    const handleClickRegister=()=>
    {
        setShowpage({
            login:false,Register:true
        })
    }
    return(
        <div>
             <h1 style={{textAlign:"center"}}>Employment Application</h1>
              <div >
                  <header className="page-Select">
                      <h3 className="login" onClick={handleClickLogin}>Login</h3>
                      <h3 className="Register" onClick={handleClickRegister}>Register</h3>
                  </header> 
                  <div className="Login-Register">
                  {showpage.login&&<EmployeLogin/>}
                  {showpage.Register&& <EmployeRegister/>}
                  </div>
               
              </div>
        </div>
        
    )
}
export default Mainform