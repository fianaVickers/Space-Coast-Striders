import React from "react";
import Link from 'next/link';
import { Vortex } from "../ui/vortex";

export function VortexUI() {
  return (
    <div className="w-600px mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={200}
        particleCount={100}
        baseHue={20}
        baseSpeed={0}
        rangeSpeed={0.01}
        baseRadius={0.4}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Space Coast Striders
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Track and Field AAU Club
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="/pricingPage" passHref>
            <button className="px-4 py-2 bg-orange-600 hover:bg-gray-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Register Now
            </button>
          </Link>
          <button className="px-4 py-2  text-white ">Meets</button>
        </div>
      </Vortex>
    </div>
  );
}
