"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export default function FrameSubsection() {
  const reelsRowRef = useRef<HTMLDivElement | null>(null);
  const [cardStep, setCardStep] = useState(333);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 👉 Track scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!reelsRowRef.current) return;
    const row = reelsRowRef.current;

    const firstCard = row.querySelector<HTMLElement>("[data-reel-card]");
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(row).gap || "30");
    const step = firstCard.clientWidth + gap;
    if (step > 0) setCardStep(step);

    // 👉 Listen for scroll to toggle padding
    const handleScroll = () => {
      setIsScrolled(row.scrollLeft > 0);
    };

    row.addEventListener("scroll", handleScroll);
    return () => row.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!reelsRowRef.current) return;
    reelsRowRef.current.scrollTo({
      left: Math.max(0, Math.round(index * cardStep)),
      behavior: "smooth",
    });
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
    { src: "/card-1.jpg", name: "Name", jobTitle: "Job Title" },
    { src: "/card-2.jpg", name: "Name", jobTitle: "Job Title" },
    { src: "/card-3.jpg", name: "Name", jobTitle: "Job Title" },
    { src: "/card-4.jpg", name: "Name", jobTitle: "Job Title" },
    { src: "/card-1.jpg", name: "Name", jobTitle: "Job Title" },
  ];

  return (
    <section
      className="flex flex-col w-full items-start gap-[61px] max-[767px]:gap-[30px] relative max-[767px]:pt-[30px]"
    >
  <div className="flex flex-col gap-5 pl-[120px] max-[1300px]:pl-[80px] max-[1100px]:pl-[50px] max-[767px]:pl-[25px]">
  <Badge
        variant="secondary"
        className="inline-flex w-[104px] items-center gap-[8.53px] px-[17.83px] py-[9.3px] rounded-[4.65px] border-[1.55px] border-solid border-[#00000003] backdrop-blur-[17px] backdrop-brightness-[100%] bg-[linear-gradient(141deg,rgba(0,0,0,0.2)_0%,rgba(102,102,102,0.2)_100%)]"
      >
        <span className="font-medium text-black text-[12.4px] tracking-[0.50px]">
          Networking
        </span>
      </Badge>
      <h2 className="font-Roboto font-semibold text-black text-[53px] max-[1100px]:text-[48px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[0.27px]">
        Trending Reels
      </h2>
  </div>



      <div className={`flex flex-col items-start  max-[767px]:gap-[30px] w-full 
               ${isScrolled ? "pl-0" : "pl-[120px] max-[1300px]:pl-[80px] max-[1100px]:pl-[50px] max-[767px]:pl-[25px]"} 
       z-11
        `}>
        {/* Scrollable row */}
        <div
          ref={reelsRowRef}
          className="flex items-center gap-[30px] w-full overflow-x-scroll scrollbar-hide"
        >
          {reelsData.map((reel, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-[303px] max-[767px]:w-[250px] h-[368px] bg-[#0a66c2]/10 rounded-[20px] overflow-hidden border border-solid border-[#00000033] backdrop-blur-[22px] 
                ${index === reelsData.length - 1
                  ? "mr-[120px] max-[1300px]:mr-[80px] max-[1100px]:mr-[50px] max-[767px]:mr-[25px]"
                  : ""}`}
            >
              <CardContent data-reel-card className="p-0 relative h-full">
                <img
                  className="w-[303px] max-[767px]:w-[250px] h-[227px] rounded-t-[20px] object-cover"
                  src={reel.src}
                />
                <div className="absolute w-[266px] max-[767px]:w-[220px] h-[91px] top-[253px] left-[19px] max-[767px]:left-[14px] bg-[#ffffff]/10 rounded-[10px] border border-solid border-[#0000001a] backdrop-blur-[50px]">
                  <div className="flex flex-col w-[248px] max-[767px]:w-[200px] items-start gap-[22px] relative top-[7.5px] left-[9px]">
                    <div className="font-Roboto font-medium text-black text-[17px] max-[767px]:text-sm">
                      {reel.name}
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="w-[130px] font-medium text-black text-[17px] max-[767px]:text-sm">
                        {reel.jobTitle}
                      </div>
                      <img className="w-[22px] h-[27px]" src="/logo.png" alt="Logo" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scroll buttons */}
        <div className="flex items-center justify-between w-[140px] max-[767px]:w-[100px] h-[60px] max-[767px]:h-10 absolute top-[600px] max-[767px]:top-[570px] right-[339px] max-[1100px]:right-[239px] max-[767px]:right-[100px] z-10">
          <img
            src="/Group-right.png"
            className="w-[57px] h-[57px] max-[767px]:w-10 max-[767px]:h-10 rotate-180 cursor-pointer select-none"
            alt="Scroll left"
            onClick={scrollLeft}
          />
          <img
            src="/Group-right.png"
            className="w-[57px] h-[57px] max-[767px]:w-10 max-[767px]:h-10 cursor-pointer select-none"
            alt="Scroll right"
            onClick={scrollRight}
          />
        </div>
      </div>
    </section>
  );
}
