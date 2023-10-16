import { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/profileCard";
import NavBar from "./components/NavBar";
import FormContainer from "./components/FormContainer";
function App() {
  return (
    <>
      <div className="text-xs">
        <Header />
        <div className="content relative 2xl:w-[1512px] mx-auto px-6 lg:w-[100%] mt-20 sm:mt-0">
          <div className="sm:absolute top-[-110px] gap-[40px] lg:flex justify-between pb-[150px] lg:w-[100%] sm:left-0 lg:px-10 sm:px-6 sm:w-[80%] w-[100%] mx-auto 2xl:px-20">
            <div className="profilecontainer lg:w-[25%] w-[100%]">
              <ProfileCard />
            </div>
            <div className="formcontainer text-center lg:max-2xl:w-[65%] ">
            <NavBar/>
            <FormContainer />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
