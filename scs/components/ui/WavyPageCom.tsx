"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { WavyBackground } from "./wavy-background";

export function WavyBackgroundCom() {
  return (
    
    <WavyBackground className="max-w-5xl m-auto pt-20">
      
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Space Coast Striders
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        AAU Track and Field Club 
      </p>
    </WavyBackground>
  );
}
