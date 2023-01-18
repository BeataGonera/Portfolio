import { Skills } from "./Skills";
import { SmallPresentationContainer } from "./SmallPresentationContainer";

export const SkillsContainer = () => {
    return ( 

        <div className="bg-silver flex flex-col px-3 w-[25%]">
            <SmallPresentationContainer/>
            <Skills/>
        </div>
    );
}
 
