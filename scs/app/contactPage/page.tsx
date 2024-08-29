import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
import { SignupFormDemo } from "@/components/ui/emailForm";
import BlurFade from "@/components/magicui/blur-fade";
export default function contactPage() {
    return (
        <div>
            <NavBars></NavBars>
            <ShootingStarsAndStarsBackgroundDemo content={"Connect with the Striders"}></ShootingStarsAndStarsBackgroundDemo>

            <BlurFade delay={0.25 * 3} inView={true}>
            <div className="bg-neutral-900 pb-40 mb-20">
                <div className="h-[10rem] p-30 flex justify-center items-center">
                    <div className="text-5xl font-bold text-white">
                        We Appreciate your Interest!
                    </div>
                </div>

                <SignupFormDemo></SignupFormDemo>
                <div className="h-100">

                </div>
            </div>
            </BlurFade>
            <FooterComp></FooterComp>
        </div>
    );
}