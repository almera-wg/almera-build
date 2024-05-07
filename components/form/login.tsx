'use client'
import React from "react";
import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Textarea} from "@nextui-org/react";
import {EyeFilledIcon} from "../icons";
import {EyeSlashFilledIcon} from "../icons";

export default function Login() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
    <form >
        <div className="flex flex-wrap gap-4">
      <Input
        isReadOnly
        type="email"
        label="email"
        variant="bordered"
        defaultValue="me@mail.com"
        className="max-w-xs"
      />
       <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
    <Button variant="faded" className="justify-center">Login</Button>
    </div>
    </form>
      
    );
  }