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
} from "@heroicons/react/24/outline";
import { GrUserAdmin } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import Search from "./Search";

const Img = {
  image: PropTypes.string.isRequired,
};

interface Menu {
  name: string;
  id: string;
  icon: any;
  link: string;
  isActive: boolean;
  sublinks?: any;
  dir: any;
}

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
    icon: <GrUserAdmin />,
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
    icon: <ChartPieIcon />,
    link: "/tasks",
    isActive: false,
    dir: <ChevronDownIcon />,
  },

  {
    id: uuidv4(),
    name: "Reporting",
    icon: <BiTask />,
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

        {MenuItem.map((link) => {
          return (
            <ul key={link.id}>
              <li>
                <Link href={link.link}>{link.name}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </aside>
  );
};

export default SideMenu;
