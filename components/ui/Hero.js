import React from "react";

export default function Hero() {
  return (
    <div className="flex gap-0 items-start mt-24 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex z-10 flex-col self-start max-md:max-w-full">
        <div className="flex gap-5 pl-20 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="px-px max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-5 font-bold text-white max-md:mt-10 max-md:max-w-full">
                    <div className="text-6xl leading-[74px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                      Streamline Your Freelance Business
                    </div>
                    <div className="mt-5 text-base font-semibold leading-7 max-md:max-w-full">
                      Freelance Hub is a comprehensive SaaS platform that
                      empowers freelancers to manage their business operations
                      with ease
                    </div>
                    <div className="justify-center self-start px-6 py-3 mt-5 text-lg tracking-tight leading-8 bg-indigo-600 rounded-lg max-md:px-5">
                      Get started for free
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://via.placeholder.com/800x450"
                    className="grow w-full aspect-[1.18] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="self-center mt-28 text-xl font-semibold leading-10 text-white max-md:mt-10">
              Powering companies
            </div>
            <div className="flex gap-5 justify-between items-center px-px mt-12 ml-20 max-w-full w-[934px] max-md:flex-wrap max-md:mt-10">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src="https://via.placeholder.com/50"
                  className="shrink-0 self-stretch aspect-[0.96] fill-white w-[49px]"
                />
              ))}
            </div>
          </div>
          <div className="shrink-0 self-end h-14 bg-gray-950 mt-[597px] w-[41px] max-md:mt-10" />
        </div>
      </div>
    </div>
  );
}
