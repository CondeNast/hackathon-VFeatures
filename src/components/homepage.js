import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

const Homepage = () => {
const shouldHideHeader = useSelector((store) => store.app.isHeaderVisible);
  return (
      <div>
      {shouldHideHeader && <Header />}
        <Outlet />
      </div>
  );
};

export default Homepage;
