"use client";

import { Carousel } from "antd";
import Image from "next/image";

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

const Rewards = () => {
  return (
    <div className="bg-white py-10 md:py-12 lg:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-gray-500 sm:text-5xl md:text-6xl mb-10 md:mb-12 lg:mb-20 text-center">
        <span className="block tracking-wide">Some of Our</span>
        <span className="block text-indigo-700">Rewards</span>
      </h1>
      <div className="relative container mx-auto px-6">
        <Carousel autoplay>
          {carouselSlides?.map((slide, index) => (
            <div
              className="relative w-full aspect-video overflow-hidden rounded-2xl px-4 sm:px-6 lg:px-12 xl:px-20 shadow-2xl before:absolute before:inset-0 before:bg-indigo-800/60 before:-z-[1]"
              key={index}
            >
              <Image
                fill
                className="w-full rounded-t-3xl object-cover -z-[2]"
                src={slide}
                alt="App screenshot"
              />
              <blockquote className="text-white h-full flex flex-col items-center justify-center text-center">
                <p className="text-xl font-medium sm:text-2xl">
                  This app has completely transformed how we interact with
                  customers. We have seen record bookings, higher customer
                  satisfaction, and reduced churn.
                </p>
                <div className="mt-6">
                  <p className="flex flex-col font-medium">
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nemo, magnam?
                    </span>
                    <span>Lorem.</span>
                  </p>
                </div>
              </blockquote>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Rewards;
