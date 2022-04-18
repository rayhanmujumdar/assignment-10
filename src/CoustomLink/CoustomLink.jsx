import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{ position:match && "relative"}}
        to={to}
        {...props}
      >
        {children}
        {match && <div className="lg:w-4/5 w-full h-1 left-2/4 translate-x-[-50%] bg-red-500 absolute"></div>}
      </Link>
    </div>
  );
}

export default NavLink;
