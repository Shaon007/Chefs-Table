import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Root;