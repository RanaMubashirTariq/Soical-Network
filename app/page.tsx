import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import OverlapGroupWrapperSubsection from "./screens/OverlapGroupWrapperSubsection/OverlapGroupWrapperSubsection";
import FrameWrapperSubsection from "./screens/FrameWrapperSubsection/FrameWrapperSubsection";
import DivWrapperSubsection from "./screens/DivWrapperSubsection/DivWrapperSubsection";
import FrameSubsection from "./screens/FrameSubsection/FrameSubsection";
import OverlapWrapperSubsection from "./screens/OverlapWrapperSubsection/OverlapWrapperSubsection";
import DivSubsection from "./screens/DivSubsection/DivSubsection";
import SectionComponentNodeSubsection from "./screens/SectionComponentNodeSubsection/SectionComponentNodeSubsection";
import SignUpController from "./components/SignUpController";

export default function Home() {
  return (
    <div className="w-full bg-white relative overflow-hidden">
        <OverlapGroupWrapperSubsection/>
        <div id="faqs">
          <ScrollReveal>
            <FrameWrapperSubsection/>
          </ScrollReveal>
        </div>
        <div id="desk">
          <ScrollReveal delayMs={100}>
            <DivWrapperSubsection/>
          </ScrollReveal>
        </div>
        <div id="help">
          <ScrollReveal delayMs={150} className="relative z-20">
            <FrameSubsection/>
          </ScrollReveal>
        </div>
        <div id="about">
          <ScrollReveal>
            <OverlapWrapperSubsection/>
          </ScrollReveal>
        </div>
        <div id="contact">
          <ScrollReveal>
            <DivSubsection/>
          </ScrollReveal>
        </div>
        <SectionComponentNodeSubsection/>
        <SignUpController/>
          <div className="w-[399px] h-[263px] absolute top-[542px] left-[-260px]  max-[1100px]:h-[200px] max-[1100px]:w-[300px] max-[1100px]:right-[-150px] max-[1000px]:top-[900px] max-[767px]:top-[600px] z-11">
          <img src="/img-1.png" className="w-full h-full blur-[90px]" alt="" />
          </div>
        <img src="/3d-illsutration.png" className="w-[249px] h-[238px] absolute top-[592px] right-[-25.9px] object-cover pointer-events-none max-[1100px]:w-[190px] max-[1100px]:h-[200px] max-[100px]:object-contain max-[1100px]:right-[-20px] max-[1000px]:top-[900px] max-[767px]:w-[150px] max-[767px]:h-[150px] max-[767px]:top-[650px] max-[350px]:top-[700px] z-0" alt="" />
        <img src='/abstract-circal.png' className="w-[510px] h-[600px] max-[1100px]:h-[400px] max-[767px]:w-[350px] max-[767px]:h-[300px] max-[767px]:left-[-210px] max-[767px]:top-[2570px] max-[1000px]:top-[2200px] max-[500px]:top-[2350px] max-[400px]:top-[2300px] max-[500px]:left-[-230px] max-[330px]:left-[-210px]   absolute top-[2110px] left-[-310px] inset-0 z-0 pointer-events-none"/>
        <img src="/social-app.png" className="w-[284px] h-[189px] max-[1000px]:w-[200px] max-[1000px]:h-[150px]  max-[500px]:w-[150px] max-[500px]:h-[100px] absolute top-[2165px] max-[1000px]:top-[2265px] max-[900px]:top-[2220px] max-[900px]:top-[2200px] max-[767px]:top-[2550px]  max-[500px]:top-[2400px] max-[400px]:top-[2350px] right-[-94px] max-[1000px]:right-[-50px] z-0" alt="" />
    </div>
  );
}
