import React, {  useEffect } from "react";
export default function ScreenSixth() {
  const buttonSize = "32px";
  useEffect(() => {
    document.documentElement.style.setProperty("--button-height", buttonSize);
  }, [buttonSize]);
  return (
    <div className="w-full flex flex-col gap-2 p-4">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="w-3/5 h-24 bg-[#8b0000] "></div>
        <div className="z-50">
          <div className="button-xds hover:text-gray-100 "></div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-row w-full gap-2">
        <div className="z-50">
          <div className="xbutton" ></div>
        </div>
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
