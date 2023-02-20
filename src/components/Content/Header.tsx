import React from 'react'
import Image from 'next/image';
import back from "src/assets/images/africanwomansmiling.png";

const Header = ():JSX.Element => {
  return (
    <div>
          <figure>
               <Image src={back} alt='background' className=''/>
          </figure>
          
          <section>
              profile
          </section>
    </div>
  )
}



export default Header
