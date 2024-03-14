import Navbar from "@/components/globals/navbar";
import SideNavbar from "@/components/globals/sidenav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex mt-16">
        <SideNavbar />
        <div className="ml-56 w-full p-4">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
