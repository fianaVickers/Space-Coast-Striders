"use client";
import React from "react";
import { NavBars } from "@/components/ui/HeaderNavBar";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/shootingStarts";
import { FooterComp } from "@/components/ui/footer";
import { MarqueeDemo } from "@/components/ui/sponsorsScroll";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlurFade from "@/components/magicui/blur-fade";

export default function sponsorsPage() {
  return (
    <div>
      <NavBars></NavBars>
      <ShootingStarsAndStarsBackgroundDemo content={"Thank you to our Sponsors!"}></ShootingStarsAndStarsBackgroundDemo>
      <div className="bg-orange-500 pb-40">
        <MarqueeDemo></MarqueeDemo>

        <BlurFade delay={0.25 * 3} inView={true}>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
            Support the Space Coast Striders!
          </h2>
          <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-300">
            We are excited about your choice to support the Space Coast Striders. Your donation
            empowers are youth to strive for more!
          </p>

          <form className="my-8" onSubmit={handleDonate}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Coach" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Vickers" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="companyname">Company Name</Label>
              <Input id="address" placeholder="Nike Athletics" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8 ">
              <Label htmlFor="donationMessage">Donation Message</Label>
              <Input
                id="emailcoach"
                placeholder="Thank you striders for..."
                type="text"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Donate &rarr;
              <BottomGradient />
            </button>
            <ConfirmDialog className=" font-bold" />
          </form>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
          />
        </div>
        </BlurFade>
      </div>

      <FooterComp></FooterComp>
    </div>
  );
}

const handleDonate = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("donate button has been clicked");
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full ", className)}>
      {children}
    </div>
  );
};