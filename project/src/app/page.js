'use client';
import { Card } from "@/components/ui/card";
import { StartButton } from "@/components/ui/StartButton";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [effect1, setEffect1] = useState(false);
  const [effect2, setEffect2] = useState(false);
  const [effect3, setEffect3] = useState(false);

  useEffect(() => {
    // Trigger effects sequentially with delays
    const timer1 = setTimeout(() => setEffect1(true), 800); // After 0.5s
    const timer2 = setTimeout(() => setEffect2(true), 1600); // After 1s
    const timer3 = setTimeout(() => setEffect3(true), 2400); // After 1.5s

    // Cleanup timers when component unmounts
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full h-full flex">
      {/* Left side */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="items-start max-w-[80%] ">
          <h1 className="text-8xl font-extrabold mb-4 text-left text-slate-800 ">
            <span
              className={`transform transition-all duration-300 ease-in-out ${
                effect1 ? "green_blue_gradient" : ""
              }`}
            >
              Experience
            </span>
            <br />
            the{" "}
            <span
              className={`transform transition-all duration-300 ease-in-out ${
                effect2 ? "text-red-500" : ""
              }`}
            >
              Power
            </span>{" "}
            of
            <span
              className={`rounded-3xl ml-5 px-2 py-1 leading-tight cursor-pointer transform transition-all duration-300 ease-in-out ${
                effect3 ? "bg-yellow-200 scale-105" : ""
              }`}
            >
              Journaling.
            </span>
          </h1>
          <p className="text-xl mb-6 text-left">
            Start your journaling journey with Everflow. <br />
            Capture your thoughts, ideas, and memories effortlessly.
          </p>
          <StartButton/>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 p-8">
        <Card className="h-[85vh]" />
      </div>
    </div>
  );
}
