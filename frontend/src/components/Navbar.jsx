import { Link } from "react-router-dom";
import { FaArrowRightToBracket, FaCircleUser } from "react-icons/fa6";
import "../App.css";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link to={"/"} className="hover:text-gray-300 transition-colors">
          GoalSetter
        </Link>
      </div>
      <ul className="flex items-center gap-6 list-none">
        <li>
          <Link
            to={"/register"}
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <FaArrowRightToBracket /> Register
          </Link>
        </li>
        <li>
          <Link
            to={"/login"}
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <FaCircleUser /> Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
