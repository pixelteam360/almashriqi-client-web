"use client";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MyBtn from "../common/MyBtn";
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
      path: "/FAQ",
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
            <SheetHeader>
              <SheetTitle className="text-lg">Navigation</SheetTitle>
            </SheetHeader>

            <nav className="mt-5">
              <ul className="space-y-2 flex flex-col z-40">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={`${link.path}`}
                    className={`${
                      pathName === `${link.path}`
                        ? " text-black px-5 py-2 rounded-3xl"
                        : "text-[#525050]"
                    }  hover:text-black px-5 py-2 rounded-3xl duration-300`}
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </nav>
            <SheetClose asChild>
              <Button
                variant="outline"
                className="mt-5 w-full bg-primary text-white hover:bg-secondary hover:text-white"
              >
                Close
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-5 items-center">
        <Image
          src={logo}
          height={120}
          width={300}
          alt="logo"
          className="md:w-32 w-20"
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
        <div className="flex gap-3">
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
            className="bg-primary border border-primary px-12 py-3 rounded-lg duration-300 text-white font-medium"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex gap-7">
          <Link href={"/register"}>
            <button
              // onClick={handleLolgout}
              className="border border-primary px-10 py-3 rounded-lg hover:bg-white duration-300 text-primary font-medium"
            >
              Sign Up
            </button>
          </Link>
          <Link href={"/login"}>
            <MyBtn name="Log In" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
