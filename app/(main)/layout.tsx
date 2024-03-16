import Navbar from "@/components/globals/navbar";
import SideNavbar, { SideNavbarMobile } from "@/components/globals/sidenav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex mt-28 md:mt-16">
        <SideNavbar />
        <SideNavbarMobile />
        <div className="ml-0 mb-14 md:mb-0 md:ml-56 w-full p-4">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
