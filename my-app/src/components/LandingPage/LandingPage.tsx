import { MainPart } from "./MainPart/MainPart";
import { NavBar } from "./NavBar";
import { PresentationContainer } from "./MainPart/PresentationContainer";
import { SkillsContainer } from "../SkillsContainer/SkillsContainer";

export const LandingPage = () => {
    return ( 
        <div className='bg-black grid gap-4 grid-cols-3' >
            <div><SkillsContainer/></div>
            <div><MainPart/></div>
            <div className="fixed right-0"><NavBar/></div>
        </div>
     );
}
 
