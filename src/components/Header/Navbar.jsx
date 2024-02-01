import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-[#1F2544] text-white">
      <Link className="text-3xl ml-10" to="/">Quiz</Link>
      <ul className="m-auto flex justify-around w-5/12">
        <li>
          <NavLink className="" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
