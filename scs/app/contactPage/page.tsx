import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
export default function contactPage() {
    return (
      <div>
        <NavBars></NavBars>
        <ShootingStarsAndStarsBackgroundDemo content={"Connect with the Striders"}></ShootingStarsAndStarsBackgroundDemo>
        
        <div className="h-[3rem] pt-40 flex justify-center items-center">
          <div className="text-4xl font-bold text-neutral-700">
            Email Coach Vickers
          </div>
        </div>
        
        <div className="h-[3rem] pt-40 flex justify-center items-center">
          <div className="text-4xl font-bold text-neutral-700">
            Join the GroupMe
          </div>
        </div>

        <div className="h-[3rem] pt-40 flex justify-center items-center">
          <div className="text-4xl font-bold text-neutral-700">
            Checkout our Facebook Page
          </div>
        </div>
        
        
        
        
        
        
        
        <FooterComp></FooterComp>
      </div>
    );
  }