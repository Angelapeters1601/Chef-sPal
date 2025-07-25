import { Outlet } from "react-router-dom";
import NavComponent from "./NavComponent";
import Footer from "./Footer";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <NavComponent />
      <div className="content-wrapper">
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
