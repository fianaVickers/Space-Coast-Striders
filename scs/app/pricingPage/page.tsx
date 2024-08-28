import { PricingComponent } from "@/components/ui/priceCardReal";
import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
import NumberTicker from "@/components/magicui/number-ticker";
export default function PricingPage() {
  const basePerks = ["Season Uniform", "Season Warm Up Set", "Backpack", "Annual AAU Membership Card"];
  const intPerks = ["Season Uniform", "Season Warm Up Set", "Backpack", "SCS MeetFee", "Annual AAU Membership Card", "SCS T-Shirt", "SCS Invitational Meet Fee"];
  const expPerks = ["Season Uniform", "Season Warm Up Set", "Backpack", "SCS MeetFee", "Annual AAU Membership Card", "SCS T-Shirt",
    "SCS Invitational Meet Fee", "SCS Hat", "Exclusive SCS Crocs"];
  const exampleDesc = "This is an example of what we can add to each membership price card."

  return (
    <div>
      <NavBars></NavBars>
      <ShootingStarsAndStarsBackgroundDemo content={"Join the Team"}></ShootingStarsAndStarsBackgroundDemo>
      <p className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-black dark:text-white mt-20">
        <NumberTicker value={100} />
        <span className="text-3xl whitespace-pre-wrap"> Athletes Registered</span>
      </p>
      <div className="flex justify-center mt-20">
        <PricingComponent name={"Base Membership"} price={"$79.99/Season"} description={exampleDesc} perks={basePerks}> </PricingComponent>
        <PricingComponent name={"Intermediate Membership"} price={"$99.99/Season"} description={exampleDesc} perks={intPerks}> </PricingComponent>
        <PricingComponent name={"SCS Pro Club Membership"} price={"$129.99/Season"} description={exampleDesc} perks={expPerks}> </PricingComponent>

      </div>
      <FooterComp></FooterComp>
    </div>
  );
}