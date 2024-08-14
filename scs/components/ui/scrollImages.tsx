"use client";
import React from "react";
import Image from "next/image";
import ScrollVelocity from "./scroll-velocity";

const images = [
  {
    title: "Moonbeam",
    thumbnail: "/shuttle.png",
  },
  {
    title: "Cursor",
    thumbnail: "/chloe.jpg",
  },
  {
    title: "Rogue",
    thumbnail: "/duece.jpg",
  },
  {
    title: "Editorially",
    thumbnail: "/kalee.png",
  },
  {
    title: "Editrix AI",
    thumbnail: "/logo.jpg",
  },
  {
    title: "Moonbeam 2",
    thumbnail: "/luke.jpg",
  },
  {
    title: "Cursor 2",
    thumbnail: "/maki.png",
  },
  {
    title: "Rogue 2",
    thumbnail: "/relay.jpg",
  },
  {
    title: "Editorially 2",
    thumbnail: "/telvin.jpg",
  },
  {
    title: "Editorially 2",
    thumbnail: "/teamPic.jpg",
  },

];
const velocity = [2, -2];

export function ScrollVelocityDemo() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-10 py-10">
        {velocity.map((v, index) => (
          <ScrollVelocity
            key={index}
            velocity={v}
          >
            {images.map(({ title, thumbnail }) => (
              <div
                key={title}
                className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  fill={true}
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
      </div>
    </div>
  );
}
