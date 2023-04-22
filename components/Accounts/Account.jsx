import Link from "next/link";
import React from "react";

const MyDetails = () => {
  return (
    <div className="h-[100vh] justify-between  space-y-10 py-[2rem] w-[60rem] pl-[5rem] pb-[1rem]" >
      <div className="flex flex-col justify-between space-y-7 ">
        <h1 className="text-[#787878]">Log in credendtials</h1>
        <div className="flex flex-col space-y-1">
          <h1>Phone Number</h1>
          <span>+234 1234567890</span>
        </div>
        <div className="flex flex-col space-y-2">
          <h1>Email ID</h1>
          <span>abhijeetmohapatra@gmail.com</span>
        </div>
        <div>
          <Link className="text-[#BF13BF] font-semibold" href="/">
            Change Password
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-7 mt-[2rem]">
        <h1 className="text-[#787878]">Basic Details</h1>
        <h1>Abhijeet Mohapatra</h1>
        <div className="flex space-x-2">
          <span>Date of Birth : </span>
          <span>11/11/2023</span>
        </div>
        <div>
          <div className="flex space-x-2">
            <span>Nationality :</span>
            <span>Indian</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between  mt-[2rem]">
        <div className="flex flex-col justify-between space-y-5">
          <h1 className="text-[#787878]">Bussiness Details</h1>
          <h1>eLitmus</h1>
          <h1>Private Limited</h1>
          <div className="flex space-x-2">
            <span>Primary Currency :</span>
            <span>USD</span>
          </div>
          <div className="max-w-sm">307, B block, Habitat Green apartment, Lane 7c, 751031</div>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
