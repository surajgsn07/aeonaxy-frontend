import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
// 
import axios from 'axios'

// 

const Select = () => {
  const [purpose, setpurpose] = useState('');
  const [selected, setselected] = useState(0);
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const set = (val)=>{
    setpurpose(val);
  }


  const setData = async()=>{
    if(selected === 0){
      alert("Select one field")
      return;
    }

    const data = {
      purpose,
      
      headers:{
        Authorization:`Bearer ${accessToken}`
    }
    }
    try {
      const response = await axios.post("https://aenaxy-backend-1.onrender.com/v1/user/setPurpose" ,data,{
        withCredentials:true
      });
      console.log(response)
      if(response){
        try {
          const response = await axios.post("https://aenaxy-backend-1.onrender.com/api/v1/user/sendEmail" ,data,{
            withCredentials:true
          });
          if(response){
            navigate("/email")
          }
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen w-full">
      <div className="w-full py-7 flex ">
        <div className="w-[100px] h-[40px] ml-8 mb-3">
          <img
            className="w-full h-full object-cover"
            src="pinkDribble.png"
            alt=""
          />
        </div>
        <div onClick={()=>{
          navigate("/createProfile")
        }} className="px-3 border-[1px] h-8 bg-gray-200 rounded-md font-semibold ">
          {"<"}
        </div>
      </div>

      <div className="w-full min-h-screen flex justify-center p-2 ">
        <div className="md:w-[650px] flex flex-col items-center">
          <div className="text-[35px] font-bold tracking-tight flex ">
            What brings you to Dribble?
          </div>
          <div className="text-gray-500 font-semibold my-3 tracking-tight flex justify-center">
            Select the option that best describe you.Don't worry, you can
            explore other options later{" "}
          </div>
          <div className="md:flex gap-8">
            <div onClick={()=>{
              setselected(1);
              set("To share my work")
            }}  className={` mt-16 w-[220px] h-[220px] border-[1px] ${selected === 1 ? "border-pink-700 border-2" : "border-gray-300"} border-gray-300 rounded-xl relative overflow-hidden hover:overflow-visible hover:ease-in-out duration-600 transition
            `}>
              <div className=" transition hover:ease-in-out duration-600 hover:absolute hover:top-[-70px] ">
              <div className="w-full h-[150px] bg-black">
                <img
                  className="h-full w-full object-cover"
                  src="1.png"
                  alt=""
                />
              </div>
              <div className="font-extrabold leading-none p-0 text-center tracking-tight ">
                I'm a designer looking to share my work{" "}
              </div>
              
              <div className="text-sm leading-none pt-2 text-center font-semibold text-gray-500">
                With over 7 million shots from  a vast community of designers, Dribble is the leading source for design inspiration
              </div>
              
              </div>
              <div className="flex justify-center p-2 text-gray-400 absolute bottom-0 z-20 bg-white  w-full rounded-xl">
                {
                  selected === 1 ? (

                    <span className="text-[#eb4b8b]"><FaCircleCheck /></span>
                  ):(

                    <FaRegCircle />
                  )
                }
              </div>
            </div>
            <div onClick={()=>{
              setselected(2);
              set("Tp hire a designer")
            }} className={` mt-16 w-[220px] h-[220px] border-[1px] ${selected === 2 ? "border-pink-700 border-2" : "border-gray-300"} border-gray-300 rounded-xl relative overflow-hidden hover:overflow-visible hover:ease-in-out duration-600 transition
            `}>
              <div className=" transition hover:ease-in-out duration-600 hover:absolute hover:top-[-70px] ">
              <div className="w-full h-[150px] bg-black">
                <img
                  className="h-full w-full object-cover"
                  src="2.png"
                  alt=""
                />
              </div>
              <div className="font-extrabold leading-none p-0 text-center tracking-tight ">
              I'm looking to hire a designer{" "}
              </div>
              
              <div className="text-sm leading-none pt-2 text-center font-semibold text-gray-500">
                With over 7 million shots from  a vast community of designers, Dribble is the leading source for design inspiration
              </div>
              
              </div>
              <div className="flex justify-center p-2 text-gray-400 absolute bottom-0 z-20 bg-white  w-full rounded-xl">
              {
                  selected === 2 ? (

                    <span className="text-[#eb4b8b]"><FaCircleCheck /></span>
                  ):(

                    <FaRegCircle />
                  )
                }
              </div>
            </div>
            <div onClick={()=>{
              setselected(3);  
              set("To look for designe inspiration")
            }} className={` mt-16 w-[220px] h-[220px] border-[1px] ${selected === 3 ? "border-pink-700 border-2" : "border-gray-300"} border-gray-300 rounded-xl relative overflow-hidden hover:overflow-visible hover:ease-in-out duration-600 transition
            `}>
              <div className=" transition hover:ease-in-out duration-600 hover:absolute hover:top-[-70px] ">
              <div className="w-full h-[150px] bg-black">
                <img
                  className="h-full w-full object-cover"
                  src="3.png"
                  alt=""
                />
              </div>
              <div className="font-extrabold leading-none p-0 text-center tracking-tight ">
              I'm looking for a design inspiration{" "}
              </div>
              
              <div className="text-sm leading-none pt-2 text-center font-semibold text-gray-500">
                With over 7 million shots from  a vast community of designers, Dribble is the leading source for design inspiration
              </div>
              
              </div>
              <div className="flex justify-center p-2 text-gray-400 absolute bottom-0 z-20 bg-white  w-full rounded-xl">
              {
                  selected === 3 ? (

                    <span className="text-[#eb4b8b]"><FaCircleCheck /></span>
                  ):(

                    <FaRegCircle />
                  )
                }
              </div>
            </div>
            
          </div>
          <div className="flex flex-col items-center text-sm gap-2 mt-6 tracking-tighter font-bold ">
            <div>Anything else? you can select multiple</div>
            <div onClick={setData} className=" rounded-lg bg-[#eb4b8b] text-white px-12 py-1">Finish</div>
            <div className="text-[13px] font-bold tracking-tighter text-gray-400">or Press RETURN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
