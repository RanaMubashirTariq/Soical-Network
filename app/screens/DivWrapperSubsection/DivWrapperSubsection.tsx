import React from "react";
import { Badge } from "../../components/ui/badge";
import ScrollReveal from "../../components/ScrollReveal";

export default function DivWrapperSubsection  () {
  return (
    <section className="flex items-center justify-between max-[767px]:flex-col max-[767px]:items-start max-[767px]:flex-col-reverse w-full gap-5 pt-[81px] max-[1000px]:pt-10 px-[120px] max-[1300px]:px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px]  relative">
         <ScrollReveal variant="reveal-right" className="flex flex-col w-full max-w-[462px] max-[767px]:max-w-[100%] items-start gap-5 ">
         <Badge
        variant="secondary"
        className="inline-flex items-center gap-[8.53px] px-[17.83px] py-[9.3px] flex-[0_0_auto] mt-[-0.78px] ml-[-0.78px] rounded-[4.65px] border-[1.55px] border-solid border-[#00000003] backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)] bg-[linear-gradient(141deg,rgba(0,0,0,0.2)_0%,rgba(102,102,102,0.2)_100%)]"
      >
        <span className="w-fit  font-Roboto font-medium text-black text-sm max-[1500px]:text-[12.4px] tracking-[0.50px] leading-[normal]">
          Networking
        </span>
      </Badge>

      <div className="flex flex-col items-start gap-[27px] max-[767px]:gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="w-fit mt-[-1.00px] font-Roboto font-semibold text-black  text-[60px] max-[1500px]:text-[53px] max-[1100px]:text-[48px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[0.27px] leading-[normal] whitespace-nowrap">
          Build Your Network
        </h2>

        <p className="w-[445px] max-[1000px]:w-[350px] max-[767px]:w-[100%]  font-normal text-[#000000e6] text-lg max-[1100px]:text-base max-[767px]:text-sm tracking-[0] leading-[26px] font-Roboto">
          Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet euismod
          dolor sit amet consectetur. Quis vitae vitae amet euismod vel sem ac.
        </p>
      </div>
         </ScrollReveal>



             <ScrollReveal variant="reveal-left">
            <img src="/Frame-2147223557.png" className="w-[750px] max-[1500px]:w-[650px] max-[1300px]:w-[550px] max-[1100px]:w-[450px] max-[1000px]:w-[350px] max-[800px]:w-[300px] max-[1000px]:h-[350px] h-[500px] max-[1500px]:h-[437px] object-contain max-[767px]:w-[100%] max-[767px]:h-auto" alt="" />
            </ScrollReveal>
    </section>
  );
};
