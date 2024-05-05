import Himg from "./card"
import TypingText from "../styles/TypingText"


export const Hero = () => {
    return(
        <div className="relative">
            <div className="border-dashed border-1 border-slate-600 ">
                <div className=" p-4 text-2xl"><TypingText /></div>
                <hr className="border-dashed border-slate-600"></hr>
                <Himg />
                <hr className="border-dashed border-slate-600"></hr>
            </div>
        </div>
    )
}