import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
  return (
      <div className="list-group">
        {links.map((link) =>
            <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : (link==="home"&&active===""?"active":"")}`}>
              {link}
            </Link>
        )}
        {!currentUser && <Link className="list-group-item" to="/tuiter/login">   Login   </Link>}
        {!currentUser && <Link className="list-group-item" to="/tuiter/register">Register</Link>}
        { currentUser && <Link className="list-group-item" to="/tuiter/profile"> Profile </Link>}
      </div>
  );
};
export default NavigationSidebar;
