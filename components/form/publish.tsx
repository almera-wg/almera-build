'use client'
import React from "react";
import {Input} from "@nextui-org/input";
import {EyeFilledIcon} from "../icons";
import {EyeSlashFilledIcon} from "../icons";
import { Button } from "@nextui-org/button";


export default function Login() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
    <form >
        <div className="flex flex-wrap gap-4">
      <Input
        isReadOnly
        type="email"
        label="Email"
        variant="bordered"
        defaultValue="junior@nextui.org"
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
    <Button className="justify-center">Login</Button>
    </div>
    </form>
      
    );
  }