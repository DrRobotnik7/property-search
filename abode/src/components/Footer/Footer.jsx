import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      2024 <span>{<FontAwesomeIcon icon={faCopyright} />}</span> Powered by
      React
      <span>{<FontAwesomeIcon icon={faReact} />} </span>
    </footer>
  );
}
