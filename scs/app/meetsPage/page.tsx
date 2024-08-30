import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
import { HamburgerMenu } from "@/components/ui/hamNav";
export default function contactPage() {
    return (
      <div>
        <NavBars></NavBars>
        <ShootingStarsAndStarsBackgroundDemo content={"2024 Meet Schedule"}></ShootingStarsAndStarsBackgroundDemo>
        <FooterComp></FooterComp>
      </div>
    );
  }
  