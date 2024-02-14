import "../../index.css";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Favourites", href: "/favourites", current: false },
  { name: "Get in Touch", href: "/contact", current: false },
];

export default function NavBar() {
  return (
         <>
          <div className="flex mx-auto px-2 sm:px-6 lg:px-8 h-12 bg-primary sticky">
            <div className="flex h-auto items-center">
              <div className="flex">
                  <img className="h-20 w-20"src="./images/Bode.png" alt="ABODE" />
                <div className="ml-12 mt-7">
                  <div className="space-x-12 text-tertiary">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
