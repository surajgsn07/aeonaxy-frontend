import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { SlSocialDribbble } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import axios from 'axios';

const EmailPage = () => {
  const [show, setshow] = useState(true);

  const toggleShow = () => {
    setshow((prev)=>!prev);
  };
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex border-b-[1px]  border-gray-200 justify-between px-4">
        <div className=" items-center flex py-6 px-5 gap-3">
          <div className="text-xl md:hidden" onClick={toggleShow}>
            <BsReverseLayoutTextSidebarReverse />
          </div>
          <div className="flex overflow-hidden h-[25px] w-[80px] gap-6">
            <img
              className="w-full h-full object-cover"
              src="blackDribble.png"
              alt=""
            />
          </div>
          <div className="md:flex hidden items-center gap-6">
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Inspiration
            </div>
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Find Work
            </div>
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Learn Design
            </div>
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Go Pro
            </div>
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Hire Designers
            </div>
          </div>
        </div>
        <div className="justify-center md:flex hidden gap-4 items-center text-gray-500">
          <div className="flex justify-center items-center bg-gray-300 my-8 rounded-lg text-gray-600 gap-2 p-1">
            <IoIosSearch />
            <input
              type="text"
              className="bg-gray-300 w-16"
              placeholder="Search..."
            />
          </div>
          <FaShoppingBag />
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img
              src="woman.webp"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="bg-[#eb4b8b] text-white font-semibold px-8 py-2 rounded-xl">
            Upload
          </div>
        </div>
      </div>


      {show && <div className="justify-start absolute top-25 left-0 flex flex-col  gap-2 min-h-screen bg-gray-200  md:hidden   w-[300px]  px-3 overflow-hidden">
              <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Inspiration
            </div>
            <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              FindWork
            </div>
            <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Learn Design
            </div>
            <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Go Pro
            </div>
            <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Hire Designers
            </div>
            <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Profile
            </div>
            <hr />
            <div className="text-sm font-bold tracking-tighter text-gray-500">
              Upload
            </div>
            
      </div>}

      <div className="w-full text-center min-h-[500px] flex justify-center items-center tracking-tight ">
        <div className="flex  flex-col items-center">
          <div className="font-bold text-3xl text-black">
            Please verify your email...
          </div>
          <div className=" w-[180px] h-[100px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="image.png"
              alt=""
            />
          </div>
          <div className="font-semibold text-gray-500 tracking-tight">
            Please verify your email address. We've send a confirmation email
            to:
          </div>
          <br />
          <div className="text-black font-bold tracking-tight">
            account@frefro.design
          </div>
          <br />
          <div className="text-gray-500 font-semibold">
            Click the confirmation link in that email to begin using Dribble
          </div>
          <br />
          <div className="font-semibold text-center text-gray-500">
            Didn't recieve the email? Check your Spam folder , it may have been
            caught be a filter. If <br /> you still don't see it ,{" "}
            <span className="text-[#eb4b8b] font-bold">
              you can resend the confirmation email
            </span>
          </div>
          <div className="font-semibold text-center text-gray-500">
            Wrong email address?{" "}
            <span className="text-[#eb4b8b] font-bold">Change it.</span>
          </div>
        </div>
      </div>
      <div className="w-full py-16 flex flex-wrap gap-5 justify-around bg-gray-200 text-sm ">
        <div className="flex flex-col gap-5 max-w-[200px]">
        <div className="flex overflow-hidden h-[25px] w-[80px] gap-6">
            <img
              className="w-full h-full object-cover"
              src="pinkDribble.png"
              alt=""
            />
          </div>
          <div className="text-gray-500 leading-tight font-semibold ">
            Dribble is the world's leading community for creatives to share , grow , and get hired
          </div>
          <div className="flex gap-2 text-xl">
          <SlSocialDribbble />
          <TiSocialTwitter />
          <TiSocialFacebook />
          <SlSocialInstagram />
          <SlSocialPintarest />
          </div>

        </div>
        <div className="text-gray-500 flex flex-col gap-2  font-semibold">
          <span className="text-black font-bold">For designers</span>
          Go Pro! <br />
          Explore WorkDesign blog <br />
          Design blog <br />
          Overtime podcast <br />
          Playoffs <br />
          Weekly Warm-Up <br />
          Refer a friend <br />
          Code of conduct <br />
        </div>
        <div className="text-gray-500 flex flex-col gap-2  font-semibold">
          <span className="text-black font-bold">Hire designers</span>
          Post a job opening <br />
          Post a feeelance project <br />
          Search for designers <br />
          <span className="text-black font-bold">Brands</span> 
          Advertise with us <br />
        </div>
        <div className="text-gray-500 flex flex-col gap-2  font-semibold">
          <span className="text-black font-bold">Company</span>
          About <br />
          Careers <br />
          Support <br />
          Media kit <br />
          Testimonials <br />
          API <br />
          Terms of service <br />
          Cookie policy<br />
        </div>
        <div className="text-gray-500 flex flex-col gap-2  font-semibold">
          <span className="text-black font-bold">Directories</span>
          Design jobs <br />
          Designers for hire <br />
          Freelance Designers <br />
          for hire <br />
          Tags <br />
          Places <br />
          <span className="text-black font-bold">Design assets</span>
          Dribble Marketplace  <br />
          Creative Market <br />
          Fontspring <br />
          Font Squirrel <br />
        </div>
        <div className="text-gray-500 flex flex-col gap-2  font-semibold">
          <span className="text-black font-bold">Design Resources</span>
          Freelancing <br />
          Design hiring <br />
          Design Portfolio <br />
          Design Education <br />
          Creative Process <br />
          Design Industry 
          Trends <br />
        </div>

      </div>
    </div>
  );
};

export default EmailPage;
