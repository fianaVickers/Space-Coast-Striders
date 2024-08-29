import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
import { SignupFormDemo } from "@/components/ui/emailForm";
export default function contactPage() {
    return (
        <div>
            <NavBars></NavBars>
            <ShootingStarsAndStarsBackgroundDemo content={"Connect with the Striders"}></ShootingStarsAndStarsBackgroundDemo>

            <div className="h-[10rem] p-30 flex justify-center items-center">
                <div className="text-5xl font-bold text-neutral-700">
                    We appreciate your interest!
                </div>
            </div>

            <SignupFormDemo></SignupFormDemo>
            <div className="h-100">

            </div>

            <FooterComp></FooterComp>
        </div>
    );
}