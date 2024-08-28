
import { Head } from "next/document"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { FloatingNavDemo } from "@/components/ui/navBar";
import Link from 'next/link';

export function NavBars() {
    
    return (
    <div>
        <FloatingNavDemo></FloatingNavDemo>
        <div className="header">
            <Image
                src="/shuttle.png"
                width={50}
                height={50}
                alt="Shuttle"
                className="shuttle"
            />
            <Link href="/meetsPage" passHref>
                <Button variant="ghost">Meets</Button>
            </Link>
            <Link href="/scsPage" passHref>
                <Button variant="ghost">Space Coast Invitational</Button>
            </Link>
            <Link href="/pricingPage" passHref>
                <Button variant="ghost">Contact</Button>
            </Link>
            <Link href="/sponsorsPage" passHref>
                <Button variant="ghost">Sponsors</Button>
            </Link>
            <Link href="/pricingPage" passHref>
                <Button className="bg-orange-500 text-white" variant="outline">Register</Button>
            </Link>
        </div>

    </div>
    )
}