import { NavBar } from "../LandingPage/NavBar";
import { NavBarMobile } from "../LandingPage/NavBarMobile";
import { CertificatesCarousel } from "./CertificatesCarousel";


export const CertificatesPage = () => {
      

    return ( 
        <div className="flex bg-black w-screen h-screen">
            <div className="w-screen md:w-[92%] flex flex-col md:justify-center mt-36 md:mt-0 items-center gap-12 p-4 md:p-12">
                <h1 className="text-[1.5rem] md:text-[2.5rem] text-yellow-orange">My certificates:</h1>
                <CertificatesCarousel/>
            </div>
            <div className="hidden md:flex fixed right-0"><NavBar/></div>
            <div className="fixed bottom-0"><NavBarMobile/></div>
        </div>
        
     );
}



 
