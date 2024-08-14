'use client';
import { Head } from "next/document"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { pages } from "next/dist/build/templates/app-page";
import { VortexUI } from "@/components/ui/VortexUI";
import { FloatingNavDemo } from "@/components/ui/navBar";
import { WavyBackgroundCom } from "@/components/ui/WavyPageCom";
import { ScrollVelocityDemo } from "@/components/ui/scrollImages";
import { HeroHighlightDemo } from "@/components/ui/homePageMvtStmt";
import { FlipWordsDemo } from "@/components/ui/MotivaFlipper";
import './teamPic.css'

function handleRegClick() {
  console.log("Register here!")
}

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNavDemo></FloatingNavDemo>
        <div className="header">
          <Image
            src="/shuttle.png"
            width={50}
            height={50}
            alt="Shuttle"
            className="shuttle"
          />
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Meets</Button>
          <Button variant="ghost">Space Coast Invitational</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="ghost">Sponsors</Button>
          <Button className="bg-orange-500 text-white" onClick={handleRegClick} variant="outline">Register</Button>
        </div>
        <VortexUI></VortexUI>
        <FlipWordsDemo></FlipWordsDemo>
        <div>
          <ScrollVelocityDemo></ScrollVelocityDemo>
        </div>
        <HeroHighlightDemo></HeroHighlightDemo>
      </div>
    </main>
  );
}
