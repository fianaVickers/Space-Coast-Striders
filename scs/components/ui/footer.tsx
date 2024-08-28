
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComp() {
  return (
    <Footer container>
      <div className="w-full my-3">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              src="/shuttle.png"
              width={50}
              height={50}
              alt="Flowbite Logo"
              name="Flowbite"
              className="pt-5"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-5 sm:gap-6 ">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Origin</Footer.Link>
                <Footer.Link href="#">SCS Invitational</Footer.Link>
                <Footer.Link href="#">Membership</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Email</Footer.Link>
                <Footer.Link href="#">Questions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Development" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Technical Stack</Footer.Link>
                <Footer.Link href="#">Developer</Footer.Link>
                <Footer.Link href="#">Join Dev. Team</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between mb-1">
          <Footer.Copyright href="#" by="SpaceCoastStriders" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
