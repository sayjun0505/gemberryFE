import Tree from "../assets/images/tree.svg";
import React, {  useEffect } from "react";
export default function ScreenSecond() {
  const buttonSize = "32px";
  useEffect(() => {
    document.documentElement.style.setProperty("--button-height", buttonSize);
  }, [buttonSize]);
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between w-full">
        <div className="w-12 h-32 bg-white flex flex-col p-1 justify-between">
          <svg
            fill="#00ff00"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 582.207 582.207"
            xmlSpace="preserve"
            stroke="#00ff00"
            className="w-full "
            style={{ transform: "rotate(180deg)" }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M291.104,0C130.589,0,0,130.588,0,291.104c0,160.516,130.589,291.104,291.104,291.104s291.103-130.588,291.103-291.104 C582.207,130.588,451.619,0,291.104,0z M291.104,521.008c-126.77,0-229.904-103.141-229.904-229.904 C61.2,164.34,164.334,61.2,291.104,61.2c126.769,0,229.904,103.141,229.904,229.904 C521.008,417.867,417.873,521.008,291.104,521.008z"></path>
                  <path d="M389.752,324.006V125.105c0-6.249-5.066-11.316-11.316-11.316H203.771c-6.249,0-11.316,5.067-11.316,11.316v198.893 h-53.672c-15.618,0-19.327,8.955-8.28,20L271.11,484.605c11.047,11.047,28.955,11.047,40,0L451.711,344 c11.047-11.047,7.338-20.002-8.279-20.002h-53.68V324.006z"></path>
                </g>
              </g>
            </g>
          </svg>
          <svg
            fill="#ff0000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 582.207 582.207"
            xmlSpace="preserve"
            stroke="#ff0000"
            className="w-full"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M291.104,0C130.589,0,0,130.588,0,291.104c0,160.516,130.589,291.104,291.104,291.104s291.103-130.588,291.103-291.104 C582.207,130.588,451.619,0,291.104,0z M291.104,521.008c-126.77,0-229.904-103.141-229.904-229.904 C61.2,164.34,164.334,61.2,291.104,61.2c126.769,0,229.904,103.141,229.904,229.904 C521.008,417.867,417.873,521.008,291.104,521.008z"></path>
                  <path d="M389.752,324.006V125.105c0-6.249-5.066-11.316-11.316-11.316H203.771c-6.249,0-11.316,5.067-11.316,11.316v198.893 h-53.672c-15.618,0-19.327,8.955-8.28,20L271.11,484.605c11.047,11.047,28.955,11.047,40,0L451.711,344 c11.047-11.047,7.338-20.002-8.279-20.002h-53.68V324.006z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <img src={Tree} alt="aaa" className="w-32" />
        <div className="z-50 flex items-end">
          <div className="container">
            <div className="button" ></div>
          </div>
        </div>
      </div>
      <div className="h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
    </div>
  );
}
