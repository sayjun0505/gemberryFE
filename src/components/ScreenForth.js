import React, {  useEffect } from "react";
export default function ScreenForth() {
  const buttonSize = "34px";
  useEffect(() => {
    document.documentElement.style.setProperty("--button-height", buttonSize);
  }, [buttonSize]);
  return (
    <div className="w-full flex flex-row gap-2 p-4">
      <div className="w-1/2 flex flex-col justify-between">
        <div className=""></div>
        <div className="w-4/5 h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="flex flex-row gap-4">
          <div className="container z-50">
            <div className="button" ></div>
          </div>
          <div className="container z-50">
            <div className="button" ></div>
          </div>
          <div className="container z-50">
            <div className="button" ></div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="container z-50">
            <div className="button" ></div>
          </div>
          <div className="container z-50">
            <div className="button" ></div>
          </div>
          <div className="container z-50">
            <div className="button" ></div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="container z-50">
            <div className="button" ></div>
          </div>
          <div className="container z-50">
            <div className="button" ></div>
          </div>
          <div className="container z-50">
            <div className="button" ></div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="w-4/5 h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
          <div className="button-xd hover:text-gray-100 "></div>
        </div>
      </div>
    </div>
  );
}
