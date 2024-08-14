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
import Link from 'next/link';
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
          <Link href="/pricingPage" passHref>
            <Button variant="ghost">Pricing</Button>
          </Link>
          <Link href="/meetsPage" passHref>
            <Button variant="ghost">Meets</Button>
          </Link>
          <Link href="/scsPage" passHref>
            <Button variant="ghost">Space Coast Invitational</Button>
          </Link>
          <Link href="/pricingPage" passHref>
            <Button variant="ghost">Contact</Button>
          </Link>
          <Link href="/sponsorsPage" passHref>
            <Button variant="ghost">Sponsors</Button>
          </Link>
          <Link href="/regPage" passHref>
            <Button className="bg-orange-500 text-white" onClick={handleRegClick} variant="outline">Register</Button>
          </Link>
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
