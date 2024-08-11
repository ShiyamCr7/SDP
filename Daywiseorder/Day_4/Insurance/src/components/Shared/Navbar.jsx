import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { ShieldCheck } from 'lucide-react'; 
const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm bg-gray-700">
      <div className="w-1/4 h-full flex items-center">
        {/* Use the Lucid icon as the logo */}
        <ShieldCheck className="h-10 text-primary" />
        <div className="text-white font-bold text-lg">PolicyChunk</div>
      </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
