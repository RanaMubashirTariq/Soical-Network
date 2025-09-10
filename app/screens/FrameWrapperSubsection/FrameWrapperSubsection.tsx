import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import ScrollReveal from "../../components/ScrollReveal";

export default function FrameWrapperSubsection  () {
  return (
    <section className="relative z-[51] flex items-center justify-between w-full max-[767px]:flex-col max-[767px]:items-start max-[500px]:gap-5 relative pt-[109px] max-[1000px]:pt-10 px-[120px] max-[1300px]:px-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
      <ScrollReveal variant="reveal-left">
      <img className="relative w-[430px] h-[430px] max-[1100px]:w-[400px] max-[1100px]:h-[400px] max-[900px]:w-[300px] max-[900px]:h-[350px] max-[767px]:w-[100%] max-[767px]:h-auto z-[51] relative" alt="Frame" src='/Frame-2147223535.png' />
       </ScrollReveal>


      <ScrollReveal variant="reveal-right" className="flex flex-col w-[451px]  max-[900px]:w-[400px] max-[767px]:w-[100%] items-start gap-2.5 p-2.5 relative">
        <div className="flex flex-col items-start gap-2.5 max-[500px]:gap-0 p-2.5 max-[500px]:p-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[21px] max-[500px]:gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-[8.53px] px-[17.83px] py-[9.3px] relative flex-[0_0_auto] mt-[-0.78px] ml-[-0.78px] rounded-[4.65px] border-[1.55px] border-solid border-[#00000003] backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)] bg-[linear-gradient(141deg,rgba(0,0,0,0.2)_0%,rgba(102,102,102,0.2)_100%)] font-Roboto font-medium text-black text-[12.4px] tracking-[0.50px] leading-[normal]"
            >
              Networking
            </Badge>

            <div className="flex flex-col items-start gap-[27px] max-[500px]:gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative w-[411px] max-[767px]:w-[100%] mt-[-1.00px] font-Roboto font-semibold text-black text-[53px] max-[1100px]:text-[48px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[0.27px] leading-[normal]">
                Why Networking
                <br className="max-[900px]:hidden" />
                Com
              </h2>

              <p className="w-[411px] max-[900px]:w-[370px] max-[767px]:w-[100%] font-normal text-[#000000e6] text-lg max-[1100px]:text-base max-[767px]:text-sm tracking-[0] leading-[26px] relative font-Roboto">
                Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet
                euismod dolor sit amet consectetur. Quis vitae vitae amet
                euismod vel sem ac.
              </p>

              <Button className="inline-flex items-center gap-[11px] px-[23px] py-3 relative flex-[0_0_auto] bg-[#019e54] rounded-md border border-solid border-[#00000033] shadow-[inset_11px_11px_24px_#00442440] font-Roboto font-medium text-white text-base max-[767px]:text-sm tracking-[0] leading-[normal] whitespace-nowrap h-auto hover:bg-[#019e54]/90 cursor-pointer transform transition-transform duration-300 hover:scale-90">
                Download MobileApp
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
