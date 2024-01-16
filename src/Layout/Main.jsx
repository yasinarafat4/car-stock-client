import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto dark:bg-slate-900 dark:text-white">
        <NavigationBar />
        <div className="min-h-[calc(100vh-374px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
