import React from "react";
import { useForm } from "react-hook-form";
import addcircle from "../assets/add-circle.svg";
import { useState } from "react";
const FormContainer = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      jobtitle: "",
      company: "",
      date: "",
      location: [],
    },
  });

  return (
    <div className="lg:w-[722px] sm:p-[60px] px-5 py-20 rounded-[16px] border-[2px] border-solid	border-[#D9DDE3] bg-white mx-auto mt-[80px]">
      <h2 className="text-[32px] font-bold leading-[30px] sm:text-left mb-3 text-center">
        My Resume
      </h2>
      <div className="flex sm:flex-row flex-col justify-between items-center ">
        <p className="text-base font-bold mb-3 sm:mb-0">*Work Experience</p>
        <button className="bg-[#021D1F] rounded-[50px] text-white flex items-center justify-center w-[240px] h-[56px] gap-2 text-base font-bold" >
          <img src={addcircle} alt="+" /> Additional Experience
        </button>
      </div>
       {/* Experience form start  */}
      <div className="form-field mt-4">
          <input
            type="text"
            {...register("jobtitle", { required: true })}
            placeholder="Job Title"
            className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"
          />
        </div>
        <div className="form-field mt-4">
          <input
            type="text"
            {...register("company", { required: true })}
            placeholder="Company"
            className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-2">
          <div className="form-field mt-4 sm:w-[50%] w-[100%]">
            <input
              type="date"
              {...register("company", { required: true })}
              placeholder="Company"
              className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"
            />
          </div>
          <div className="form-field mt-4 sm:w-[50%] w-[100%]">
            <select {...register("location")}  className="block  rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium appearance-none location_dropdown">
              <option value="">Select...</option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
            </select>
          </div>    
        </div>
        <div className="form-field mt-4">
            <textarea  {...register("description", { required: true })} id="" cols="30" rows="8" placeholder="Description"  className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"></textarea>
        </div>
          {/* Experience form end  */}
      <div className="flex sm:flex-row flex-col justify-between items-center mt-[50px]">
        <p className="text-base font-bold mb-3 sm:mb-0">*Education</p>
        <button className="bg-[#021D1F] rounded-[50px] text-white flex items-center justify-center w-[240px] h-[56px] gap-2 text-base font-bold">
          <img src={addcircle} alt="+" /> Additional Education
        </button>
      </div>
        {/* education form start  */}
      
      <div className="form-field mt-4">
          <input
            type="text"
            {...register("jobtitle", { required: true })}
            placeholder="Job Title"
            className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"
          />
        </div>
        <div className="form-field mt-4">
          <input
            type="text"
            {...register("company", { required: true })}
            placeholder="Company"
            className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-2">
          <div className="form-field mt-4 sm:w-[50%] w-[100%]">
            <input
              type="date"
              {...register("date", { required: true })}
              placeholder="date"
              className="block bg-[#F2F4F7] rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium"
            />
          </div>
          <div className="form-field mt-4 sm:w-[50%] w-[100%]">
            <select {...register("location")}  className="block  rounded-[32.5px] w-[100%] px-[30px] py-[18px] focus:outline-none text-[#8C95A0] text-base font-medium appearance-none location_dropdown">
              <option value="">Select...</option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
            </select>
          </div>
        </div>
          {/* education form end  */}
      <button className="bg-[#021D1F] sm:ml-auto mt-[150px] rounded-[50px] text-white flex items-center justify-center w-[240px] h-[56px] gap-2 text-base font-bold">
        Update Setting
      </button>
    </div>
  );
};

export default FormContainer;
