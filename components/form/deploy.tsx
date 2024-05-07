'use client'
import React from "react";
import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Textarea} from "@nextui-org/react";


export default function Deploy() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
    <form >
        <div className="flex flex-wrap gap-4">
      <Input
        isReadOnly
        type="name"
        label="name"
        variant="bordered"
        defaultValue="Your proff. name"
        className="max-w-xs"
      />
      <Input
        isReadOnly
        type="key"
        label="your CID / DOI"
        variant="bordered"
        defaultValue="bhufrfg78i3t64f7....."
        className="max-w-xs"
      />
      <Textarea
      label="Abstract"
      variant="bordered"
      placeholder="Short Discription your reserach"
      disableAnimation
      disableAutosize
      classNames={{
        base: "max-w-xs",
        input: "resize-y min-h-[40px]",
      }}
    />
    <Button className="justify-center">Connect wallet</Button>
    <Button className="justify-center">Deploy</Button>
    </div>
    </form>
      
    );
  }