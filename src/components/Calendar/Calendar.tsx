"use client";
import React, { useEffect } from "react";

const Calendar = () => {
  const url =
    "https://calendly.com/akif-techling/30min?hide_event_type_details=1&hide_gdpr_banner=1";

  useEffect(() => {
    const head: any = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="bg-[url('/images/bgcal.png')]  bg-cover bg-no-repeat overflow-hidden relative">
      <div className="backdrop-brightness-50 pt-20 pb-5">
        <div className="lg:grid-cols-2 grid gap-10 z-50 w-full items-center px-5">
          <div className="z-50">
            <p className="text-white font-semibold lg:text-[36px] text-[25px] mx-auto xl:text-[60px] max-w-[500px]">
              Let's talk about your next big project
            </p>
          </div>
          <div className="z-50 grid justify-center items-center">
            <div
              className="calendly-inline-widget"
              data-url={url}
              style={{ minHeight: "650px", width: "500px", height: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

