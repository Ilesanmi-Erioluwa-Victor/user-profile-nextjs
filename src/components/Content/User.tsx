import React from 'react'
import Image from 'next/image';
import logo from "src/assets/images/africanwomansmiling.png";
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const User = () => {
  return (
    <section className='flex'>
      <div className='flex items-center relative'>
        <figure className='w-20 h-20 rounded-[50%] object-cover object-center p-2'>
          <Image
            src={logo}
            alt={'user'}
          />
        </figure>
        <span className='absolute text-blue-400 left-[5rem]'>
          {' '}
          <CheckBadgeIcon className='w-4 h-4 ' />
        </span>

        <div>
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
}

export default User
