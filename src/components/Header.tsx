import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import linkImgae from "src/assets/icons/Link.svg";
import PropTypes, { InferProps } from "prop-types";
import { HomeIcon, FolderIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { GrUserAdmin } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
const header = {
  image: PropTypes.string.isRequired,
};

interface Menu {
  name: string;
  id: string;
  icon: any;
  link: string;
  isActive: boolean;
}

const MenuItem: Menu[] = [
  {
    id: uuidv4(),
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
    isActive: true,
  },

  {
    id: uuidv4(),
    name: "Dashboard",
    icon: <GrUserAdmin />,
    link: "/dashboard",
    isActive: false,
  },

  {
    id: uuidv4(),
    name: "Projects",
    icon: <FolderIcon />,
    link: "/projects",
    isActive: false,
  },

  {
    id: uuidv4(),
    name: "Tasks",
    icon: <ChartPieIcon />,
    link: "/tasks",
    isActive: false,
    },
  
  
  {
    id: uuidv4(),
    name: "Reporting",
    icon: <BiTask />,
    link: "/reports",
    isActive: false,
  },
];
