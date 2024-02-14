import "../../index.css";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Favourites", href: "#", current: false },
  { name: "Get in Touch", href: "/contact", current: false },
];

export default function NavBar() {
  return (
         <>
          <div className="flex mx-auto px-2 sm:px-6 lg:px-8 h-12 bg-primary sticky">
            <div className="flex h-auto items-center">
              <div className="flex">
                  <span className="space-x-12 font-bold text-tertiary">ABODE</span>
                <div className="ml-12">
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
