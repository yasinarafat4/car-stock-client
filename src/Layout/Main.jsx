import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-300">
      <div className="lg:max-w-6xl xl:max-w-7xl mx-auto">
        <NavigationBar />
        <div className="min-h-[calc(100vh-374px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
