import Himg from "./cards/card";
import TypingText from "../styles/TypingText";
import Login from "./modal";
import { Button } from "@nextui-org/button";

export const Hero = () => {
    return (
        <div className="flex relative w-full"> {/* Ensure the container is full width */}
            <div className="flex-[1] border-dashed border-1 border-slate-600">
                {/* TypingText and image area */}
                <div className="flex justify-center items-center p-4">
                    <Himg />
                </div>
                <div className="justify-center p-4">
                You are not far away from secure publishing
                 <div className="flex justify-centre gap-x-5 p-4 ">
                  <Button href="/explore" className="pl-4">
                    Explore
                  </Button>
                  <Login />
                 </div>
                </div>
                
            </div>
            <div className="flex-[1.5] border-dashed border-1 border-slate-600 p-4">
               <div className="text-2xl min-h-[100px] overflow-hidden">
                    <TypingText />
                </div>
            </div>
        </div>
    );
}; 9
