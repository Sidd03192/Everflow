import { Card } from "@/components/ui/card";
import { StartButton } from "@/components/ui/StartButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      {/* Left side */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="items-start w-4/5">
          <h1 className="text-8xl font-extrabold mb-4 text-left text-slate-800">
            <span className="green_blue_gradient">Experience</span>  the <span className="text-red-600"> Power</span> of
            <span className="rounded-3xl ml-5 px-2 py-1 leading-tight hover:bg-yellow-200 hover:scale-105 cursor-pointer transform transition-all duration-300 ease-in-out">
    Journaling.
  </span>          </h1>
          <p className="text-xl  mb-6 text-left">
            Start your journaling journey with Everflow. <br></br>
            Capture your thoughts,
            ideas, and memories effortlessly.
          </p>
          <StartButton className="px-6 py-3">
            Get Started
          </StartButton>
         
          
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 p-8">
        {/* You can add content like images, graphics, or additional sections here */}
        <Card className="h-[85vh]"/>
      </div>
    </div>
  );
}
