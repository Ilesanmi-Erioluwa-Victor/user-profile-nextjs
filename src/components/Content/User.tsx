import React from 'react'
import Image from 'next/image';
import logo from "src/assets/images/africanwomansmiling.png";


const User = () => {
  return (
    <section>
         <div>
              <figure>
                  <Image src={logo} alt={"user"} />
              </figure> 
              
              <div>
                  <h2>Mina Wikel</h2>
                  <p>I`&apos;`m a Product Designer based in mediborne</p>
              </div>
          </div>
          
          <div>
              <button>...</button>
              <button>Hire Me</button>
              <button>Follow</button>
          </div>
    </section>
  )
}

export default User
