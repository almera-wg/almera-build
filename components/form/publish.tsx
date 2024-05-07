'use client'
import React from "react";
import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Textarea} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,} from "@nextui-org/dropdown";

export default function Publish() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const items = [
      {
        key: "new",
        label: "New file",
      },
      {
        key: "copy",
        label: "Copy link",
      },
      {
        key: "edit",
        label: "Edit file",
      },
      {
        key: "delete",
        label: "Delete file",
      }
    ];
    return (
    <form >
     <div className="flex flex-wrap gap-4">
      <Input
        isReadOnly
        type="name"
        label="name"
        variant="bordered"
        defaultValue="your name!"
        className=""
      />
      <Input
        isReadOnly
        type="title"
        label="title"
        variant="bordered"
        defaultValue="title of the research!"
        className=""
      />
      <Input
        isReadOnly
        type="research area"
        label="research area"
        variant="bordered"
        defaultValue="area of the research!"
        className="max-w-xs"
      />
      <Textarea
      label="Abstract"
      variant="bordered"
      placeholder="Enter about your reserach"
      disableAnimation
      disableAutosize
      classNames={{
        base: "max-w-xs",
        input: "resize-y min-h-[40px]",
      }}
    />
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="faded" 
          className="pl-4"
        >
          Upload file
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
     
    <Button variant="faded" className="justify-center">Publish it!</Button>
    </div>
    </form>
      
    );
  }