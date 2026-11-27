import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerschema } from '../components/FormSchema/registerschema.js'

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [logindata, setFormdata]= useState({
    username:"",
    password:""
  })
  function handlechange(e){setFormdata({
    ... logindata,
    [e.target.name]:e.target.value})}
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const registerdata = location.state;
    console.log("login page",logindata)
    if (logindata.username===registerdata.name && logindata.password===registerdata.password){
      console.log("if success")
      navigate("/dashboard")
    }else{}
  }

  return (
    <>
      <div className="text-orange-500 text3xl">TextIPutHere</div>
      <form onSubmit={handlesubmit}>
        <input type="text" required placeholder="Enter your username" name="username"  onChange={handlechange}></input>
        <input type="password" required placeholder="Enter your password" name="password"  onChange={handlechange}></input>
        <button type="submit">submit</button>
      </form>
    </>
  )
}
export default Login;