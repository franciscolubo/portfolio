import { CONTAINER_NAVBAR, LINKS } from './styles/Styled-Navbar';

import pdf from '../CV-Francisco Lubo.pdf'
import CV from '../svg/cv.svg'

export default function Navbar() {

  return (
      <CONTAINER_NAVBAR>
              <LINKS href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Francisco-Lubo.pdf">
                Descarga mi CV
                <img src={CV} alt='error cv.svg'/>
              </LINKS>
      </CONTAINER_NAVBAR>
  );
}
