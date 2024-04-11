import React, { useState, useRef } from "react";
import { TbCamera } from "react-icons/tb";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const CreateProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [location, setlocation] = useState('')

  const navigate = useNavigate()

  const changeAvatar = async () => {
    try {
      
      const accessToken = localStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    formData.append("headers", accessToken);
    formData.set("Authorization", `Bearer ${accessToken}`);
    console.log(formData)


    const data = {
      avatar:selectedFile,
      
      headers:{
        Authorization:`Bearer ${accessToken}`
    }
    }
    
  console.log(data)


    const response = await axios.post(
      "https://aenaxy-backend.onrender.com/api/v1/user/setAvatar",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if(response){
      setSelectedFile(response.data.data.avatar)
    }
    } catch (error) {
      console.log(error);
    }
  };


  const setLocation =async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      
    const location1 = document.getElementById("location").value;
    console.log(location1)
      formData.append("location" , location1);
      console.log(formData)
      

      const accessToken = localStorage.getItem("accessToken")
      
  console.log(accessToken)
  const data = {
    location,
    
    headers:{
      Authorization:`Bearer ${accessToken}`
  }
  }

      
      const response = await axios.post(
        "https://aenaxy-backend.onrender.com/api/v1/user/setLocation",
        data,
        {
          withCredentials: true,
        }
      );
      

      console.log(response);
      if(selectedFile && response){
        navigate("/select");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
    changeAvatar();
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full min-h-screen p-2">
      <div className="w-full py-7">
        <div className="w-[100px] h-[40px] ml-8 mb-3">
          <img
            className="w-full h-full object-cover"
            src="pinkDribble.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center">
        <div className="md:w-[600px] flex flex-col gap-7">
          <div className="text-[35px] font-bold tracking-tight ">
            Welcome! Let's create your profile
          </div>
          <div className="text-gray-500 font-semibold my-3 tracking-tight">
            Let others get to know you better! You can do these later{" "}
          </div>

          {/* avatar */}
          <div>
            <div className="text-lg font-extrabold my-6">Add an avatar</div>
            <div className="flex gap-4">
              <div className="">
                {" "}
                <div
                  className="w-[150px] h-[150px] border-[1px] overflow-hidden  outline-dashed rounded-full flex items-center justify-center text-2xl text-gray-400 "
                  onClick={handleButtonClick}
                >
                  
                  { selectedFile ?  <img src={selectedFile} className="w-full h-full object-cover" alt="" /> : (<div className="text-gray-500  ">
                    <TbCamera />
                  </div>)}
                  
                </div>
              </div>
              <div className="ml-8">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                  style={{ display: "none" }}
                />

                <div
                  className="text-sm font-bold border-[1px] p-2 rounded-md text-gray-400"
                  onClick={handleButtonClick}
                >
                  <span className="text-black">Choose image</span>
                </div>
                <div className="text-sm text-gray-400  font-bold tracking-tight my-4">
                  {">"} Or choose one of our defaults
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="text-lg font-extrabold my-6">Add your location</div>
            <div className="w-full">
              <input
                type="text"
                className="border-b-[1px] border-gray-400 font-semibold w-full p-2"
                placeholder="Enter a location"
                value={location}
                id="location"
                onChange={(e)=>setlocation(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={setLocation}
            className=" text-sm py-2 px-5 mb-4 bg-[#eb4b8a] w-[200px] rounded-xl font-semibold text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
