import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Chefs Table</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li><Link to='/about'>About</Link></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-white rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;