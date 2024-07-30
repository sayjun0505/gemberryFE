import React from "react";
export default function ScreenFifth() {
  return (
    <div className="w-full flex flex-col gap-2 p-4">
      <div className="w-full h-16 bg-[#8b0000]"></div>
      <div className="flex flex-row justify-between w-full">
        <div className="w-[49%] gap-2 flex flex-col">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-8 h-8 bg-[#ffa07a]">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <polyline
                  points="40,110 90,160 160,0"
                  fill="none"
                  stroke="black"
                  strokeWidth="30"
                />
              </svg>
            </div>
            <div className="w-28 h-10 bg-[#ffa07a]"></div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-8 h-8 bg-[#ffa07a]"></div>
            <div className="w-28 h-10 bg-[#ffa07a]"></div>
          </div>
        </div>
        <div className="w-[49%] flex flex-col justify-center gap-2">
          <div className="flex w-full justify-between flex-row items-center">
            <div className="w-8 h-8 rounded-full bg-[#ffa07a] flex justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-black"></div>
            </div>
            <div className="w-8 h-6 bg-[#fe713c] text-center font-bold">A</div>
            <div className="w-8 h-8 rounded-full bg-[#ffa07a]"></div>
            <div className="w-8 h-6 bg-[#fe713c] text-center font-bold">B</div>
          </div>
          <div className="flex w-full justify-between flex-row items-center">
            <div className="w-8 h-8 bg-[#ffa07a] rounded-full "></div>
            <div className="w-8 h-6 bg-[#fe713c] text-center font-bold">C</div>
            <div className="w-8 h-8 bg-[#ffa07a] rounded-full "></div>
            <div className="w-8 h-6 bg-[#fe713c] text-center font-bold">D</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-row w-full gap-4">
        <div className="z-50">
          <div className="xbutton" ></div>
        </div>
        <div className="z-50">
          <div className="xbutton" ></div>
        </div>
      </div>
    </div>
  );
}
