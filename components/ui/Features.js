import React from "react";

export default function Features() {
  const features = [
    {
      title: "Note taking",
      description:
        "Capture your ideas, to-dos, and meeting notes in a clean and organized workspace.",
      imgSrc: "https://via.placeholder.com/74",
    },
    {
      title: "Video Sharing",
      description:
        "Record and share videos with clients, team members, and collaborators.",
      imgSrc: "https://via.placeholder.com/74",
    },
    {
      title: "Invoicing",
      description:
        "Generate professional invoices and get paid faster with integrated Stripe payments.",
      imgSrc: "https://via.placeholder.com/74",
    },
    {
      title: "Client messaging",
      description:
        "Communicate with clients in a dedicated messaging portal, keeping conversations organized.",
      imgSrc: "https://via.placeholder.com/74",
    },
  ];

  return (
    <div className="flex justify-center items-center px-16 mt-24 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-w-[1117px] max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col self-center max-w-full font-bold text-white w-[449px]">
            <div className="mx-11 text-6xl tracking-tighter leading-[72px] max-md:mx-2.5 max-md:text-4xl">
              Our features
            </div>
            <div className="mt-5 text-xl tracking-tighter leading-8 text-center max-md:max-w-full">
              Here is our amazing teaching method that suits for
              <br />
              you. Read our features and know the best
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                >
                  <div className="flex flex-col grow items-center text-center text-white max-md:mt-10">
                    <img
                      loading="lazy"
                      src={feature.imgSrc}
                      className="aspect-square w-[74px]"
                    />
                    <div className="mt-5 text-2xl font-medium">
                      {feature.title}
                    </div>
                    <div className="self-stretch mt-5 text-xl font-bold tracking-tighter leading-8">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
