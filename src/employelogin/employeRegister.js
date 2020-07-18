import React,{useState} from 'react'
import './employeRegister.css'
function EmployeRegister()
{
    const[data,setData]=useState({FullName:'',password:'',confmpassword:'',email:'',gender:'',dob:'',workExperience:'',specilaization:'',Skills:'',salary:'',phone:'',workarea:'',Course:'',Country:'',State:'',City:'',Address:'',resume:''})
    const[error,setError]=useState({FullName:'',password:'',confmpassword:'',email:'',gender:'',dob:'',workExperience:'',specilaization:'',Skills:'',salary:'',phone:'',workarea:'',Course:'',Country:'',State:'',City:'',Address:'',resume:''})

    const validate=()=>
    {
        const error=[]
        if(!data.FullName)
        {
            error.FullName="This field Cannot be Empty!"
        }
        if(!data.password)
        {
            error.password="This field Cannot be Empty!"
        }
        else if(data.password.length<6)
        {
            error.password="Password Must be Greater Than 6 character!"
        }
        if(!data.email)
         {
             error.email="This field Cannot be Empty!"
         }
         else if(!/\S+@\S+\.\S+/.test(data.email))
         {
             error.email="E-mail Address is Invalid!"
         }
         if(!data.confmpassword)
         {
             error.confmpassword="This field Cannot be Empty!"
         }
         else if(data.confmpassword!==data.password)
         {
             error.confmpassword="Please Enter The Correct Password!"
         }
         if(!data.gender)
         {
             error.gender="This field Cannot be Empty!"
         }
         if(!data.dob)
         {
             error.dob="This field Cannot be Empty!"
         }
         if(!data.Country)
         {
             error.Country="This field Cannot be Empty!"
         }
         if(!data.State)
         {
             error.State="This field Cannot be Empty!"
         }
         if(!data.City)
         {
             error.City="This field Cannot be Empty!"
         }
         if(data.Address==="")
         {
             error.Address="This field Cannot be Empty!"
         }
         if(!data.specilaization)
         {
             error.specilaization="This field Cannot be Empty!"
         }
         if(!data.Skills)
         {
             error.Skills="This field Cannot be Empty!"
         }
         if(!data.salary)
         {
             error.salary="This field Cannot be Empty!"
         }
         else if(isNaN(data.salary))
         {
             error.salary="Salary Must Be in Digits!"
         }
         if(!data.phone)
         {
             error.phone="This field Cannot be Empty!"
         }
         else if(data.phone.length<10)
         {
             error.phone="Invalid Mobile Number!"
         }
         else if(data.phone.length>10)
         {
             error.phone="Invalid Mobile Number!"
         }
         else if(isNaN(data.phone))
         {
             error.phone="Mobile Number Must be in Digits!"
         }
         else if((data.phone.charAt(0)!=9) && (data.phone.charAt(0)!=8) && (data.phone.charAt(0)!=7) && (data.phone.charAt(0)!=6))
         {
             error.phone="Mobile Number Must Start with 9,8,7,6"
         }
         if(!data.workarea)
         {
             error.workarea="This field cannot be Empty!"
         }
         if(!data.workExperience)
         {
             error.workExperience="This field cannot be Empty!"
         }
         if(!data.Course)
         {
             error.Course="This field Cannot be Empty!"
         }
         if(!data.resume)
         {
             error.resume="This field Cannot be Empty!"
         }
         return error
    }
    const handleSubmit=(e)=>
    {
        setError(validate(data))
          e.preventDefault()
    }
    const handleChange=(event)=>
    {
        const {name,value}=event.target
        setData({
            ...data,[name]:value
        })
    }
    return(
        <div>
        <form onSubmit={handleSubmit} noValidate className="Register-box">

            <h2>Register</h2>

            <hr/>

            <label>Full Name</label>
            <br/>
            <input className="text-field" type="text" placeholder="FullName" value={data.FullName} name="FullName" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.FullName}</p>
            </div>
            <br/>


            <label>E-mail</label>
            <br/>
            <input className="text-field" type="email" placeholder="Email" value={data.email} name="email" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.email}</p>
            </div>
            <br/>


            <label>Password</label>
            <br/>
            <input className="text-field" type="password" placeholder="Password" value={data.password} name="password" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.password}</p>
            </div>
            <br/>


            <label>Confirm Password</label>
            <br/>
            <input className="text-field" type="password" placeholder="Confm Password" value={data.confmpassword} name="confmpassword" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.confmpassword}</p>
            </div>
            <br/>


            <label>Gender:</label>
            <br/>
             <label style={{fontSize:"18px",fontWeight:"500"}}>Male</label>
            <input type="radio" name="gender" value="male" checked={data.gender==="male"} onChange={handleChange}/>
          

            <label style={{fontSize:"18px",fontWeight:"500"}}>Female</label>
            <input type="radio" value="Female" name="gender" checked={data.gender==="Female"} onChange={handleChange}/>
        
            <label style={{fontSize:"18px",fontWeight:"500"}}>Other</label>
            <input type="radio" name="gender" value="other" checked={data.gender==="other"} onChange={handleChange}/>
            <br/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.gender}</p>
            </div>
            <br/>


            <label>Date of Birth</label>
            <br/>
            <input className="text-field" style={{fontSize:"16px"}} type="date" value={data.dob} name="dob" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.dob}</p>
            </div>
            <br/>


            <label>Country</label>
            <br/>
            <input className="text-field" type="text" placeholder="Country" value={data.Country} name="Country" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.Country}</p>
            </div>
            <br/>
             
            <label>State/Region</label>
            <br/>
            <input className="text-field" type="text" placeholder="State" value={data.State} name="State" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.State}</p>
            </div>
            <br/>

             <label>City</label>
             <br/>
            <input className="text-field" type="text" placeholder="City" value={data.City} name="City" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.City}</p>
            </div>
            <br/>


            <label>Address:</label>
            <br/>
             <textarea style={{fontSize:"17px"}} cols="70" rows="5" placeholder="Current Address" name="Address" value={data.Address} onChange={handleChange}>
             </textarea>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.Address}</p>
            </div>
            <br/>


            <label>Course:</label>
            <select name="Course" value={data.Course} onChange={handleChange}>
                <option value="">--Choose--</option>
                <option value="BE/B.Tech">BE/B.Tech</option>
                <option value="ME/M.Tech">ME/M.Tech</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.Com/M.Com">B.Com/M.Com</option>
                <option value="BSc/MSc">BSc/MSc</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="BEd">BEd</option>
                <option value="CA">CA</option>
                <option value="M Phil/Ph.D">M Phil/Ph.D</option>
                <option value="MS">MS</option>
                <option value="Diploma">Diploma</option>
                <option value="PG Diploma">PG Diploma</option>
                <option value="No Education/Schooling">No Education/Schooling</option>
                <option value="BCA/MCA">BCA/MCA</option>
                <option value="Other Graduate">Other Graduate</option>
            </select>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.Course}</p>
            </div>


            <label>Position You Are Applying For</label>
            <br/>
            <input className="text-field" type="text" placeholder="Specilaization" value={data.specilaization} name="specilaization" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.specilaization}</p>
            </div>

            <label>Technical Skills:</label>
            <br/>
             <textarea style={{fontSize:"17px"}} cols="50" rows="5" placeholder="Enter Two or More Skills..." name="Skills" value={data.Skills} onChange={handleChange}>
             </textarea>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.Skills}</p>
            </div>
            <br/>

            <label>Work Experience:</label>
            <select name="workExperience" value={data.workExperience} onChange={handleChange}>
                <option value="">--Choose--</option>
                <option value="Fresher">Fresher</option>
                <option value="1-3Years">1-3Years</option>
                <option value="3-7Years">3-7Years</option>
                <option value="7-12Years">7-12Years</option>
                <option value="12-16Years">12-16Years</option>
                <option value="Above 16Years">Above 16Years</option>
            </select>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.workExperience}</p>
            </div>

            <label>Salary Requirements</label>
            <br/>
            <input className="text-field" type="text" placeholder="Lac per Annum" value={data.salary} name="salary" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.salary}</p>
            </div>


             <label>Are you willing to relocate?</label>
            <br/> 
            <label style={{fontSize:"18px",fontWeight:"500"}}>Yes</label> 
             <input type="radio" value="Yes" name="workarea" checked={data.workarea==="Yes"} onChange={handleChange}/>

             <label style={{fontSize:"18px",fontWeight:"500"}}>NO</label>
             <input type="radio" value="No" name="workarea" checked={data.workarea==="No"} onChange={handleChange}/>

             <label style={{fontSize:"18px",fontWeight:"500"}}>Not Sure</label>
             <input type="radio" value="Not Sure" name="workarea" checked={data.workarea==="Not Sure"} onChange={handleChange}/> 
            <div className="register-error">
                     <p style={{color:"red"}}>{error.workarea}</p>
            </div>


            <label>Resume</label>
            <input type="file" name="resume" accept='.docx' onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.resume}</p>
            </div>
            <br/>


            <label>Contact Number</label>
            <br/>
            <input className="text-field" type="text" placeholder="Mobile Number" value={data.phone} name="phone" onChange={handleChange}/>
            <div className="register-error">
                     <p style={{color:"red"}}>{error.phone}</p>
            </div>
             <br/>


            <button className="Register-btn" type="submit">Register</button>
        </form>
        </div>
    )
}
export default EmployeRegister