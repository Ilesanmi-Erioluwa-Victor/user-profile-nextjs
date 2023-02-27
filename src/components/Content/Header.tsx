import React from "react";
import Image from "next/image";
import back from "src/assets/images/africanwomansmiling.png";
import User from "./User";
import Experience from "./Experience";


const Header = (): JSX.Element => {
  return (
    <div className='w-[80%] bg-slate-100'>
      {/* <figure className='w-full'>
        <Image
          src={back}
          alt='background'
          className='h-10'
        />
      </figure> */}
      <div className="bg-red-700 h-[10rem] w-full"></div>
      <User />
      <Experience />
    </div>
  );
};

export default Header;
