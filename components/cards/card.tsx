import React from "react";
import {Card, CardFooter, Button} from "@nextui-org/react";
import Image from "next/image";
import Cardimg from "../../public/Journal.png"
import Link from "next/link";


export default function Himg() {
  return (
    <Card
      isFooterBlurred
      radius="md"
      className="border-none"
    >
      <Image
        alt="Almera Journal"
        className="object-fill"
        src={Cardimg}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Link href="https://airtable.com/apprjPiR110fniPxt/pagrU1MH3dJgpnk7t/form">
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" >
          Notify me
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
