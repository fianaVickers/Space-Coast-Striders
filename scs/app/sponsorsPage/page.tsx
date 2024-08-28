import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
export default function contactPage() {
    return (
      <div>
        <NavBars></NavBars>
        <ShootingStarsAndStarsBackgroundDemo content={"Thank you to our Sponsors!"}></ShootingStarsAndStarsBackgroundDemo>
        <FooterComp></FooterComp>
      </div>
    );
  }