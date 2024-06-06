import React from "react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Startup",
      price: "$14",
      features: [
        "5 Social Profiles",
        "5 Scheduled Posts Per Profile",
        "400+ Templates",
        "Calendar View",
        "24/7 Support",
      ],
    },
    {
      name: "Business",
      price: "$29",
      features: [
        "10 Social Profiles",
        "25 Scheduled Posts Per Profile",
        "400+ Templates",
        "Calendar View",
        "24/7 VIP Support",
      ],
    },
    {
      name: "Agency",
      price: "$139",
      features: [
        "100 Social Profiles",
        "100 Scheduled Posts Per Profile",
        "400+ Templates",
        "Calendar View",
        "24/7 VIP Support",
      ],
    },
  ];

  return (
    <div className="px-5 mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col grow justify-center text-center max-md:mt-10">
              <div className="flex flex-col justify-center px-16 py-8 rounded-3xl border border-solid backdrop-blur-2xl border-zinc-100 max-md:px-5">
                <div className="flex flex-col max-md:mr-2.5 max-md:ml-2">
                  <div className="flex flex-col">
                    <div className="flex flex-col self-center max-w-full">
                      <div className="flex flex-col self-center font-bold text-white whitespace-nowrap">
                        <div className="text-2xl">{plan.name}</div>
                        <div className="mt-3 text-6xl max-md:text-4xl">
                          {plan.price}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-neutral-500">
                        per user, per month
                      </div>
                    </div>
                    <div className="justify-center px-10 py-5 mt-6 text-sm font-bold border border-white border-solid rounded-[38px] text-zinc-300 max-md:px-5">
                      Start My 15-day Trial
                    </div>
                  </div>
                  <div className="flex flex-col pt-6 mt-7 text-sm font-medium text-white">
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mt-4"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
