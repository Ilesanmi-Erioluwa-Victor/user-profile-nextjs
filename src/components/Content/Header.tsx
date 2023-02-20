import React from "react";
import Image from "next/image";
import back from "src/assets/images/africanwomansmiling.png";
import User from "./User";
import Experience from "./Experience";
import { CheckBadgeIcon} from "@heroicons/react/24/outline";

const Header = (): JSX.Element => {
  return (
    <div className="w-8/12">
      <figure className="w-full bg-red-600">
        <Image src={back} alt="background" className="" />
        <span> <CheckBadgeIcon /></span>
      </figure>
      <User />
      <Experience />
    </div>
  );
};

export default Header;
