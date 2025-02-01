import { ChevronDown, Globe } from 'lucide-react';
import { navbarLink, language } from './config/constants'; // Assuming the constant is imported from a 'constants.ts' file
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isEnglishPage = location.pathname === '/en';

  return (
    <nav
      className={`${
        isEnglishPage ? 'bg-white text-blue-600' : '  text-white'
      } p-6 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl flex items-center">
          <span className="font-extrabold text-3xl">ANY</span>
          <span className="font-normal text-3xl">TECH</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          {navbarLink.map((link, index) => {
            if (link.subItems) {
              return (
                <div key={index} className="relative group">
                  <a
                    href="#"
                    className="hover:text-cyan-300 transition flex items-center"
                  >
                    {link.pageTitle} <ChevronDown className="w-4 h-4 ml-1" />
                  </a>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 ease-in-out">
                    {link.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.url}
                        className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white transition"
                      >
                        {subItem.pageTitle}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={index}
                href={link.url}
                className="hover:text-cyan-300 transition"
              >
                {link.pageTitle}
              </a>
            );
          })}

          {/* Language Dropdown */}
          <div className="relative group">
            <div className="flex items-center border rounded-full px-3 py-1 hover:bg-blue-600 hover:text-white transition">
              <Globe className="w-5 h-5 mr-1" /> {language.pageTitle}{' '}
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>

            {/* Language Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg  opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 ease-in-out">
              {language.subItems.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={subItem.url}
                  className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white transition"
                >
                  {subItem.pageTitle}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="flex items-center space-x-4">
          <a
            href="/en/contact"
            className={`${
              isEnglishPage
                ? ' bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-blue-600'
                : 'bg-transparent text-white border-white hover:bg-white hover:text-blue-600'
            } px-4 py-3  border transition text-lg`}
          >
            Contact Us →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
