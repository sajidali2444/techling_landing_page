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
    <div className="bg-[url('/images/bgcal.png')] mt-20 py-10 bg-cover bg-no-repeat overflow-hidden relative">
      <div className="min-h-full min-w-full bg-black/30   px-5 top-0 left-0 absolute" />
      <div className="lg:grid-cols-2 grid gap-10 py-[50px] z-50 w-full items-center px-5">
        <div className="z-50">
          <p className="text-white font-semibold lg:text-[36px] text-[25px] mx-auto xl:text-[60px] max-w-[500px]">
            Let's talk about your next big project
          </p>
        </div>
        <div className="max-w-[540px]  rounded-[10px] mx-auto h-[700px] w-full z-50">
          <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minHeight: "650px", width: "100%", height: "700px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

