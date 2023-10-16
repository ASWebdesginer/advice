import React from 'react'
import cardholder from '../assets/cardholder.png'
const ProfileCard = () => {
  return (
    <div>
        <div className="card 2xl:w-[350px] h-[500px] w-[100%] pt-[73px] px-[58px] text-center bg-white rounded-[16px] border border-solid	border-[#D9DDE3]">
            <div className="profile mx-auto">
                <img src={cardholder} alt="profile cards" className='mx-auto'/>
            </div>
            <div className="info mt-[20px]">
                <h1 className='text-[36px] font-bold leading-[50px]	'>Hi,Tony</h1>
            </div>
            <div className="progressbar w-[180px] h-[5px] bg-[#F2F4F7] rounded-[2.5px] mt-[19px] mb-[8px] mx-auto">
                <div className="progressed w-[80%] bg-[#021D1F] h-[5px] rounded-[2.5px]"></div>
            </div>
            <p className='text-base font-bold'>Your profile is <span className='text-[#1A80FC]'>80%</span> completed</p>
        </div>
    </div>
  )
}

export default ProfileCard