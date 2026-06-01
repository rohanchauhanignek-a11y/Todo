import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideBar";

function Layout() {
  return (
    <div className="flex h-screen bg-taupe-900 text-white overflow-hidden scrollbar-none">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="h-16 shrink-0">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto mt-4 scrollbar-none">
          <Outlet />
        </main>

        <div className="h-14 shrink-0">
        </div>
      </div>
    </div>
  );
}

export default Layout;