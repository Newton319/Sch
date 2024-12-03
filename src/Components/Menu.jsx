import { useState } from "react";
import schlogo from "../assets/schlogo.webp";
import { Link } from "react-router-dom";
function Menu() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-20 w-full bg-cyan-700  relative justify-center items-center">
      <div className="flex justify-start px-10\ flex-1 items-center gap-2 font-bold text-blue-800">
        <img className="h-16 ring-2 rounded-full" src={schlogo} alt="schlogo" />{" "}
        ROYAL COLLEGE OF EDUCATION
      </div>
      <div className="md:hidden">
        <span
          className="icon-menu hover:bg-slate-200"
          onClick={() => setOpen(!open)}
        ></span>
      </div>
      {open ? (
        <div
          className=" justify-end w-auto flex flex-col mt-8 md:w-96 md:flex-row flex-1
       bg-cyan-700 w-8% right-0 top-5  gap-4 rounded-md absolute items-end md:items-center"
        >
          <span className="menu">
            <Link to="/" className="menu_a">
              Home
            </Link>
          </span>
          <span className="menu">
            <Link to="/Aboutus" className="menu_a">
              <p>About us</p>
            </Link>
          </span>
          <span className="menu">
            <Link to="/Classes" className="menu_a">
              Classes
            </Link>
          </span>

          <span className="menu">
            <Link to="/Contactus" className="menu_a">
              Contact us
            </Link>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Menu;
