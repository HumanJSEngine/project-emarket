/** @format */
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="h-6 mr-3 sm:h-9"
              alt="CodeBook Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              코드북
            </span>
          </Link>
          <div className="flex items-center">
           
           <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
