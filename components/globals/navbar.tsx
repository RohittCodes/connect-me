import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-16 fixed w-full bg-white">
      <div className="flex justify-between items-center h-full w-full border-b-2 px-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={19.8}
          className="mx-4 w-[100px] h-[19.8px]"
        />
        <div className="w-[300px] flex border border-input rounded-md">
          <Input
            placeholder="Search for anything..."
            className="outline-none border-0 active:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 w-[264px]"
          />
          <Button
            variant="secondary"
            size="icon"
            className="border-0 rounded-r-sm rounded-l-none bg-transparent items-center justify-center"
          >
            <Search />
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="bg-primary rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
