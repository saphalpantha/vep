import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
const Sucess = () => {
  return (
    <div className="px-[2rem] mt-[2rem]  max-w-6xl mx-auto">
      <Logo />
      <div className="flex flex-col justify-center items-center justify-between space-y-5 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Account created Successfully!!!
        </h1>
        <span className="text-slate-600 text-xl">
          You can login to your account through the credentials created.
        </span>
        <Link
          href="/"
          className="tracking-wide font-light text-[#BF13BF]  font-semibold font-3xl"
        >
          LOGIN NOW
        </Link>
        <div className="w-1/3">
          <img
            className="w-[100%] h-[100%]"
            src="/images/sucess_logo.svg"
          ></img>
        </div>
        <div className="flex space-x-5">
          <div className="w-[2rem] h-[2rem]">
            <img
              className="w-[100%] h-[100%]"
              src="/images/warning.svg"
            ></img>
          </div>
          <span className="text-slate-600 text-xl">
            Account verification is pending, you can verify your account through
            the mail sent to your email.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
