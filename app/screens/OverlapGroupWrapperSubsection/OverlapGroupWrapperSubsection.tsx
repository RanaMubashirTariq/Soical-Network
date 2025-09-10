"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { TfiAlignJustify } from "react-icons/tfi";

const navigationItems = [
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faqs" },
  { label: "Help", href: "#help" },
  { label: "Desk", href: "#desk" },
  { label: "Contact Us", href: "#contact" },
];



export default function OverlapGroupWrapperSubsection  ()  {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <section className="w-full h-[650px] max-[1000px]:h-[970px] max-[600px]:h-[720px] max-[350px]:h-[770px] bg-[#ebf2fa] overflow-hidden relative ">
      <div className="relative w-full h-full">
        <img className="w-full h-[650px] max-[1000px]:h-[980px] max-[600px]:h-[780px] max-[350px]:h-[770px]  object-cover  absolute inset-0 z-10" alt="Background" src='background.jpg'/>

        <header className="relative z-20 flex w-full   items-center justify-between px-[120px] max-[1300px]:px-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px] pt-10 max-[767px]:pt-5 bg-white/30 slide-down-enter slide-animate is-visible">
        {/* Logo */}
        <img className="w-16 h-16 max-[767px]:w-11 max-[767px]:h-11" alt="Logo" src="/logo.png" />

        {/* Desktop Navigation */}
        <nav className="hidden [@media(min-width:1001px)]:flex items-center gap-[92px] max-[1100px]:gap-8 ">
          <div className="inline-flex items-center h-[38px] gap-[30.94px] px-[15px] py-[7px] bg-[#ffffff4c] rounded-lg border border-solid border-[#00000017] backdrop-blur-[62px] backdrop-brightness-[100%]">
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a href={`/${item.href}`} className="font-Roboto font-medium text-black text-lg whitespace-nowrap cursor-pointer">
                  {item.label}
                </a>
                {index < navigationItems.length - 1 && (
                  <img src="/blur-line.png" className="w-[1px] h-6" />
                )}
              </React.Fragment>
            ))}
          </div>

          <img
            alt="Frame"
            src="/Frame.png"
            className="w-[114px] h-[33px] object-cover cursor-pointer transform transition-transform duration-300 hover:scale-90"
          />
        </nav>

        {/* Mobile Toggle Button (visible ≤ 1000px) */}
        <button
          className="[@media(min-width:1001px)]:hidden p-2 rounded-md bg-black/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <TfiAlignJustify className="w-[22px] h-[22px] text-[#019e54]" />
        </button>


        {isMenuOpen && (
        <div className="[@media(min-width:1001px)]:hidden absolute top-24 right-0 w-[200px] bg-white z-20 p-6">
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="py-2 text-black text-lg font-medium border-b border-gray-300"
            >
              <a href={`/${item.href}`} className="block hover:underline" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </div>
          ))}
          <img
            alt="Frame"
            src="/Frame.png"
            className="w-[114px] h-[33px] object-cover mt-[30px] cursor-pointer transform transition-transform duration-300 hover:scale-90"
          />
        </div>
        
      )}
          
      </header>

        <main className="inline-flex flex-col items-start gap-[50px] max-[767px]:gap-[20px] relative z-10 pl-[120px] max-[1300px]:pl-[80px] max-[1100px]:pl-[50px] max-[767px]:px-[25px] pt-[98px] max-[1000px]:pt-10 slide-left-enter slide-animate is-visible">
          <div className="inline-flex flex-col items-start gap-[30px] max-[767px]:gap-[15px]">
            <h1 className="w-[580px] max-[1100px]:w-[450px] max-[600px]:w-[100%] font-Roboto font-semibold text-black text-[68px] max-[1100px]:text-[48px] max-[1100px]:leading-[52px] max-[767px]:text-[36px] max-[767px]:leading-[38px] tracking-[0] leading-[70px]">
              Grow your network
              all are connected
              in NetworkCom
            </h1>

            <p className="w-[530px] max-[1100px]:w-[400px] max-[600px]:w-[100%]  font-regular text-[#000000e6] text-lg max-[1100px]:text-base max-[767px]:text-sm tracking-[0] leading-[26px] font-Roboto">
              Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet
              euismod dolor sit amet consectetur. Quis vitae vitae amet euismod
              vel sem ac.
            </p>
          </div>

          <Button className="inline-flex items-center gap-[11px] px-[23px] py-3 bg-[#019454] rounded-md border border-solid border-[#00000033] shadow-[inset_11px_11px_24px_#00442440] h-auto cursor-pointer transform transition-transform duration-300 hover:scale-90">
            <span className="mt-[-1.00px] font-Roboto font-medium text-white text-base max-[767px]:text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Creat Account
            </span>
          </Button>
                
                
        </main>

        <div className="absolute w-[971px] max-[1300px]:w-[871px] max-[1300px]:h-[898px] max-[600px]:w-[500px] h-[1098px] max-[600px]:h-[600px] top-[130px] -right-[251px] max-[1300px]:-right-[351px] max-[1000px]:top-[450px] max-[600px]:top-[450px] max-[600px]:right-[-400px] max-[350px]:top-[500px] z-11 slide-right-enter slide-animate is-visible">
          <div className="relative w-[1118px] w-[971px] max-[1300px]:w-[971px] max-[600px]:w-[500px] h-[971px] max-[1300px]:h-[898px] max-[600px]:h-[600px] top-[-130px] left-[-399px]">
            <img
              className="absolute w-[1118px] max-[600px]:w-[500px] h-[650px] max-[600px]:h-[400px]   top-0 left-0"
              alt="Group"
              src='/Group.png'
            />


          </div>
        </div>
      </div>
    </section>
  );
};
