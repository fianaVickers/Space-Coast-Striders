import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["relentless", "determined", "talented", "unbreakable", "striders"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-bold text-neutral-700 dark:text-neutral-400">
        We are the Space Coast Striders
        <br></br>
        <br></br>
        <br></br>
        We are
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
