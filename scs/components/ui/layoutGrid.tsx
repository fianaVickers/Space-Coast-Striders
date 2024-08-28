"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-15 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Beast of the meet 
        Mr. Duece Fluellen! 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-300">
        Duece had an explosive performance at the last scheduled meet. Our
        star athlete ended up taking home 3 gold medals. 
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Beast showed out! 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-300">
        During the Space Coast Invitational through his hard work, Duece earned 
        1st place in the 100 meters, 400 meters, and the long jump. We are so proud of 
        you Duece, keep up the hard work! 
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "row-span-2",
    thumbnail:
      "/duece.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2 row-span-2",
    thumbnail:
      "/logoZoomOut.png",
  },

];
