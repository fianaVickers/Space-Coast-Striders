import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Relentless", "Determined", "Talented", "Unbreakable", "Striders!"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-15">
      <div className="text-6xl mx-auto font-bold text-neutral-700">
        We are The Space Coast Striders
        <br></br>
        <br></br>
        We are
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
