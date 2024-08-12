import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="relative h-full w-full flex justify-center ">
      <nav className="flex montserratFont items-center justify-between  w-[90%] container h-[6vh] max-w-[1383px] bg-bgblack absolute ">
        <div className="h-full w-1/5 flex items-center justify-between ">
          <div className="leftSideButton h-full w-[300px]  bg-bgblack">
            <Link href="/" className="flex items-center justify-start ">
              <div className="logoContainer flex items-center ">
                <Image
                  className=""
                  src="/logo.svg"
                  width={50}
                  height={50}
                  alt="logo"
                />
              </div>
              <div className="nameContainer">
                <h1 className=" font-bold leading-6 text-md uppercase text-white">
                  Vishal Kirtaniya
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-full w-4/5 flex items-center justify-end ">
          <div className="h-full w-[100px] ">
            <div className="rightSideButton h-full w-full flex justify-end items-center ">
              <div className="h-[20px] w-[30px]  flex flex-col justify-between items-center hover:cursor-pointer">
                <div className="h-[2px] w-full border border-bgwhite rounded-full"></div>
                <div className="h-[2px] w-[60%] border border-bgwhite rounded-full"></div>
                <div className="h-[2px] w-full border border-bgwhite rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
