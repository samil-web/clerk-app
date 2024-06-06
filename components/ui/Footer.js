import React from "react";

export default function Footer() {
  return (
    <div className="flex gap-5 justify-between pt-16 pr-8 pb-10 pl-16 mt-20 w-full bg-gray-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start">
        <div className="flex flex-col text-white">
          <div className="justify-center py-1.5 text-4xl font-bold leading-6 whitespace-nowrap">
            FreelanceHub.
          </div>
          <div className="mt-8 text-base font-medium leading-7">
            Transform your freelance business
          </div>
        </div>
        <div className="flex gap-3.5 pr-20 mt-7 max-md:pr-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center px-1.5 bg-white h-[30px] rounded-[34px] w-[30px]"
            >
              <img
                loading="lazy"
                src="https://via.placeholder.com/30"
                className="w-5 aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-center text-white max-md:mt-10">
              <div className="text-xl font-bold leading-7">Company</div>
              <div className="flex flex-col mt-10 text-base font-medium leading-3">
                {[
                  "About",
                  "Carrers",
                  "Mobile",
                  "How it Works",
                  "Contact Us",
                ].map((text, index) => (
                  <div key={index} className="mt-8">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-center text-white max-md:mt-10">
              <div className="text-xl font-bold leading-7">Support</div>
              <div className="flex flex-col mt-10 text-base font-medium leading-4">
                {["Support Carrer", "24h Service", "Quick Chat"].map(
                  (text, index) => (
                    <div key={index} className="mt-8">
                      {text}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xl font-bold text-white max-md:mt-10">
              <div className="text-center leading-[130%]">Contact with us</div>
              <div className="justify-center items-start px-5 py-2.5 mt-8 font-medium leading-10 border border-solid shadow-sm border-neutral-500 rounded-[88px] text-neutral-500">
                Enter your number
              </div>
              <div className="justify-center px-8 py-3 mt-8 text-sm tracking-tight leading-6 text-center bg-violet-600 rounded-[74px] max-md:px-5">
                Request a demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
