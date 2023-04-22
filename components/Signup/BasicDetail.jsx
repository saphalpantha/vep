import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import RadioButtons from "../UI/Radios";
const BasicDetail = () => {
  const [checked, SetChecked] = useState(false)
  const termsHandler = () => {
    SetChecked(prev => !prev)
  }
  return (
    <div>
      <div className=" relative max-w-6xl flex flex-col md:flex-row mx-auto justify-between  px-2 mt-[1rem] space-y-10 md:space-y-0">
        <div className="flex flex-col justify-between space-y-5">
          <Logo />
          <h1 className="text-2xl md:text-3xl font-bold">Basic Details</h1>
          <span>Account will be used by/for</span>
          <div className="flex space-x-2">
              <RadioButtons/>
          </div>
          <span>Set your wallets primary currency</span>
          <select
            placeholder="Select Currency"
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
          >
            <option value="Select Currency" placeholder="Select Currency">
              Select Currency
            </option>
            <option value="NPR" placeholder="Select Currency">
              NPR
            </option>
            <option value="INR" placeholder="Select Currency">
              INR
            </option>
            <option value="US" placeholder="Select Currency">
              US
            </option>
          </select>

          <span>Provide all your required details for your account.</span>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="text"
            placeholder="Enter your First Name"
          ></input>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="text"
            placeholder="Enter your Last Name"
          ></input>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] placeholder:text-slate-300 "
            type="date"
            placeholder="Enter your Date of birth (dd/mm/yyyy)"
          ></input>
          <select
            placeholder=""
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
          >
            <option value="" placeholder="Select Currency">
              Select Nationality
            </option>
            <option value="Neplease">Neplease</option>
            <option value="Indian" placeholder="Indian">
              Indian
            </option>
            <option value="US" placeholder="American">
              American
            </option>
          </select>

          <div className="space-x-2">
            <input onClick={termsHandler} type="checkbox"></input>
            <span className="text-light">
              I have read and I agree to the{" "}
              <span className="text-[#BF13BF] font-2xl">
                Terms and Conditions
              </span>
              , and the
              <span className="text-[#BF13BF] font-2xl"> Privacy Policy.</span>
            </span>
          </div>
        </div>










        <div className="hidden md:flex w-[40rem] h-0 border border-[2px] border-[#F2F2F2]  rotate-90 absolute top-[55%] left-[30%]"></div>


        <div className="flex flex-col justify-between space-y-3 md:space-y-0 md:pb-10 pb-0 pb-6">
          <span>Provide your business address:</span>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2]"
            type="text"
            placeholder="Address line 1"
          ></input>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="text"
            placeholder="Address line 2"
          ></input>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="text"
            placeholder="Street"
          ></input>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="text"
            placeholder="City/Town"
          ></input>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="text"
            placeholder="State"
          ></input>
          <select
            placeholder=""
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
          >
            <option value="" placeholder="Select Country">
              country
            </option>
            <option value="Neplease">Nepal</option>
            <option value="Indian" placeholder="Indian">
              India
            </option>
            <option value="US" placeholder="American">
              America
            </option>
          </select>
          <input
            className="w-[400px] h-[48px] rounded-md px-3 bg-[#F2F2F2] "
            type="number"
            placeholder="Pincode"
          ></input>
            {<Link href={`${checked ? '/signup/few-steps' : '/' }`}><button disabled={!checked} className={`w-[400px] h-[48px] rounded-md px-3 bg-[#BF13BF] text-white tracking-wide hover:bg-[#BF13AC] ${!checked && 'bg-gray-300 hover:bg-gray-300'}`} type='password' placeholder='Set Password'  >Next</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default BasicDetail;
