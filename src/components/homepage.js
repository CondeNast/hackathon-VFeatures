import { Outlet } from "react-router-dom";
import Header from "./Header";

const Homepage = () => {
  return (
    <div>
        <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
