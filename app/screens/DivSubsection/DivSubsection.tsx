import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import Link from "next/link";

export default function DivSubsection  ()  {
  return (
    <section className="w-full bg-[#ebf2fa]    mt-[107px] mb-[77px] max-[1000px]:mt-10 max-[1000px]:mb-10">
      <div className="relative w-full">
        <div className="w-full">
          <div className="relative bg-cover bg-[50%_50%] ">
            <img className="w-full h-[420px] max-[767px]:h-[370px] max-[420px]:h-[440px] max-[350px]:h-[500px] object-cover " alt="Mask group" src='/mask-group.png' />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <Card className="w-[828px] max-[767px]:w-[100%] bg-transparent border-none shadow-none max-[767px]:px-[20px] ">
            <CardContent className="flex flex-col items-center gap-5 p-0">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-[8.53px] px-[17.83px] py-[9.3px] mt-[-0.78px] max-[500px]:mt-5 rounded-[4.65px] border-[1.55px] border-solid border-[#00000003] backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)] bg-[linear-gradient(141deg,rgba(0,0,0,0.2)_0%,rgba(102,102,102,0.2)_100%)] text-black font-Roboto font-medium text-sm max-[1500px]:text-[12.4px] tracking-[0.50px] leading-[normal]"
              >
                Networking
              </Badge>

              <div className="flex flex-col items-center gap-[19px] w-full">
                <div className="flex flex-col items-center gap-[30px] max-[767px]:gap-[15px] w-full">
                  <h2 className=" font-Roboto font-semibold text-black text-[63px] max-[1100px]:text-[48px] max-[767px]:text-[36px] text-center tracking-[0.32px] leading-[normal]">
                    Connected Overall The World
                  </h2>

                  <p className="w-[484px] max-[767px]:w-[100%] font-normal text-[#000000e6] text-lg max-[1100px]:text-base max-[767px]:text-sm max-[767px]:leading-[22px] text-center tracking-[0] leading-[26px] font-Roboto">
                    Lorem ipsum dolor sit amet consectetur. Quis vitae vitae
                    amet euismod dolor sit amet consectetur. Quis vitae vitae
                    amet euismod vel sem ac.
                  </p>
                </div>

                <div className="inline-flex items-start max-[330px]:flex-col">
                  <Link href='https://play.google.com/store'>
                  <img className="w-[250.49px]  h-[92px] max-[1100px]:w-[220px] max-[1100px]:h-[80px] max-[767px]:w-[160px] max-[767px]:h-14 object-cover  cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="Element f" src='/playstore.png' />
                  </Link>

                  <Link href='https://www.apple.com/app-store/'>
                  <img
                    className="w-[235.99px] h-[88.5px] ml-[-16.49px] max-[1100px]:w-[205px] max-[1100px]:h-[80px] max-[767px]:w-[160px] max-[767px]:h-14 object-cover max-[420px]:ml-0 cursor-pointer transform transition-transform duration-300 hover:scale-90"
                    alt="Element f"
                    src='/applestore.png'
                  />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
