import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie';
const Signup = () => {

  const [name, setname] = useState('');
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const [alreadyExistEmail, setalreadyExistEmail] = useState(false);
  const [alreadyExistUsername, setalreadyExistUsername] = useState(false)

  const navigate = useNavigate();



  const checkUsername = async(value)=>{
    try {
      if(value === ""){
        return;
      }
      
    const response = await axios.post("https://aenaxy-backend-1.onrender.com/v1/user/checkUsername" ,{
      username:value
    });



    if(response){
      console.log(response)
      if(response.data.data.alreadyExist === true){
        setalreadyExistUsername(true);
      }else{
        setalreadyExistUsername(false);
      }
    }

    } catch (error) {
      console.log(error)
    }
  }


  console.log(alreadyExistUsername)

  const signup = async(e)=>{
    e.preventDefault()
    if(alreadyExistUsername){
      alert("Username already exist");
      return;
    }

    if(name ==='' || username === '' || email === '' || password === ''){
      alert("No fields should be empty");
      return;
    }
    const data = {
      name,
      username,
      email,
      password
    }
    try {
      const response = await axios.post("https://aenaxy-backend-1.onrender.com/api/v1/user/register" , data);
      if(response){
        const cookie = new Cookies();
        
        cookie.set('accessToken', response.data.data.accessToken, {path: '/', expires: new Date(Date.now()+2592000)});
        console.log(response)
        navigate('/createProfile')
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="md:flex ">
      <div className="w-full md:w-[35%] bg-[#f2d282] min-h-screen pt-10">
        <div className="w-[100px] h-[40px] ml-8 mb-3">
          <img
            className="w-full h-full object-cover"
            src="yellowDribble.png"
            alt=""
          />
        </div>
        <div className="text-[#826014] font-bold text-2xl ml-10 leading-tight">
          Discover the world's top <br /> Designers & Creatives.
        </div>
        <div className="w-full ">
          <img
            className="w-full h-full object-cover"
            src="signupimg.png"
            alt=""
          />
        </div>
        <div className=" font-semibold text-[#826014] text-sm h-[40px] ml-8 mb-3">
          Art by <span className=" underline">Peter Tarka</span>
        </div>
      </div>

      <div className="w-full  md:w-[65%]">
        <div className="py-4 px-2 flex justify-end text-sm font-semibold gap-1">
          Already a member? <span className="text-blue-600"> Sign in</span>{" "}
        </div>
        <div className="flex w-full justify-center">
        <div className="flex  items-center flex-col sm:w-[400px]">
          <div className=" my-3 text-2xl font-bold w-full">Sign up to Dribble</div>
          <div className={`w-full  ${(alreadyExistUsername) ? "text-red-600" : "text-green-800"} text-sm my-3 font-semibold `}>
            {""}
            {
              username !== "" && (
                (alreadyExistUsername) ? "• Username has already been taken" : "Username available"
              )
            }
            
          </div>
          <form  onSubmit={signup} className="p-2 flex flex-col gap-8">
            <div className="sm:flex gap-3 justify-between">
              <div className="flex flex-col font-bold">
                Name
                <input
                  className="p-1 bg-gray-200 font-mono rounded-md"
                  type="text"
                  name=""
                  id=""
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </div>
              <div className="flex flex-col font-bold">
                Username
                <input
                  className="p-1 bg-gray-200 font-mono rounded-md"
                  type="text"
                  name=""
                  id=""
                  value={username}
                  onInput={(e)=>{
                    checkUsername(e.target.value)

                  }}
                  onChange={(e)=>{
                    setusername(e.target.value)
                  
                  }}
                />
              </div></div>
              <div className="flex flex-col font-bold">
                Email
                <input
                  className= " p-1 bg-gray-200 w-full font-mono rounded-md"
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e)=>{
                    setemail(e.target.value)
                  }}
                />
              </div>
              <div className="flex flex-col font-bold">
                Password
                <input
                  className=" p-1 bg-gray-200 w-full font-mono rounded-md"
                  type="password"
                  name=""
                  id=""
                  value={password}
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  
                  }}
                />
              </div>
              <div className="">
                <label className="flex">
                  <div className="">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-green-500"
                    />
                  </div>
                  <span className="text-gray-500 ml-2 font-semibold  text-sm leading-tight ">
                    Creating an account means you're okay with our{" "}
                    <span className="text-blue-600">Terms of Service , Privacy Policy ,</span> and our
                    default <span className="text-blue-600">Notification Settings</span>
                  </span>
                </label>
              </div>
              <button type="submit" className=" text-sm py-2 px-5 bg-[#eb4b8a] w-[200px] rounded-xl font-semibold text-white" >
                Create Account
              </button>
              <div className="text-[12px] text-gray-400 leading-tight font-semibold mb-4 ">
                This site is protected by reCAPTCHA and the Google <br /><span className="text-blue-700">Privacy Policy</span> and <span className="text-blue-700">Terms of Service</span> apply.
              </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
