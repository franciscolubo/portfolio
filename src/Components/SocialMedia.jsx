import { CONTAINER_SOCIAL } from "./styles/Styled-SocialMedia";
import { motion } from "framer-motion"
import github from "../svg/github.svg"
import linkedin from "../svg/linkedin.svg"
import pdf from '../CV-Francisco Lubo.pdf'
import CV from '../svg/cv.svg'

export default function SocialMedia () {
    return (
        <CONTAINER_SOCIAL>
            <a href="https://github.com/franciscolubo" target="_blank" rel="noopener noreferrer">
                <motion.img 
                whileHover={{scale: 1.2}} 
                transition={{ duration: 0.3 }}
                src={github} alt="github icon.svg"/>
            </a>
            <a href="https://www.linkedin.com/in/francisco-lubo-dev/" target="_blank" rel="noopener noreferrer">
                <motion.img 
                whileHover={{scale: 1.2}} 
                transition={{ duration: 0.3 }}
                src={linkedin} alt="linkedin icon.svg"/>
            </a>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Francisco-Lubo.pdf">
                <motion.img 
                whileHover={{scale: 1.2}}
                transition={{ duration: 0.3 }}
                src={CV} alt='error cv.svg'/>
            </a>
        </CONTAINER_SOCIAL>
    )
}