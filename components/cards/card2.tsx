import React from "react";
import {Card, CardFooter, Button} from "@nextui-org/react";
import Image from "next/image";
import Cardimg from "../../public/hero.png"


export default function Himg2() {
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
    </Card>
  );
}
