import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
    return (
      <div>
        <Link
        //   style={{ textDecoration: match ? "underline" : "none" }}
        className={`${match ? " relative text-green-800 mx-4 text-xl font-semibold before:w-full before:h-1 before:bg-red-900 before:absolute before:top-7 before:right-2/4 before:translate-x-2/4": 'md:text-black text-white mx-4 font-semibold'}`}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ''}
      </div>
    );
  };

export default CustomLink;