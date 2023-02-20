import Image from "next/image";
import linkImgae from "src/assets/icons/Link.svg"
import PropTypes, { InferProps } from "prop-types";

const header = {
    image : PropTypes.string.isRequired,
}

interface Menu{
    Home: string;
    Dashboard: string;
    Projects: string;
    Tasks: string;
    Reporting: string;
    Designers: string[];
}