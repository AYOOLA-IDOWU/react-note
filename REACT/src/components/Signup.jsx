import React, { useState } from 'react'

const Signup = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allStudent, setallStudent] = useState([])

    const signup=()=>{
let student ={
  firstName,
  lastName,
  email,
  password
}
setallStudent([...allStudent,student])
setfirstName("");
setlastName("");
setemail("");
setpassword("");
    }
  return (
    <div>
        <input type="text" placeholder='firstname' onChange={()=> setfirstName(e.target.value)} />
        <input type="text" placeholder='lastname' onChange={()=> setlastName(e.target.value)}/>
        <input type="text" placeholder='email' onChange={()=> setemail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={()=> setpassword(e.target.value)}/>
        <button onClick={signup}>SUBMIT</button>


<>
{allStudent.map((student, index)=>{
  <>
  <h1>{student.firstName}</h1>
  <h1>{student.lastName}</h1>
  <h1>{student.email}</h1>
  <h1>{student.password}</h1>
  </>
})}
</>
    </div>
  )
}

export default Signup