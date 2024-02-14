import "../../index.css";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Favourites", href: "/favourites", current: false },
  { name: "Get in Touch", href: "/contact", current: false },
];

export default function NavBar() {
  return (
         <>
          <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 h-12 bg-primary sticky">
            <div className="relative flex h-auto items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-color-tertiary">
              <div className="flex flex-shrink-0">
                  <span className="items-start">COMPANY</span>
                </div>
                <div className="sm:ml-12 sm:block">
                  <div className="flex space-x-24 text-tertiary items-center">
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
