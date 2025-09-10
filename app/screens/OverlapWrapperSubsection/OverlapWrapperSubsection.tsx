import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function OverlapWrapperSubsection () {
  const testimonialData = {
    text: "Lorem ipsum dolor sit amet consectetur. Sed feugiat sed lorem duis. Ultricies nulla amet mauris nam. Sed turpis eu urna amet massa accumsan vulputate. Gravida fermentum pharetra vulputate nam nulla laoreet nec ullamcorper.",
    author: {
      name: "Samantha",
      title: "CEO",
    },
  };

  return (
    <section className="w-full h-[412px] max-[1000px]:h-[370px] max-[767px]:h-[600px] max-[500px]:h-[650px] relative px-[120px] max-[1300px]:px-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:mt-[180px] max-[767px]:mt-[100px] mt-[227px]">
      <div className="relative h-[412px] max-[1000px]:h-[370px] max-[767px]:h-[600px]  max-[500px]:h-[650px]  rounded-[28.57px] max-[500px]:rounded-[20px] overflow-hidden ">
        <img className="absolute inset-0 w-full h-full object-cover z-0" src='/background-1.jpg'/>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)] z-10"></div>

        <div className="relative z-20 flex items-center  max-[767px]:flex-col max-[767px]:items-start gap-[73.33px] max-[900px]:gap-8 w-[837px] mx-auto py-10 max-[1000px]:px-5">
          <div className="w-[333.33px] h-[333.33px] max-[1000px]:w-[270px] max-[1000px]:h-[270px] max-[800px]:h-[300px] max-[767px]:w-[80%] max-[560px]:w-[55%] max-[500px]:w-[333px] max-[420px]:w-[300px] max-[400px]:w-[280px] max-[400px]:h-[280px] max-[350px]:w-[250px] max-[350px]:h-[250px] max-[330px]:w-[230px]">
            <img className="w-full h-full p-0" src='/Frame-2147223552.png' />
          </div>

          <div className="flex flex-col w-[423.81px] max-[900px]:w-[350px] max-[800px]:w-[300px] max-[767px]:w-[80%] max-[560px]:w-[58%] max-[500px]:w-[40%] max-[400px]:w-[300px] max-[350px]:w-[250px]  items-start gap-[26.67px]">
            <p className="mt-[-0.95px] font-medium text-[#ffffff]/90 text-[17.1px] max-[767px]:text-[14px] max-[767px]:leading-[22px] tracking-[0] leading-[26.7px] font-Roboto">
              {testimonialData.text}
            </p>

            <div className="flex flex-col w-[100px] items-start gap-[12.38px]">
              <h3 className=" font-Roboto font-semibold text-[#ffffff]/90 text-[21.9px] max-[767px]:text-[18px] tracking-[0] leading-[26.7px]">
                {testimonialData.author.name}
              </h3>

              <p className="font-Roboto font-medium text-[#ffffff]/90 text-[21px] max-[767px]:text-[18px] tracking-[0] leading-[26.7px]">
                {testimonialData.author.title}
              </p>
            </div>
          </div>
        </div>

        <img
          className="absolute w-[294px] h-[165px] top-[270px] -right-[30px] object-cover z-20 max-[767px]:w-[200px] max-[767px]:top-[470px]  max-[500px]:top-[530px]"
          alt="Element colorful abstract"
          src='/glass-vise.png'
        />
      </div>
    </section>
  );
};
