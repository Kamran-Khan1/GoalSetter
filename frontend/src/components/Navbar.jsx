import { Link } from "react-router-dom";
import { FaArrowRightToBracket, FaCircleUser } from "react-icons/fa6";
import "../App.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>GoalSetter</Link>
      </div>
      <ul className="nav">
        <li>
          <Link to={"/register"}>
            <FaArrowRightToBracket /> Register
          </Link>
        </li>
        <li>
          <Link to={"/login"}>
            <FaCircleUser /> Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
