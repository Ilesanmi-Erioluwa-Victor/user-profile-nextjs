import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import linkImgae from "src/assets/icons/Link.svg"
import PropTypes, { InferProps } from "prop-types";

const header = {
    image : PropTypes.string.isRequired,
}

interface Menu{
    name: string;
}

const MenuItem  =  [
    { 
     id : uuidv4(),
    name: "Home",  
    }
]