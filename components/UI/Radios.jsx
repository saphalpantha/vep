import React, { useState } from 'react';
import classes from './Radios.module.css';

function RadioButtons() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleOption1Change = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleOption2Change = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  return (
    <div className={`flex  space-x-5 ${classes['radio-buttons-container']}`}>
      <label className={` w-[188px] h-[48px] text-slate-800 bg-[#F2F2F2] placeholder:text-[#787878] rounded-2xl text-center flex flex-row  ${classes['radio-button']} ${isChecked1 ? classes['selected'] : ''}`}>
        <input
          type="radio"
          value="option1"
          className='ml-5'
          checked={isChecked1}
          onChange={handleOption1Change}
        />
        <span className={` ml-2 ${classes['radio-button-ring']}`}></span>
        INDIVIDUALS
      </label>
      <label className={` w-[188px] h-[48px] text-slate-800 bg-[#F2F2F2] placeholder:text-[#787878] rounded-2xl text-center ${classes['radio-button']} ${isChecked2 ? classes['selected'] : ''}`}>
        <input
          type="radio"
          value="option2"
          checked={isChecked2}
          onChange={handleOption2Change}
        />
        <span className={` ml-2 ${classes['radio-button-ring']}`}></span>
        BUSSINESS
      </label>
    </div>
  );
}


export default RadioButtons










/* 
            <div className="w-[188px] h-[48px] text-slate-800 bg-[#F2F2F2] placeholder:text-[#787878] rounded-2xl text-center flex flex-row space-x-2 px-5">
              <input
                type="radio"
                className={`${classes.radios}w-[1rem] h-[1rem] rounded-full mt-4 `}
                placeholder="INDIVIDUALS"
              ></input>
              <label className="mt-3">INDIVIDUALS</label>
            </div>
            <div className="w-[188px] h-[48px] text-slate-800 bg-[#F2F2F2] placeholder:text-[#787878] rounded-2xl text-center flex flex-row space-x-2 px-5">
              <input
                type="radio"
                className={` w-[1rem] h-[1rem] rounded-full mt-4`}
                placeholder="BUSSINESS"
              ></input>
              <label className="mt-3">BUSSINESS</label>
            </div>



*/