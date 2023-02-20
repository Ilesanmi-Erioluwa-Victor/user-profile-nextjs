import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import logo from "src/assets/images/africanwomansmiling.png";
import PropTypes, { InferProps } from "prop-types";
import {
  HomeIcon,
  FolderIcon,
  ChartPieIcon,
  SparklesIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserPlusIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";
import Search from "./Search";


interface Menu {
  name: string;
  id: string;
  icon: any;
  link: string;
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
  name: "Support",
  id: uuidv4(),
  link: "/",
  icon : <Cog8ToothIcon />
  }, 

  {
  name: "Settings",
  id: uuidv4(),
  link: "/",
  icon : <ChatBubbleOvalLeftEllipsisIcon />
  }, 
  

]

const MenuItem: Menu[] = [
  {
    id: uuidv4(),
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
    isActive: true,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: "Dashboard",
    icon: <UserPlusIcon />,
    link: "/dashboard",
    isActive: false,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: "Projects",
    icon: <FolderIcon />,
    link: "/projects",
    isActive: false,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: "Tasks",
    icon: <BriefcaseIcon />,
    link: "/tasks",
    isActive: false,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: "Reporting",
    icon: <ChartPieIcon />,
    link: "/reports",
    isActive: false,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: "Designers",
    icon: <SparklesIcon />,
    link: "/designers",
    isActive: false,
    dir: <ChevronDownIcon />,
    sublinks: [
      {
        name: "All Designers",
        id: uuidv4(),
      },

      {
        name: "Popular",
        id: uuidv4(),
      },

      {
        name: "Recently Added",
        id: uuidv4(),
      },
    ],
  },
];

const SideMenu = (): JSX.Element => {
  return (
    <aside className="w-4/12">
      <div className="relative">
        <Link href={"/"}>
          <figure>
            <Image src={logo} alt="logo" className="" />
          </figure>
        </Link>

        <Search placeholder="search" inputClass={`px-5`}/>
         <nav>
        {MenuItem.map((link) => {
          return (
            <ul key={link.id}>
              <li>
                <Link href={link.link}>
                  <div>
                    <span>{link.name}</span> 
                    <span>{link.icon}</span>
                  </div>
                  <span>{ link.dir}</span>
                </Link>
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
                <Link href={link.link}>
                  <span>{ link.name}</span>
                  {link.icon}
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
