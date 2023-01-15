import { Skills } from "./Skills";
import { SmallPresentationContainer } from "./SmallPresentationContainer";

export const SkillsContainer = () => {
    return ( 

        <div className=" h-full bg-silver flex flex-col px-3 ">
            <SmallPresentationContainer/>
            <Skills/>
        </div>
    );
}
 
