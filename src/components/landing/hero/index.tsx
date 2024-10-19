"use client";

import HeroBg from "@/components/landing/hero/HeroBg";
import { Carousel } from "antd";
import Image from "next/image";

const Hero = () => {
  const carouselSlides = [
    "/frontend/images/gellary/gallary1.jpeg",
    "/frontend/images/gellary/gallary10l.jpeg",
    "/frontend/images/gellary/gallary9.jpeg",
    "/frontend/images/gellary/gellary2.jpeg",
    "/frontend/images/gellary/gellary3.jpeg",
    "/frontend/images/gellary/gellary4.jpeg",
    "/frontend/images/gellary/gellary6.jpeg",
    "/frontend/images/gellary/gellary7.jpeg",
    "/frontend/images/gellary/gellary8.jpeg",
    "/frontend/images/gellary/gelleary5.jpeg",
  ];

  return (
    <div className="relative overflow-hidden">
      <HeroBg />
      <div className="mx-auto py-8 md:py-12 xl:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your future starts today.</span>
              <span className="block text-indigo-600">
              The smart way to invest is secure investment solutions
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Smart Investing for the Risk-Averse. Investing doesn't have to be a gamble. Even the most risk-averse individuals can find smart ways to grow their money. This article explores safe investment solutions that prioritize capital preservation while offering some return on your investment.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Carousel autoplay>
          {carouselSlides?.map((slide, index) => (
            <div className="relative w-full aspect-video" key={index}>
              <Image
                fill
                className="w-full rounded-t-3xl object-cover"
                src={slide}
                alt="App screenshot"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
