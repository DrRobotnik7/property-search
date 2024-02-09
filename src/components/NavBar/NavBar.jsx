import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Favourites", href: "#", current: false },
  { name: "Get in Touch", href: "/contact", current: false },
];

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-primary sticky w-screen">
      <>
        <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 top-0 sticky">
          <div className="relative flex h-auto items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-color-tertiary">
              <div className="flex flex-shrink-0 items-left">
                <span>COMPANY</span>
              </div>
              <div className="sm:ml-12 sm:block">
                <div className="flex space-x-12 text-blue-200">
                  {navigation.map((item) => (
                    <a
                      className="text-blue-200"
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
    </Disclosure>
  );
}
