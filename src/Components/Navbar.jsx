import {
  CONTAINER_NAVBAR,
  DEPLOY,
  NOT_DEPLOY,
  NOT_RESPONSIVE,
} from "./Styled-Navbar";
import { motion, useCycle } from "framer-motion";
import pdf from '../CV-Francisco-Lubo.pdf'

const variants = {
  open: {
    y: [-40, -20, 0],
    scale: [0, 0.5, 1],
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const handleMenu = () => {
    const deploy = document.getElementById("deploy");
    deploy.hidden = !deploy.hidden;
    toggleOpen();
  };

  return (
    <>
      <CONTAINER_NAVBAR>
        <NOT_RESPONSIVE>
          <button onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 80 80"
              // style=" fill:#000000;"
            >
              <path fill="#fff" d="M2.5 36.5H77.5V43.5H2.5z"></path>
              <path
                fill="#fff"
                d="M77,37v6H3v-6H77 M78,36H2v8h76V36L78,36z"
              ></path>
              <path fill="#fff" d="M2.5 16.5H77.5V23.5H2.5z"></path>
              <path
                fill="#fff"
                d="M77,17v6H3v-6H77 M78,16H2v8h76V16L78,16z"
              ></path>
              <g>
                <path fill="#fff" d="M2.5 56.5H77.5V63.5H2.5z"></path>
                <path
                  fill="#fff"
                  d="M77,57v6H3v-6H77 M78,56H2v8h76V56L78,56z"
                ></path>
              </g>
            </svg>
          </button>

          <NOT_DEPLOY
            animate={{
              scale: [0, 1],
              duration: 5,
            }}
          >
            <motion.a whileHover={{ scale: 1.2 }} href="#about">
              Sobre mi
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#projects">
              Proyectos
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#contact">
              Contacto
            </motion.a>
          </NOT_DEPLOY>
        </NOT_RESPONSIVE>
        <motion.div id="deploy" hidden layout className="box">
          <DEPLOY
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            variants={variants}
          >
            <a href="#about" onClick={handleMenu}>Sobre mi</a>
            <a href="#projects" onClick={handleMenu}>Proyectos</a>
            <a href="#contact" onClick={handleMenu}>Contacto</a>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Francisco-Lubo.pdf"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVRoge2YMUoDQRiFvxGJIGIlYh1QERGsBBPFA1h7Aj2BgrfQE3iDgIWFhZUgktYiYCHoASyFgCI+mxhCzM7szmTiIPNVu+z8O+/t7L6ZWcikhbFdlKRJCSmLMWak5qlJC4lFNpIa2UhqhBrpABvAPHAMvAYrioHcHA21Py1RE0SR1tAReRs67zraN40DYMdHSKiRmaHzhTH056Vp2qdogJWh82VH+zvL2xFE6BKlC2waY54kbQP3rnuGEmuJMgvs944PiGzCG0eAfEpqSVrqtV2RdCPpy1LTKNFn0ye1fI20Ja0W1GxJeiyocyaSpF0fI77fSN0Y82Kp2wNuXaJ9KPpG8n4kNbKR1Chr5DyqijFQyogx5gQ4BD7iyvHHlEmmn6SQ1AQugcXYwlxafmGbfEZNQpLqkjqOEucMXoQ8Z/b+q+XYIww+kWegAVxb9ISEiFdt/9UqHLICJNWAB2DNp2NfxjohSpoDWkzYhI3+xsq6IBt4CpLqwBWwHldaNSqNSC+12iRmwslgUkg6lPReJuWqppYrqSqllqOjM+ACqJXUVvXbC14q5WV8amQjqRHLiPPXaGq/TGPc12+tZbuYU+sPyEZSIxtJjWwkNf6NkUxqfAO2SG7ysLGFvgAAAABJRU5ErkJggg=="/></a>
          </DEPLOY>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} className="cv">
          <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Francisco-Lubo.pdf">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVRoge2YMUoDQRiFvxGJIGIlYh1QERGsBBPFA1h7Aj2BgrfQE3iDgIWFhZUgktYiYCHoASyFgCI+mxhCzM7szmTiIPNVu+z8O+/t7L6ZWcikhbFdlKRJCSmLMWak5qlJC4lFNpIa2UhqhBrpABvAPHAMvAYrioHcHA21Py1RE0SR1tAReRs67zraN40DYMdHSKiRmaHzhTH056Vp2qdogJWh82VH+zvL2xFE6BKlC2waY54kbQP3rnuGEmuJMgvs944PiGzCG0eAfEpqSVrqtV2RdCPpy1LTKNFn0ye1fI20Ja0W1GxJeiyocyaSpF0fI77fSN0Y82Kp2wNuXaJ9KPpG8n4kNbKR1Chr5DyqijFQyogx5gQ4BD7iyvHHlEmmn6SQ1AQugcXYwlxafmGbfEZNQpLqkjqOEucMXoQ8Z/b+q+XYIww+kWegAVxb9ISEiFdt/9UqHLICJNWAB2DNp2NfxjohSpoDWkzYhI3+xsq6IBt4CpLqwBWwHldaNSqNSC+12iRmwslgUkg6lPReJuWqppYrqSqllqOjM+ACqJXUVvXbC14q5WV8amQjqRHLiPPXaGq/TGPc12+tZbuYU+sPyEZSIxtJjWwkNf6NkUxqfAO2SG7ysLGFvgAAAABJRU5ErkJggg=="/>
          </a>
        </motion.div>
      </CONTAINER_NAVBAR>
    </>
  );
}
