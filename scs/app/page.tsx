'use client';
import { VortexUI } from "@/components/ui/VortexUI";
import { ScrollVelocityDemo } from "@/components/ui/scrollImages";
import { HeroHighlightDemo } from "@/components/ui/homePageMvtStmt";
import { FlipWordsDemo } from "@/components/ui/MotivaFlipper";
import BlurFade from "@/components/magicui/blur-fade";
import { NavBars } from "@/components/ui/HeaderNavBar";
import { FooterComp } from "@/components/ui/footer";
import { LayoutGridDemo } from "@/components/ui/layoutGrid";
import './teamPic.css'

export default function Home() {
  return (
    <main>
      <div>
        <NavBars></NavBars>
        <VortexUI></VortexUI>
        <BlurFade delay={0.25 * 3} inView={true}>
          <FlipWordsDemo></FlipWordsDemo>
        </BlurFade>

        <div>
          <BlurFade delay={0.25 * 4} inView={true}>
            <ScrollVelocityDemo></ScrollVelocityDemo>
          </BlurFade>

        </div>
        <BlurFade delay={0.25 * 5.5} inView={true}>
          <HeroHighlightDemo></HeroHighlightDemo>
        </BlurFade>

        <div className="h-[3rem] pt-40 flex justify-center items-center">
          <div className="text-7xl font-bold text-neutral-700">
            Meet our Beast of the Meet!
          </div>
        </div>

        <LayoutGridDemo></LayoutGridDemo>
        <FooterComp></FooterComp>


      </div>
    </main>
  );
}
