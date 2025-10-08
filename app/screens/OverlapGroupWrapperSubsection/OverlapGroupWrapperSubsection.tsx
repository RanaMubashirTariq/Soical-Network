"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";
import Image from "next/image";

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

        <header className="relative z-50 flex w-full items-center justify-between px-[120px] max-[1300px]:px-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px] pt-10 max-[767px]:pt-5 bg-white/30">
          {/* Logo */}
          <img
            className="w-16 h-16 max-[767px]:w-11 max-[767px]:h-11"
            alt="Logo"
            src="/logo.png"
          />

          {/* Desktop Nav */}
          <nav className="hidden [@media(min-width:1001px)]:flex items-center gap-[92px] max-[1100px]:gap-8">
            <div className="inline-flex items-center h-[38px] gap-[30.94px] px-[15px] py-[7px] bg-[#ffffff4c] rounded-lg border border-solid border-[#00000017] backdrop-blur-[62px]">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <Link
                    href={`/${item.href}`}
                    className="font-Roboto font-medium text-black text-lg whitespace-nowrap cursor-pointer hover:text-[#019e54] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                  {index < navigationItems.length - 1 && (
                    <img src="/blur-line.png" className="w-[1px] h-6" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <Link href="/#signup">
              <Image
                alt="Frame"
                src="/Frame.png"
                width={114}
                height={33}
                className="object-cover cursor-pointer transform transition-transform duration-300 hover:scale-90"
              />
            </Link>
          </nav>

          {/* Toggle Button */}
          <button
            className="[@media(min-width:1001px)]:hidden p-2 rounded-md bg-black/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <TfiAlignJustify className="w-[22px] h-[22px] text-[#019e54]" />
          </button>

          {/* Mobile Menu with Slide-in Transition */}
          <div
            className={`[@media(min-width:1001px)]:hidden fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg z-40 p-6 transition-transform duration-500 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>

            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="py-3 text-black text-lg font-medium border-b border-gray-300"
              >
                <Link
                  href={`/${item.href}`}
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}

            <Link href="/#signup">
              <Image
                alt="Frame"
                src="/Frame.png"
                width={114}
                height={33}
                className="object-cover cursor-pointer transform transition-transform duration-300 hover:scale-90 mt-4"
              />
            </Link>
          </div>
        </header>

        <main className="inline-flex flex-col items-start gap-[50px] max-[767px]:gap-[20px] relative z-20 pl-[120px] max-[1300px]:pl-[80px] max-[1100px]:pl-[50px] max-[767px]:px-[25px] pt-[98px] max-[1000px]:pt-10 slide-left-enter slide-animate is-visible">
          <div className="inline-flex flex-col items-start gap-[30px] max-[767px]:gap-[15px]">
            <h1 className="min-[1500px]:w-[680px] w-[580px] max-[1100px]:w-[450px] max-[600px]:w-[100%] font-Roboto font-semibold text-black text-[80px] max-[1500px]:text-[68px] max-[1100px]:text-[48px] max-[1100px]:leading-[52px] max-[767px]:text-[36px] max-[767px]:leading-[38px] tracking-[0] leading-[70px]">
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

          <Button asChild className="relative z-51 inline-flex items-center gap-[11px] px-[23px] py-3 bg-[#019454] rounded-md border border-solid border-[#00000033] shadow-[inset_11px_11px_24px_#00442440] h-auto cursor-pointer transform transition-transform duration-300 hover:scale-90">
            <Link href="/#signup" onClick={() => { if (typeof window !== 'undefined') window.location.hash = 'signup'; }} className="mt-[-1.00px] font-Roboto font-medium text-white text-lg max-[1500px]:text-base max-[767px]:text-sm tracking-[0] leading-[normal] whitespace-nowrap ">
              Creat Account
            </Link>
          </Button>
                
                
        </main>

        <div className="absolute w-[971px] max-[1300px]:w-[871px] max-[1300px]:h-[898px] max-[600px]:w-[500px] h-[1098px] max-[600px]:h-[600px] top-[130px] -right-[251px] max-[1300px]:-right-[351px] max-[1000px]:top-[450px] max-[600px]:top-[450px] max-[600px]:right-[-400px] max-[350px]:top-[500px] z-11 slide-right-enter slide-animate is-visible">
          <div className="relative w-[1118px] w-[971px] max-[1300px]:w-[971px] max-[600px]:w-[500px] h-[971px] max-[1300px]:h-[898px] max-[600px]:h-[600px] top-[-130px] left-[-399px]">
            <img
              className="absolute w-[1118px] max-[600px]:w-[500px] h-[650px] max-[600px]:h-[400px]  top-0 left-0"
              alt="Group"
              src='/Group.png'
            />


          </div>
        </div>
      </div>
    </section>
  );
};
