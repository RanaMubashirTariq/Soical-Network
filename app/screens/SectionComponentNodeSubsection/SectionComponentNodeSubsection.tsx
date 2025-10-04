import React from "react";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";

export default function SectionComponentNodeSubsection () {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Faqs", href: "/#faqs" },
    { label: "Contact", href: "/#contact" },
  ];

  const resourcesLinks = [
    { label: "Help", href: "/#help" },
    { label: "Desk", href: "/#desk" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
        <div className="w-full px-[120px] pb-[127px] max-[1300px]:px-[80px] max-[1300px]:pb-[100px] max-[1000px]:pb-10 max-[1100px]:px-[50px] max-[767px]:px-[25px]">
            <footer className="w-full bg-[#0a66c21a] rounded-[38.1px] max-[500px]:rounded-[20px] border-[0.95px] border-solid border-black p-[70px_135px_70px_135px] max-[1300px]:p-[60px_100px] max-[1100px]:p-[50px] max-[1000px]:p-[40px_80px] max-[767px]:p-8 max-[500px]:p-5 relative mx-auto">
      <div className="flex items-start min-[1500px]:justify-between   gap-[51.43px] max-[1100px]:gap-8 max-[10000px]:gap-[51px] max-[500px]:gap-5 max-[767px]:mb-[30px] mb-[56.19px] max-[1000px]:flex-wrap">
        <div className="flex flex-col w-[197.14px] items-start gap-10 max-[500px]:gap-4">
          <div className="flex items-center gap-[19.05px]">
            <img className="w-[54px] h-[54px] max-[767px]:w-10 max-[767px]:h-10" src='/logo.png'/>
            <h2 className="font-Roboto font-semibold text-black text-[23.8px] max-[767px]:text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Networkig
            </h2>
          </div>
          <p className="font-Roboto font-normal text-black text-base max-[1500px]:text-[14.3px] max-[767px]:text-[13px]  tracking-[0] leading-[22.9px]">
            Pioneering intelligent NFTs that blend AI, art, and utility in a
            decentralized future.
          </p>
        </div>

        <img
          className="h-[174.29px] w-[2px] max-[500px]:hidden"
          src='/blur-line.png'
        />

        <div className="flex flex-col w-[113.33px] items-center gap-[14.29px]">
          <h3 className="w-[94.29px] font-Roboto font-semibold text-black text-[21px] max-[1500px]:text-[19px] max-[767px]:text-[16px]  text-center tracking-[0] leading-[normal]">
            EXPLORE
          </h3>
          <nav className="flex flex-col w-[83.81px] items-center gap-[15.24px] max-[500px]:gap-3">
            {exploreLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-Roboto font-normal text-black text-lg max-[1500px]:text-[16.2px] max-[767px]:text-[14px]  text-center tracking-[0.81px] leading-[normal] whitespace-nowrap hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        

        <img
          className="h-[174.29px] w-[2px] max-[500px]:hidden"
          src='/blur-line.png'
        />

        <div className="flex flex-col items-center gap-[14.29px]">
          <h3 className="font-Roboto font-semibold text-black text-[21px] max-[1500px]:text-[19px] max-[767px]:text-[16px]  text-center tracking-[0] leading-[normal] whitespace-nowrap">
            RESOURCES
          </h3>
          <nav className="flex flex-col items-center gap-[15.24px] max-[500px]:gap-3">
            {resourcesLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-Roboto font-normal text-black text-lg max-[1500px]:text-[16.2px] max-[767px]:text-[14px]  text-center tracking-[0.81px] leading-[normal] whitespace-nowrap hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <img
          className="h-[174.29px] w-[2px] max-[500px]:hidden"
          src='/blur-line.png'
        />

        <div className="flex flex-col items-center gap-[14.29px]">
          <h3 className="font-Roboto font-semibold text-black text-[21px] max-[1500px]:text-[19px] max-[767px]:text-[16px]  text-center tracking-[0] leading-[normal] whitespace-nowrap">
            RESOURCES
          </h3>
          <nav className="flex flex-col items-center gap-[15.24px] max-[500px]:gap-3">
            {resourcesLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-Roboto font-normal text-black text-lg max-[1500px]:text-[16.2px] max-[767px]:text-[14px]  text-center tracking-[0.81px] leading-[normal] whitespace-nowrap hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-[600px]:flex-wrap gap-3">
        <p className="font-Roboto font-normal text-black text-[17.1px] max-[767px]:text-[13px]  text-justify tracking-[0] leading-[21.3px] ">
          Copyright&nbsp;&nbsp;© 2024&nbsp;&nbsp;Botminds. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Link href='https://www.whatsapp.com/'>
          <img className="w-6 h-6 max-[767px]:w-[20px]  max-[767px]:h-[20px]  cursor-pointer transform transition-transform duration-300 hover:scale-90" src='/whatsapp.png'/>
          </Link>
         <Link href='https://www.instagram.com/'>
         <img className="w-6 h-6 max-[767px]:w-[20px]  max-[767px]:h-[20px]  cursor-pointer transform transition-transform duration-300 hover:scale-90" src='/instagram.png'/>
         </Link>
          <Link href='https://www.facebook.com/'>
          <img className="w-6 h-6 max-[767px]:w-[20px]  max-[767px]:h-[20px]  cursor-pointer transform transition-transform duration-300 hover:scale-90" src='/facebook.png'/>
          </Link>
          
        </div>
      </div>
    </footer>
        </div>
  );
};
