import React, { useEffect } from "react";
import { useScreenObj } from "../components/ObjectContext";

export default function ScreenFirst() {
  const buttonSize = "65px";
  useEffect(() => {
    document.documentElement.style.setProperty("--button-height", buttonSize);
  }, [buttonSize]);
  const setindexValue = (id) => {
    screenObj.MainButtons.Set_index_Value = id;
    setScreenObj((prevScreenObj) => ({
      ...prevScreenObj,
      step: prevScreenObj.step < 6 ? prevScreenObj.step + 1 : 1 
    }));
    console.log("From parent:", screenObj);
  };
  const { screenObj, setScreenObj } = useScreenObj();
  return (
    <div className="w-full flex flex-row gap-2 p-4 ">
      <div className="flex flex-col" onClick={() => setindexValue(1)}>
        <div className="container z-50">
          <div className="button"></div>
        </div>
        <div className="h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
      </div>
      <div className="flex flex-col" onClick={() => setindexValue(2)}>
        <div className="container z-50">
          <div className="button"></div>
        </div>
        <div className="h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
      </div>
      <div className="flex flex-col" onClick={() => setindexValue(3)}>
        <div className="container z-50">
          <div className="button"></div>
        </div>
        <div className="h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
      </div>
      <div className="flex flex-col" onClick={() => setindexValue(4)}>
        <div className="container z-50">
          <div className="button"></div>
        </div>
        <div className="h-6 bg-[#8b0000] border-2 border-[#729fcf]"></div>
      </div>
    </div>
  );
}
