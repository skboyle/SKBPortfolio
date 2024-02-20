import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

interface NavbarProps {
}

const NavBar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link to="/about">About</Link></div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link to="/feedback-loop">Feedback Loop</Link></div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link to="/react-calculator">React Calc</Link></div>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link to="/zip-code-calculator">Zipcode Calc</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <div className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"><Link to="/about">About</Link></div>
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"><Link to="/feedback-loop">Feedback Loop</Link></div>
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"><Link to="/react-calculator">React Calc</Link></div>
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"><Link to="/zip-code-calculator">Zipcode Calc</Link></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;