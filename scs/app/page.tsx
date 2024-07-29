'use client';
import { Head } from "next/document"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { pages } from "next/dist/build/templates/app-page";
import './teamPic.css'

function handleRegClick() {
  console.log("Register here!")
}

export default function Home() {
  return (
    <main>
      <div>
        <div className="header">
          <Image
            src="/shuttle.png"
            width={50}
            height={50}
            alt="Shuttle"
            className="shuttle"
          />
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Meets</Button>
          <Button variant="ghost">Space Coast Invitational</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="ghost">Sponsors</Button>
          <Button className="bg-orange-500 text-white" onClick={handleRegClick} variant="outline">Register</Button>
        </div>
        <hr></hr>

        <div className="picture">
          <div className="image-container">
            <Image
              className="image"
              src="/teamPic.jpg"
              width={300}
              height={300}
              alt="Team Picture"
            />
            <div className="overlay">
              <div className="overlay-SCS">
                <p>Space Coast Striders</p>
                <p>AAU Track and Field</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
