import React from "react";
import logo from "../assets/logo.png";
import placeholderimg from "../assets/placeholderimg.png";
import arrowleft from "../assets/arrow-left.svg";
const Header = () => {
  return (
    <div className="bg-custom bg-cover bg-center	bg-no-repeat">
      <div className="h-[390px]">
        <div className="contentdiv flex flex-col sm:flex-row sm:justify-between sm:items-start items-center 2xl:w-[1512px] mx-auto 2xl:px-20 w-[100%] lg:px-10 sm:px-6">
          <div className="logo mt-28">
            <img src={logo} alt="Advice" className="w-48 h-12" />
          </div>
          <div className="profile mt-[40px]">
            <h3 className="text-2xl text-white mb-[30px]">🌤 Good Morning</h3>
            <div className="flex w-[218px] bg-white py-3 pl-3 pr-6 rounded-3xl items-center justify-items-end">
              <div className="img w-[40px]">
                <img src={placeholderimg} alt="place holder" />
              </div>
              <div className="name w-[118px]">
                <h6 className="text-base font-bold pl-4 pr-5">Hi, Tony</h6>
              </div>
              <div className="dropdown">
                <img src={arrowleft} alt="arrow doen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
