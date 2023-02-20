import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import linkImgae from "src/assets/icons/Link.svg";
import PropTypes, { InferProps } from "prop-types";
import { HomeIcon, FolderIcon, ChartPieIcon, SparklesIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { GrUserAdmin } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
const Img = {
  image: PropTypes.string.isRequired,
};
interface Sublink {
  name: string;
  id: string;
}

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
    dir : <ChevronDownIcon />
  },

  {
    id: uuidv4(),
    name: "Dashboard",
    icon: <GrUserAdmin />,
    link: "/dashboard",
      isActive: false,
    dir : <ChevronDownIcon />
  },

  {
    id: uuidv4(),
    name: "Projects",
    icon: <FolderIcon />,
    link: "/projects",
      isActive: false,
    dir : <ChevronDownIcon />
  },

  {
    id: uuidv4(),
    name: "Tasks",
    icon: <ChartPieIcon />,
    link: "/tasks",
      isActive: false,
    dir : <ChevronDownIcon />
    },
  
  
  {
    id: uuidv4(),
    name: "Reporting",
    icon: <BiTask />,
    link: "/reports",
      isActive: false,
      dir : <ChevronDownIcon />
    
  },

    {
    id: uuidv4(),
    name: "Designers",
    icon: <SparklesIcon />,
    link: "/designers",
     isActive: false,
        dir: <ChevronDownIcon />,
       sublinks: [{
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
       
       ]
    
  },
];

const SideMenu = (): JSX.Element => {
  return (
    <aside>
      <div className="relative">
        {MenuItem.map(link => {
          return (
            <ul key={link.id}>
              
             </ul>
           )
         })}
       </div>
      </aside>
    )
}

export default SideMenu