import "../../index.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Favourites", href: "/favourites", current: false },
  { name: "Get in touch", href: "/contact", current: false },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <img
              className="h-20 w-20 ml-100"
              src="./images/Bode.png"
              alt="ABODE"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="py-4 px-2 text-tertiary font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-tertiary mb-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "flex" : "hidden"} md:hidden`}>
        <ul className="flex flex-col items-start">
          {navigation.map((item) => (
            <li key={item.name} className="active">
              <NavLink
                to={item.href}
                className="block text-sm px-2 py-4 text-tertiary font-semibold"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
