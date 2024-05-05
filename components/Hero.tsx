import Himg from "./card";
import TypingText from "../styles/TypingText";
import Login from "./login";

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
                <Login />
                </div>
                <hr className="border-dashed border-slate-600" />
            </div>
            <div className="flex-[1.5] border-dashed border-1 border-slate-600 p-4">
               <div className="text-2xl min-h-[100px] overflow-hidden">
                    <TypingText />
                </div>
            </div>
        </div>
    );
};
