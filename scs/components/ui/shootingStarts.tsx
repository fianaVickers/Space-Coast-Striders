"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo({content}) {
  return (
    <div className="h-[30rem]  bg-neutral-900 flex flex-col items-center justify-center
     relative w-100%">
      
      <h2 className="relative flex-col md:flex-row z-10 text-5xl lg:text-7xl md:text-7xl md:leading-tight 
      max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent
       bg-gradient-to-b from-white via-white to-white flex items-center gap-2 md:gap-8">
        <span>{content}</span>
      </h2>
      <ShootingStars starWidth={30} maxSpeed={15} maxDelay={8000} minDelay={3000} trailColor="#FFA500" starColor="#FFFFFF"/>
      <StarsBackground starDensity={0.00045}/>
    </div>
  );
}
