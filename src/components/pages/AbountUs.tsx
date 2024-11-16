import React from "react";

const AboutUs = () => {
  const aboutUsContent = `We have a modern and amazing marketing plan. 
    We have no PV system, and you don’t have to make any personal sales to earn income every month.
    `;
  const ourStoryContent = `A long journey begins with a single step.
    `;
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-center">
            About Us
          </h1>
          <p
            className="font-normal text-base leading-6 text-gray-600 dark:text-white"
            dangerouslySetInnerHTML={{
              __html:
                aboutUsContent ||
                `We have a modern and amazing marketing plan. 
              We have no PV system, and you don’t have to make any personal sales to earn income every month. 
              Your ID will never be blocked, so you can enjoy royalty income from your sales team. 
              Your family will be safe in this system with death and education funds. 
              Each of our products is high-quality, ensuring repurchases. 
              You can earn a total of nine types of income. 
              You can earn a matching income of up to 6,51,000 Taka monthly. 
              Achieve your dreams like a salary, mobile, travel, Hajj, car, flat, and more. 
              Make your dreams come true at AqebBD. Start working and become successful.`,
            }}
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-center">
            Our Story
          </h1>
          <p
            className="font-normal text-base leading-6 text-gray-600 dark:text-white"
            dangerouslySetInnerHTML={{
              __html:
                ourStoryContent ||
                `A long journey begins with a single step. 
              Initially, the story was short. We started working with a proper idea. 
              The road to success is never easy. We believe that hard work and proper planning will take us to the peak of success.`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
