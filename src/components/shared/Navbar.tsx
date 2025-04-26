"use client";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
// import { useGetMeQuery } from "@/redux/features/auth/authApi";
// import { useAppDispatch } from "@/redux/hooks";
// import { logout } from "@/redux/features/auth/authSlice";
// import { removeCookie } from "@/utils/cookies";
// import { TbAdjustments } from "react-icons/tb";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  // const dispatch = useAppDispatch();
  // const { data } = useGetMeQuery(undefined);
  // const router = useRouter();

  const userData = false;

  const navLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/about-us",
      name: "About Us",
    },
    {
      path: "/terms-privacy",
      name: "Terms & Privacy",
    },
    {
      path: "/faq",
      name: "FAQ",
    },
    {
      path: "/contact-us",
      name: "Contact Us",
    },
  ];

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  // const handleLolgout = () => {
  //   dispatch(logout());
  //   removeCookie("token");
  //   router.push("/login");
  // };

  return (
    <div className="w-full mb-5 flex justify-between items-center gap-3">
      {/* small device menu */}
      <div className="lg:hidden mt-2">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <HiMenuAlt1 className="text-2xl cursor-pointer text-primary" />
          </SheetTrigger>
          <SheetContent side="left" className=" ">
            <nav className="mt-5">
              <ul className="space-y-2 flex flex-col z-40">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={`${link.path}`}
                    className={`${
                      pathName === `${link.path}`
                        ? " text-black  py-2 rounded-3xl"
                        : "text-[#525050]"
                    }  hover:text-black  py-2 rounded-3xl duration-300`}
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>

              <div className="w-full mt-8">
                {userData ? (
                  <div className="flex gap-3">
                    <button
                      // onClick={handleLolgout}
                      className="bg-primary border border-primary md:px-12 px-6 md:py-3 py-1 whitespace-nowrap rounded-lg duration-300 text-white font-medium"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex md:gap-7 gap-1 w-full">
                    <Link href={"/register"}>
                      <button
                        // onClick={handleLolgout}
                        className="border border-primary px-5 md:py-3 py-1 whitespace-nowrap rounded-lg hover:bg-white duration-300 text-primary font-medium"
                      >
                        Sign Up
                      </button>
                    </Link>
                    <Link href={"/login"}>
                      <button
                        // onClick={handleLolgout}
                        className=" bg-primary text-white border border-primary  px-6 md:py-3 py-1 whitespace-nowrap rounded-lg hover:bg-white duration-300 font-medium"
                      >
                        Log In
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
            {/* <SheetClose asChild>
              <Button
                variant="outline"
                className="mt-5 w-full bg-primary text-white hover:bg-secondary hover:text-white"
              >
                Close
              </Button>
            </SheetClose> */}
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-5 items-center">
        <Image
          src={logo}
          height={120}
          width={300}
          alt="logo"
          className="md:w-32 w-28"
        />
      </div>

      {/* larg device menu  */}
      <div className="lg:flex hidden items-center">
        <ul className=" space-x-2 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={`${link.path}`}
              className={`${
                pathName === `${link.path}`
                  ? "text-black rounded-3xl"
                  : "text-[#525050]"
              }  hover:text-black xl:px-4 px-2 py-2 rounded-3xl duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      {userData ? (
        <div className="md:flex hidden gap-3">
          {/* <div className=" flex gap-2 items-center md:px-4 px-2 md:py-2 py-[2px] rounded-full bg-white">
            {userData?.profileImage ? (
              <Image
                src={userData?.profileImage}
                height={1000}
                width={1000}
                alt="profile"
              />
            ) : (
              <FaRegUserCircle className="md:text-4xl text-2xl rounded-full" />
            )}
            <div className="">
              <p className="text-sm">{userData?.fullName}</p>
              <p className="font-medium text-sm">{userData?.role}</p>
            </div>
          </div> */}
          <button
            // onClick={handleLolgout}
            className="bg-primary border border-primary md:px-12 px-6 md:py-3 py-1 whitespace-nowrap rounded-lg duration-300 text-white font-medium"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="md:flex hidden md:gap-7 gap-1">
          <Link href={"/register"}>
            <button
              // onClick={handleLolgout}
              className="border border-primary md:px-12 px-3 md:py-3 py-1 whitespace-nowrap rounded-lg hover:bg-white duration-300 text-primary font-medium"
            >
              Sign Up
            </button>
          </Link>
          <Link href={"/login"}>
            <button
              // onClick={handleLolgout}
              className="bg-primary text-white border border-primary md:px-12 px-3 md:py-3 py-1 whitespace-nowrap rounded-lg hover:bg-secondary duration-300 font-medium"
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
