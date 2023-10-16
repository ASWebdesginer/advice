import React from "react";
import home from '../assets/icons8-home-64.png'
import profile from '../assets/icons8-male-user-50.png'
import schedule from '../assets/icons8-schedule-64.png'
import Resume from '../assets/icons8-resume-50.png'
import Payments from '../assets/icons8-payments-48.png'
import Reviews from '../assets/icons8-review-50.png'
const NavBar = () => {
  return (
    <div className="mx-auto mt-[72px]  sm:block hidden">
      <div className="navbar 2xl:w-[962px] s rounded-[16px] p-[12px] bg-[#F2F4F7] shadow-3xl lg:relative lg:top-0  fixed max-lg:right-6 top-[280px]">
        <div className="menu">
          <ul className="lg:flex justify-between items-center">
            <li className="nav-item">
              <a href="#" className="nav-link 2xl:px-[30px] lg:px-[27px] py-[16px] block text-base font-semibold active:bg-[#021D1F] active:rounded-[15px] active:text-white hover:bg-[#021D1F] hover:rounded-[15px] hover:text-white">
                <span className="hidden lg:inline">Home</span> <img src={home} alt="home" className="lg:hidden mx-auto"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link 2xl:px-[30px] lg:px-[27px] py-[16px] block  text-base font-semibold active:bg-[#021D1F] active:rounded-[15px] active:text-white hover:bg-[#021D1F] hover:rounded-[15px] hover:text-white">
                
                <span className="hidden lg:inline">Profile</span> <img src={profile} alt="home" className="lg:hidden mx-auto"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link 2xl:px-[30px] lg:px-[27px] py-[16px] block  text-base font-semibold active:bg-[#021D1F] active:rounded-[15px] active:text-white hover:bg-[#021D1F] hover:rounded-[15px] hover:text-white">
                
                <span className="hidden lg:inline">Schedule</span> <img src={schedule} alt="home" className="lg:hidden mx-auto"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link 2xl:px-[30px] lg:px-[27px] py-[16px] block  text-base font-semibold active:bg-[#021D1F] active:rounded-[15px] active:text-white hover:bg-[#021D1F] hover:rounded-[15px] hover:text-white">
                
                <span className="hidden lg:inline">Resume</span> <img src={Resume} alt="home" className="lg:hidden mx-auto"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link 2xl:px-[30px] lg:px-[27px] py-[16px] block  text-base font-semibold active:bg-[#021D1F] active:rounded-[15px] active:text-white hover:bg-[#021D1F] hover:rounded-[15px] hover:text-white">
                
                <span className="hidden lg:inline">Payments</span> <img src={Payments} alt="home" className="lg:hidden mx-auto"/>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link 2xl:px-[30px] lg:px-[27px] py-[16px] block  text-base font-semibold active:bg-[#021D1F] active:rounded-[15px] active:text-white hover:bg-[#021D1F] hover:rounded-[15px] hover:text-white text-center">
                
                <span className="hidden lg:inline">Reviews</span> <img src={Reviews} alt="home" className="lg:hidden mx-auto"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
