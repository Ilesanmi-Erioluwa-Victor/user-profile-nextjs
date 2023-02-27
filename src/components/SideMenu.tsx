import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import logo from 'src/assets/images/africanwomansmiling.png';
import PropTypes, { InferProps } from 'prop-types';
import {
  HomeIcon,
  FolderIcon,
  ChartPieIcon,
  SparklesIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserPlusIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import Search from './Search';

interface Menu {
  name: string;
  id: string;
  icon: any;
  isActive: boolean;
  sublinks?: any;
  dir: any;
}

interface DownMenu {
  name: string;
  id: string;
  icon: any;
  link: string;
}

const DownMenu: DownMenu[] = [
  {
    name: 'Support',
    id: uuidv4(),
    link: '/',
    icon: <Cog8ToothIcon />,
  },

  {
    name: 'Settings',
    id: uuidv4(),
    link: '/',
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
  },
];

const MenuItem: Menu[] = [
  {
    id: uuidv4(),
    name: 'Home',
    icon: <HomeIcon />,
    isActive: true,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: 'Dashboard',
    icon: <UserPlusIcon />,
    isActive: false,
    dir: <ChevronDownIcon />,
     sublinks: [
      {
        name: 'All Designers',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Popular',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Recently Added',
        id: uuidv4(),
        link: '/designers',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Projects',
    icon: <FolderIcon />,
    isActive: false,
    dir: <ChevronDownIcon />,
    sublinks: [
      {
        name: 'All Designers',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Popular',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Recently Added',
        id: uuidv4(),
        link: '/designers',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Tasks',
    icon: <BriefcaseIcon />,
    isActive: false,
    dir: <ChevronDownIcon />,
    sublinks: [
      {
        name: 'All Designers',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Popular',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Recently Added',
        id: uuidv4(),
        link: '/designers',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Reporting',
    icon: <ChartPieIcon />,
    isActive: false,
    dir: <ChevronDownIcon />,
    sublinks: [
      {
        name: 'All Designers',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Popular',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Recently Added',
        id: uuidv4(),
        link: '/designers',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Designers',
    icon: <SparklesIcon />,
    isActive: false,
    dir: <ChevronDownIcon />,
    sublinks: [
      {
        name: 'All Designers',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Popular',
        id: uuidv4(),
        link: '/designers',
      },

      {
        name: 'Recently Added',
        id: uuidv4(),
        link: '/designers',
      },
    ],
  },
];

const SideMenu = (): JSX.Element => {
  return (
    <aside className='w-[20%] p-6 relative h-screen flex flex-col justify-between'>
      <div className='relative flex flex-col gap-5'>
        <Link
          href={'/'}
          className='flex items-center gap-8'
        >
          <figure className='w-8 h-8'>
            <Image
              src={logo}
              alt='logo'
              className=''
            />
          </figure>

          <span className='text-2xl font-bold '>Untitled UI</span>
        </Link>

        <Search
          placeholder='search'
          inputClass={`px-2`}
          fieldClass={'p-2'}
        />
        <nav>
          {MenuItem.map((link) => {
            return (
              <ul
                key={link.id}
                className='flex'
              >
                <li className='block w-full relative'>
                  <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex items-center gap-2'>
                      <span className=''>{link.name}</span>
                      <span className='w-4 h-4'>{link.icon}</span>
                    </div>
                    <div className='w-4 h-4'>{link.dir}</div>
                  </div>
                  {/* TODO Drowdown men to be solved later */}

                  <ul className='hidden'>
                      {link?.sublinks?.map((link: any, index: string) => (
                        <li key={index}>
                          <Link href={link?.link}> {link.name}</Link>
                        </li>
                      ))}
                    </ul>
                </li>
              </ul>
            );
          })}
        </nav>
      </div>

      <div>
        <nav>
          {DownMenu.map((link) => {
            return (
              <ul key={link.id}>
                <li>
                  <Link href={link.link} className='flex items-center'>
                    <span>{link.name}</span>
                    <span className='w-4 h-4'>{link.icon}</span>
                  </Link>
                </li>
              </ul>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
