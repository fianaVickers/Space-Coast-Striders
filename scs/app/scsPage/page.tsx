import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
export default function contactPage() {
    return (
      <div>
        <NavBars></NavBars>
        <ShootingStarsAndStarsBackgroundDemo content={"The Space Coast Invitational"}></ShootingStarsAndStarsBackgroundDemo>
        <FooterComp></FooterComp>      
      </div>
    );
  }