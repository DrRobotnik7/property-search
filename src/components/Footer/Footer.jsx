import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full p-4 bg-tertiary text-center">
      2024 <span>{<FontAwesomeIcon icon={faCopyright} />}</span> A Project by
      the Abode Team
    </footer>
  );
}
