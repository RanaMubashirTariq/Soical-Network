"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export default function FrameSubsection  ()  {
  const reelsRowRef = useRef<HTMLDivElement | null>(null);
  const [cardStep, setCardStep] = useState(333); // fallback
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!reelsRowRef.current) return;
    const row = reelsRowRef.current;
    const firstCard = row.querySelector<HTMLElement>("[data-reel-card]");
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(row).gap || "30");
    const step = firstCard.clientWidth + gap;
    if (step > 0) setCardStep(step);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!reelsRowRef.current) return;
    reelsRowRef.current.scrollTo({ left: Math.max(0, Math.round(index * cardStep)), behavior: "smooth" });
  };

  const scrollLeft = () => {
    const next = Math.max(0, currentIndex - 1);
    setCurrentIndex(next);
    scrollToIndex(next);
  };
  const scrollRight = () => {
    const next = Math.min(reelsData.length - 1, currentIndex + 1);
    setCurrentIndex(next);
    scrollToIndex(next);
  };
  const reelsData = [
    {
      src:'/card-1.jpg',
      name: "Name",
      jobTitle: "Job Tittle",
    },
    {
      src:'/card-2.jpg',
      name: "Name",
      jobTitle: "Job Tittle",
    },
    {
      src:'/card-3.jpg',
      name: "Name",
      jobTitle: "Job Tittle",
    },
    {
      src:'/card-4.jpg',
      name: "Name",
      jobTitle: "Job Tittle",
    },
    {
      src:'/card-1.jpg',
      name: "Name",
      jobTitle: "Job Tittle",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-5 relative pl-[120px] max-[1300px]:pl-[80px] max-[1100px]:pl-[50px] max-[767px]:pl-[25px] max-[767px]:py-10 z-11">
      <Badge
        variant="secondary"
        className="inline-flex items-center gap-[8.53px] px-[17.83px] py-[9.3px] rounded-[4.65px] border-[1.55px] border-solid border-[#00000003] backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)] bg-[linear-gradient(141deg,rgba(0,0,0,0.2)_0%,rgba(102,102,102,0.2)_100%)]"
      >
        <span className="[font-family:'Roboto',Helvetica] font-medium text-black text-[12.4px] tracking-[0.50px] leading-[normal]">
          Networking
        </span>
      </Badge>

      <div className="flex flex-col items-start gap-[61px] max-[767px]:gap-[30px] w-full">
        <h2 className="font-Roboto font-semibold text-black text-[53px] max-[1100px]:text-[48px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[0.27px] leading-[normal]">
          Trending Reels
        </h2>

        <div ref={reelsRowRef} className="flex items-center gap-[30px]  w-full overflow-hidden ">
          {reelsData.map((reel, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[303px] max-[767px]:w-[250px]   h-[368px] bg-[#0a66c2]/10 rounded-[20px] overflow-hidden border border-solid border-[#00000033] backdrop-blur-[22px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22px)_brightness(100%)]"
            >
              <CardContent data-reel-card className="p-0 relative h-full">
                <img className="w-[303px] max-[767px]:w-[250px] h-[227px] rounded-[20px_20px_0px_0px] bg-cover bg-[50%_50%]" src={reel.src} />

                <div className="absolute w-[266px] max-[767px]:w-[220px]  h-[91px] top-[253px] max-[767px]:left-[14px] left-[19px] bg-[#ffffff]/10 rounded-[10px] border border-solid border-[#0000001a] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                  <div className="flex flex-col w-[248px] max-[767px]:w-[200px] items-start gap-[22px] max-[767px]:top-[15px] relative top-[7.5px] left-[9px]">
                    <div className="font-Roboto font-medium text-black text-[17px] max-[767px]:text-sm tracking-[0.09px] leading-[normal]">
                      {reel.name}
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <div className="w-[130px] font-medium text-black text-[17px] max-[767px]:text-sm tracking-[0.09px] leading-[normal] font-Roboto">
                        {reel.jobTitle}
                      </div>

                      <img className="w-[22px] h-[27px] " alt="Logo" src='/logo.png' />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
            
             <div className="flex items-center justify-between w-[140px] max-[767px]:w-[100px] max-[767px]:h-10 h-[60px] absolute top-[600px] max-[767px]:top-[570px] right-[339px] max-[1100px]:right-[239px] max-[767px]:right-[100px] z-10">
                 <img src="/Group-right.png" className="w-[57px] h-[57px] max-[767px]:w-10 max-[767px]:h-10 rotate-[180deg] cursor-pointer select-none" alt="Scroll left" onClick={scrollLeft} />
                 <img src="/Group-right.png" className="w-[57px] h-[57px] max-[767px]:w-10 max-[767px]:h-10 cursor-pointer select-none" alt="Scroll right" onClick={scrollRight} />
             </div>
      </div>
    </section>
  );
};
