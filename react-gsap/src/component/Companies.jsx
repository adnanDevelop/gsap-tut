import React from "react";

const Companies = () => {
  const details = {
    first: [
      {
        image: "/image/companies/img-1.svg",
        avator: "/image/companies/avator-1.jpg",
        title: "Emma Johnson",
        subTitle: "CEO, Co-Founder",
        content:
          "Streamline your workflow and save valuable time with this SaaS platform's powerful AI models, which takes care of the heavy lifting and delivers top-notch results.",
      },

      {
        image: "/image/companies/img-2.svg",
        title: "Rober Thomson",
        subTitle: "Chief Information Officer",
        content:
          "Transform your business with this SaaS platform's outstanding AI models API, which delivers unparalleled efficiency, great service, and outstanding results.",
      },
    ],

    second: [
      {
        image: "/image/companies/img-4.svg",
        title: "William Methew",
        subTitle: "Software Developer",
        content:
          "This SaaS platform offers an API for integrating AI models into your app with ease, delivering impressive results and enabling you to take your business to the next level.",
      },
      {
        image: "/image/companies/img-3.svg",
        avator: "/image/companies/avator-2.jpg",
        title: "Chritoper Devid",
        subTitle: "Network Administrator",
        content:
          "Differentiate your app from the competition with this SaaS platform's outstanding performance and exceptional API for implementing AI models into your application.",
      },
    ],

    third: [
      {
        image: "/image/companies/img-5.svg",
        avator: "/image/companies/avator-3.jpg",
        title: "Samantha Grace",
        subTitle: "Data Analyst",
        content:
          "Experience game-changing AI models that are accessible and user-friendly, thanks to this exceptional SaaS platform that offers an API for seamless integration.",
      },

      {
        image: "/image/companies/img-6.svg",
        title: "Olivia Rodrig",
        subTitle: "Human Resource",
        content:
          "Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers exceptional service to ensure your success.",
      },
    ],
  };

  return (
    <div className="py-[80px]">
      {/* Header part */}
      <div className="text-center mb-[40px]">
        <h2 className="font-semibold text-white text-[40px]">
          Trusted by leading companies
        </h2>
        <p className="font-normal text-white">
          Learn why top companies from around the globe choose us
        </p>
      </div>

      <div className="px-[60px] grid grid-cols-12 gap-5">
        {/* first */}
        <div className="flex flex-col col-span-4 gap-4">
          {details?.first.map((element, index) => {
            return (
              <div key={index} className=" p-[50px] rounded-2xl bg-[#191c21]">
                <div className="mb-[10px]">
                  <img
                    src={element.image}
                    className="w-[150px] h-[50px] object-cover mx-auto"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p
                    className="text-base text-justify text-[#b1b3b5]"
                    style={{ textAlignLast: "center" }}
                  >
                    {element.content}
                  </p>
                </div>

                {/* avator section */}
                <div className="flex flex-col items-center justify-center mt-[20px]">
                  {element.avator && (
                    <img
                      src={element.avator}
                      className="w-[80px] h-[80px] rounded-full object-cover "
                      alt=""
                    />
                  )}
                  <h3 className="text-[22px] font-medium mt-2 text-white">
                    {element.title}
                  </h3>
                  <p className="text-[#b1b3b5] text-base">{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* two */}
        <div className="flex flex-col col-span-4 gap-4">
          {details?.second.map((element, index) => {
            return (
              <div key={index} className=" p-[50px] rounded-2xl bg-[#191c21]">
                <div className="mb-[10px]">
                  <img
                    src={element.image}
                    className="w-[150px] h-[50px] object-cover mx-auto"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p
                    className="text-base text-justify text-[#b1b3b5]"
                    style={{ textAlignLast: "center" }}
                  >
                    {element.content}
                  </p>
                </div>

                {/* avator section */}
                <div className="flex flex-col items-center justify-center mt-[20px]">
                  {element.avator && (
                    <img
                      src={element.avator}
                      className="w-[80px] h-[80px] rounded-full object-cover "
                      alt=""
                    />
                  )}
                  <h3 className="text-[22px] font-medium mt-2 text-white">
                    {element.title}
                  </h3>
                  <p className="text-[#b1b3b5] text-base">{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* third */}
        <div className="flex flex-col col-span-4 gap-4">
          {details?.third.map((element, index) => {
            return (
              <div key={index} className=" p-[50px] rounded-2xl bg-[#191c21]">
                <div className="mb-[10px]">
                  <img
                    src={element.image}
                    className="w-[150px] h-[50px] object-cover mx-auto"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p
                    className="text-base text-justify text-[#b1b3b5]"
                    style={{ textAlignLast: "center" }}
                  >
                    {element.content}
                  </p>
                </div>

                {/* avator section */}
                <div className="flex flex-col items-center justify-center mt-[20px]">
                  {element.avator && (
                    <img
                      src={element.avator}
                      className="w-[80px] h-[80px] rounded-full object-cover "
                      alt=""
                    />
                  )}
                  <h3 className="text-[22px] font-medium mt-2 text-white">
                    {element.title}
                  </h3>
                  <p className="text-[#b1b3b5] text-base">{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* {details?.map((element, index) => {
          return (
            <div
              key={index}
              className="col-span-4 p-[50px] rounded-2xl bg-[#191c21]"
            >
              <div className="mb-[10px]">
                <img
                  src={element.image}
                  className="w-[150px] h-[50px] object-cover mx-auto"
                  alt=""
                />
              </div>
              <div className="content">
                <p
                  className="text-base text-justify text-[#b1b3b5]"
                  style={{ textAlignLast: "center" }}
                >
                  {element.content}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center mt-[20px]">
                {element.avator && (
                  <img
                    src={element.avator}
                    className="w-[80px] h-[80px] rounded-full object-cover "
                    alt=""
                  />
                )}
                <h3 className="text-[22px] font-medium mt-2 text-white">
                  {element.title}
                </h3>
                <p className="text-[#b1b3b5] text-base">{element.subTitle}</p>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Companies;
