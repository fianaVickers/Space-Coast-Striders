"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconMessage,
} from "@tabler/icons-react";
import { Button, Toast } from "flowbite-react";

export function SignupFormDemo() {


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Get in Contact with the Space Coast Striders
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Submit form below with any questions you have and the SCS coaching staff
        will get in touch with you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleFormSub}>
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
          <Label htmlFor="address">Email Address</Label>
          <Input id="address" placeholder="scs204@intivational.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="EmailContent">Email Content</Label>
          <Input
            id="emailcoach"
            placeholder="I would like to know..."
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Contact &rarr;
          <BottomGradient />
        </button>
        <ConfirmDialog className=" font-bold"/>
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleGroupMeClick}
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        >
          <IconMessage className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Join the GroupMe
          </span>
          <BottomGradient />
        </button>
        <button
          onClick={handleFacebookClick}
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        >
          <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Check out our Facebook Page
          </span>
          <BottomGradient />
        </button>
        
      </div>
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


  );
}

const confirm = () => {
  confirmDialog({
    message: 'Are you sure you want to send this Email?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => handleSubmit(),
  });
}


function showTemplate(): void {
  throw new Error("Function not implemented.");
}

const handleFormSub = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  //toggle confirmation idalogue 
  confirm();


};

const handleSubmit = () => {
  const emailInput = document.getElementById('emailcoach') as HTMLInputElement;
  const senderAddr = document.getElementById('address') as HTMLInputElement;
  const senderFirstName = document.getElementById('firstname') as HTMLInputElement;
  const senderLasttName = document.getElementById('lastname') as HTMLInputElement;

  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAILJS,
  });

  var templateParams = {
    from_name: senderFirstName.value + " " + senderLasttName.value,
    message: emailInput.value,
    reply_to: senderAddr.value,
  };

  emailjs.send('service_dgo9sqx', 'template_r0brqms', templateParams).then(
    (response) => {
      toast.success('Email sent!', {
        onClose: () => {
            console.log('Toast has been closed');
            window.location.reload();
        }
    });
    },
    (error) => {
      toast.error("Email not successfully sent: ", error); 
    },
  );

  //reset email values
  console.log("Form submitted");
};

const handleGroupMeClick = () => {
  window.open('https://groupme.com/join_group/93891697/lnBJyUAg', '_blank');
};

const handleFacebookClick = () => {
  window.open('https://www.facebook.com/p/Space-Coast-Striders-Track-Club-100057708450072', '_blank');
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
