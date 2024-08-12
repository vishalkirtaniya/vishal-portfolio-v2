import React from "react";
// import Nav from "./navigation";
import SideBar from "./sidebar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Vishal Web Dev</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/logo.svg" type="image/x-icon"></link>
      </Head>
      <div className="flex flex-col bg-bgblack w-full h-full mx-auto z-0  ">
        <header className="h-[10vh] w-full flex justify-center z-0 ">
          {/* <Nav /> */}
        </header>
        <main className="flex container bg-bgblack items-start mx-auto  m-0 p-0 h-[90vh]  w-[90%]  max-w-[1383px] ">
          <div className="h-full xxs:hidden lg:flex w-1/5 justify-center items-center">
            <SideBar />
          </div>
          <div className="fullpage flex flex-col h-full w-full lg:w-4/5 ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
