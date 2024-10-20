import Link from "next/link";
import Navbar from "../Navbar";
import { Button } from "../ui/button";
import MobileNav from "../MobileNave";

const Header = () => {
  return (
    <div className="py-8 xl:py-12 text-white ">
      <div className=" flex mx-auto justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sandeep <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden items-center  xl:flex gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="text-black px-6 bg-accent rounded-full">
              {" "}
              Hire Me{" "}
            </Button>
          </Link>
        </div>

        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
