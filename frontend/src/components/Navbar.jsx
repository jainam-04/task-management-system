// import React, {useState} from "react";
// import "./Navbar.css";
// import {Link} from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">
//         <Link to="/">Tasky</Link>
//       </div>

//       <div className={`nav-links ${open ? "active" : ""}`}>
//         <Link to="/" onClick={() => setOpen(false)}>
//           Home
//         </Link>

//         <Link to="/about" onClick={() => setOpen(false)}>
//           About
//         </Link>

//         <Link to="/contact" onClick={() => setOpen(false)}>
//           Contact
//         </Link>

//         <Link to="/login" onClick={() => setOpen(false)}>
//           Login
//         </Link>
//       </div>

//       <div className="menu-btn" onClick={() => setOpen(!open)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, {useState} from "react";
import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom";
import API from '../api/axios'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.post("/auth/logout", {
        email: user.email,
      });

      localStorage.removeItem("token");

      localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Tasky</Link>
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>

        {token ? (
          <>
            <Link to="/profile" onClick={() => setOpen(false)}>
              Profile
            </Link>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" onClick={() => setOpen(false)}>
            Login
          </Link>
        )}
      </div>

      <div className="menu-btn" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
