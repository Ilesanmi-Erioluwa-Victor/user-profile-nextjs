import React from "react";
import Image from "next/image";
import logo from "src/assets/images/africanwomansmiling.png";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const User = () => {
  return (
    <section className="flex justify-between p-6">
      <div className="flex items-center relative ">
        <figure className="w-[8rem] h-[8rem] rounded-[50%] object-cover object-center p-2 absolute top-[-4rem]">
          <Image
            src={logo}
            alt={"user"}
          />
        </figure>
        <span className="absolute text-blue-400 left-[6rem] bottom-[0rem]">
          {" "}
          <CheckBadgeIcon className="w-6 h-6" />
        </span>

        <div className="relative pl-[10rem]">
          <h2>Mina Wikel</h2>
          <p>I&apos;m a Product Designer based in mediborne</p>
        </div>
      </div>

      <div>
        <button>...</button>
        <button>Hire Me</button>
        <button>Follow</button>
      </div>
    </section>
  );
};

export default User;
