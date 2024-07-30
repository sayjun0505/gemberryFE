// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./style.scss";
import ScreenFirst from "./components/ScreenFirst";
import ScreenFifth from "./components/ScreenFifth";
import ScreenForth from "./components/ScreenForth";
import ScreenSixth from "./components/ScreenSixth";
import ScreenSecond from "./components/ScreenSecond";
import ScreenThird from "./components/ScreenThird";
import { useScreenObj } from "./components/ObjectContext";
import { useCookies } from 'react-cookie';  

const CookieComponent = () => {  
  const [cookies, setCookie, removeCookie] = useCookies(['myCookie']);  
  const [showcookieDkg,setShowcookieDlg]=useState(false);
  useEffect(()=>{
    if(cookies.myCookie==="gemberry")setShowcookieDlg(true);
    else setShowcookieDlg(false);
  },[cookies.myCookie])
  const setMyCookie = () => {  
    setShowcookieDlg(true);
    setCookie('myCookie', 'gemberry', { path: '/' });  
  };  
  const getMyCookie = () => {  
    setShowcookieDlg(true);
    alert(cookies.myCookie);
  };  
  const deleteMyCookie = () => {  
    removeCookie('myCookie', { path: '/' });  
    setShowcookieDlg(true);
  };  
  return (  
    <div className={`${showcookieDkg?"hidden":"flex"} z-50 fixed bottom-8 left-8 bg-gray-800 max-w-[600px] text-white flex-col p-8 shadow-md`}>  
      <h2 className="text-2xl mb-4">Cookie Management</h2>  
      <span>We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking “Accept,” you agree to our website's cookie use as described in our Cookie Policy. You can change your cookie settings at any time by clicking “Preferences.”</span>
      <div className="mt-8 mx-auto w-full flex flex-row justify-between">

      <button className="py-2 px-8 border-2 border-gray-200 rounded-md hover:bg-gray-700" onClick={setMyCookie}>Allow</button>  
      <button className="py-2 px-8 border-2 border-gray-200 rounded-md hover:bg-gray-700" onClick={getMyCookie}>Get Cookie</button>  
      <button className="py-2 px-8 border-2 border-gray-200 rounded-md hover:bg-gray-700" onClick={deleteMyCookie}>Disable</button>  
      </div>
    </div>  
  );  
};  
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    background: "#729fcf",
    width: "auto",
    transform: "translate(-50%, -50%)"
  }
};
function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);
  const { screenObj, setScreenObj } = useScreenObj();
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  function next() {
    setScreenObj((prevScreenObj) => ({
      ...prevScreenObj,
      step: prevScreenObj.step < 6 ? prevScreenObj.step + 1 : "001" 
    }));
  }
  function prev() {
    setScreenObj((prevScreenObj) => ({
      ...prevScreenObj,
      step: prevScreenObj.step > 1 ? prevScreenObj.step - 1 : "006"
    }));
  }
  useEffect(() => {
    const getClientInfo = async () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const browserName = (() => {
        if (userAgent.includes("Chrome")) return "Chrome";
        if (userAgent.includes("Firefox")) return "Firefox";
        if (userAgent.includes("Safari")) return "Safari";
        if (userAgent.includes("MSIE") || userAgent.includes("Trident"))
          return "Internet Explorer";
        return "Other";
      })();
      const os = (() => {
        if (userAgent.includes("Win")) return "Windows";
        if (userAgent.includes("Mac")) return "MacOS";
        if (userAgent.includes("X11") || userAgent.includes("Linux"))
          return "Linux";
        return "Unknown OS";
      })();
      const referrer = document.referrer;
      const language = navigator.language || navigator.userLanguage;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const onlineStatus = navigator.onLine;
      const geolocation = await new Promise((resolve) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) =>
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }),
            () => resolve(null)
          );
        } else {
          resolve(null);
        }
      });
      const localStorageData = JSON.stringify(localStorage);
      const sessionStorageData = JSON.stringify(sessionStorage);
      const networkType = navigator.connection
        ? navigator.connection.effectiveType
        : "unknown";
      const batteryStatus = await new Promise((resolve) => {
        if (navigator.getBattery) {
          navigator.getBattery().then((battery) => {
            resolve({
              level: battery.level * 100,
              charging: battery.charging
            });
          });
        } else {
          resolve(null);
        }
      });
      window.addEventListener("scroll", () => {
        const scrollDepth = window.scrollY;
        console.log("Scroll Depth:", scrollDepth);
      });
      window.addEventListener("focus", () => {
        console.log("Window is focused");
      });
      window.addEventListener("blur", () => {
        console.log("Window is not focused");
      });
      document.addEventListener("mousemove", (event) => {
        const mousePosition = { x: event.clientX, y: event.clientY };
        console.log("Mouse Position:", mousePosition);
      });
      document.addEventListener("touchstart", (event) => {
        console.log("Touch start:", event.touches);
      });
      document.addEventListener("touchmove", (event) => {
        console.log("Touch move:", event.touches);
      });
      document.addEventListener("touchend", (event) => {
        console.log("Touch end:", event.changedTouches);
      });
      const viewportSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      const touchSupport =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const plugins = Array.from(navigator.plugins).map(
        (plugin) => plugin.name
      );
      const pageLoadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      return {
        userAgent,
        browser: browserName,
        operatingSystem: os,
        screenResolution: `${screenWidth}x${screenHeight}`,
        referrer,
        language,
        timeZone,
        geolocation,
        localStorage: localStorageData,
        sessionStorage: sessionStorageData,
        onlineStatus: onlineStatus,
        plugins: plugins,
        pageLoadTime: pageLoadTime,
        viewPort: viewportSize,
        networkType,
        batteryStatus,
        touchSupport
      };
    };
    const sendInfo = async () => {
      const info = await getClientInfo();
      console.log("info:", info); 
    };
    sendInfo();
  }, []);
  return (
      <div className="w-120">
        <CookieComponent />  
        <button onClick={openModal}>Start</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="relative">
              <svg
                className="w-8"
                viewBox="0 0 496 496"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-[#5B402E]"
                  d="M0,232v167.2C0,460.8,52,456,113.6,456h268c61.6,0,113.6,4.8,113.6-56.8V232H0z"
                />
                <path
                  className="fill-[#493322]"
                  d="M112,456h270.4c61.6,0,113.6,4.8,113.6-56.8V232"
                />
                <path
                  className="fill-[#5B402E]"
                  d="M496,192v-40c0-61.6-52-112-113.6-112H113.6C52,40,0,90.4,0,152v40H496z"
                />
                <path
                  className="fill-[#493322]"
                  d="M0,152v40h496v-40c0-61.6-52-112-113.6-112"
                />
                <rect
                  className="fill-[#F2B111]"
                  y="232"
                  width="496"
                  height="64"
                />
                <polyline
                  className="fill-[#E88813]"
                  points="0,296 496,296 496,232 "
                />
                <rect
                  className="fill-[#F2B111]"
                  y="152"
                  width="496"
                  height="40"
                />
                <g>
                  <polyline
                    className="fill-[#E88813]"
                    points="0,192 496,192 496,152"
                  />
                  <rect
                    className="fill-[#E88813]"
                    x="104"
                    y="32"
                    width="56"
                    height="152"
                  />
                  <rect
                    className="fill-[#E88813]"
                    x="336"
                    y="32"
                    width="56"
                    height="152"
                  />
                  <rect
                    className="fill-[#E88813]"
                    x="104"
                    y="288"
                    width="56"
                    height="176"
                  />
                  <rect
                    className="fill-[#E88813]"
                    x="336"
                    y="288"
                    width="56"
                    height="176"
                  />
                </g>
                <g>
                  <circle
                    className="fill-[#493322]"
                    cx="184"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="226.4"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="269.6"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="312"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="33.6"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="75.2"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="420"
                    cy="264.8"
                    r="8.8"
                  />
                  <circle
                    className="fill-[#493322]"
                    cx="462.4"
                    cy="264.8"
                    r="8.8"
                  />
                </g>
                <path
                  className="fill-[#F2B111]"
                  d="M276,346.4c0-15.2-12.8-28-28-28s-28,12.8-28,28c0,10.4,5.6,20,13.6,25.6l-8,52h44.8l-8-52C270.4,367.2,276,356.8,276,346.4z"
                />
                <path
                  className="fill-[#E88813]"
                  d="M270.4,424l-8-52c8-4.8,13.6-15.2,13.6-25.6c0-15.2-12.8-28-28-28s-28,12.8-28,28"
                />
              </svg>
              <h2
                className="absolute top-[5px] text-gray-200 font-bold left-[7px]"
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                52
              </h2>
            </div>
            <div className="w-4/5 h-6 bg-[#8b0000]"></div>
          </div>

          <div
            onClick={closeModal}
            className="absolute right-2 top-2 hover:cursor-pointer hover:text-gray-100  w-8 h-8 text-center"
          >
            <div className="button-3d hover:text-gray-100 ">x</div>
          </div>
          <svg
            className="fill-current text-orange-500 w-6 h-6 absolute right-3 top-12"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 297 297"
            xmlSpace="preserve"
            stroke="#ffaa00"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M251.01,277.015h-17.683l-0.002-31.559c0-31.639-17.358-60.726-48.876-81.901c-3.988-2.682-6.466-8.45-6.466-15.055 s2.478-12.373,6.464-15.053c31.52-21.178,48.878-50.264,48.88-81.904V19.985h17.683c5.518,0,9.992-4.475,9.992-9.993 c0-5.518-4.475-9.992-9.992-9.992H45.99c-5.518,0-9.992,4.475-9.992,9.992c0,5.519,4.475,9.993,9.992,9.993h17.683v31.558 c0,31.642,17.357,60.729,48.875,81.903c3.989,2.681,6.467,8.448,6.467,15.054c0,6.605-2.478,12.373-6.466,15.053c-31.519,21.176-48.876,50.263-48.876,81.903v31.559H45.99c-5.518,0-9.992,4.475-9.992,9.993c0,5.519,4.475,9.992,9.992,9.992h205.02c5.518,0,9.992-4.474,9.992-9.992C261.002,281.489,256.527,277.015,251.01,277.015z M138.508,110.362 c0-5.518,4.474-9.993,9.992-9.993s9.992,4.475,9.992,9.993v17.664c0,5.519-4.474,9.992-9.992,9.992s-9.992-4.474-9.992-9.992 V110.362z M141.433,173.956c1.858-1.857,4.436-2.927,7.064-2.927c2.628,0,5.206,1.069,7.064,2.927 c1.868,1.859,2.928,4.438,2.928,7.065s-1.06,5.206-2.928,7.064c-1.858,1.858-4.436,2.928-7.064,2.928 c-2.628,0-5.206-1.069-7.064-2.928c-1.859-1.858-2.928-4.437-2.928-7.064S139.573,175.816,141.433,173.956z M86.94,277.112 c8.152-30.906,50.161-64.536,55.405-68.635c3.614-2.826,8.692-2.828,12.309,0c5.244,4.1,47.252,37.729,55.404,68.635H86.94z"></path>
            </g>
          </svg>
          <div className="mt-6 flex flex-row w-full gap-4">
            <div
              className="w-0 h-0 hover:cursor-pointer hover:border-r-[#ff0000]
                border-t-[60px] border-t-transparent
                border-r-[50px] border-r-[#dc143c]
                border-b-[60px] border-b-transparent"
              onClick={prev}
            ></div>
            <div className="bg-red-500 w-[340px]">
              {screenObj.step === 1 && <ScreenFirst />}
              {screenObj.step === 2 && <ScreenSecond />}
              {screenObj.step === 3 && <ScreenThird />}
              {screenObj.step === 4 && <ScreenForth />}
              {screenObj.step === 5 && <ScreenFifth />}
              {screenObj.step === 6 && <ScreenSixth />}
            </div>
            <div
              className="w-0 h-0  hover:cursor-pointer hover:border-l-[#ff0000]
                    border-t-[60px] border-t-transparent
                    border-l-[50px] border-l-[#dc143c]
                    border-b-[60px] border-b-transparent"
              onClick={next}
            ></div>
          </div>
          <span className="">user name</span>
        </Modal>
      </div>
  );
}
export default App;
