import { ProjectCard } from "./ProjectCard";
import { useContext } from "react";
import { LanguageContext } from "../../../components/LanguageProvider"
import { BackToTopButton } from "./BackToTopButton/BackToTopButton";

export const MyProjectsContainer = () => {

    const {polish} = useContext(LanguageContext);

    return ( 
        <div className='projects-container px-4 md:px-0 w-full mb-20'>
            {!polish && 
            <div className="w-4/6 h-12 md:h-48 flex md:justify-center items-center"><h3 className='text-white text-[1rem] md:text-2xl'>My projects</h3></div>
            }

            {polish && 
            <div className="w-4/6 h-12 md:h-48 flex md:justify-center items-center"><h3 className='text-white text-[1rem] md:text-2xl'>Moje projekty</h3></div>
            }

            <ProjectCard 
                projectName="BookShare" 
                projectImage="BookShare.png" 
                projectDescriptionEng='Responsive application of my idea and design for sharing books among users.'
                projectDescriptionPl='Responsywna aplikacja oparta o Google Books API, która umozliwia dzielenie się ksiazkami.'
                technologies={['React.js', 'Typescript', 'Material UI', 'Google Books API', 'Firebase Database and Authentication']}
                previewLink="https://firebasestorage.googleapis.com/v0/b/portfolio-ec6b9.appspot.com/o/BSlight.webm?alt=media&token=112b2cef-a0ee-4dda-9b5b-cf330f7eaba3"
                appLink="https://bookshare-react.netlify.app/"
                figmaLink="https://www.figma.com/proto/HiDWWAOSVMWauUqFiFgX45/Bookshare?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2"
                />

            <ProjectCard 
                projectName="Cakee" 
                projectImage="Cakee.png" 
                projectDescriptionEng="Responsive application for ordering homemade cakes." 
                projectDescriptionPl="Responsywna aplikacja tworzona dla cukierni."
                technologies={['React.js', 'Typescript', 'Bootstrap', 'Sass', 'Firebase Database and Authentication']}
                previewLink=''
                appLink=""
                figmaLink="https://www.figma.com/proto/pXOogdaP33VvnswHI0uKit/SweetShop?page-id=0%3A1&node-id=14%3A121191"
                />

            <ProjectCard 
                projectName="HSNotes" 
                projectImage="HSNotes.png" 
                projectDescriptionEng="Partly responsive app created as a final bootcamp project. We worked in SCRUM methodology in a team of 3."
                projectDescriptionPl="Aplikacja, którą sworzyliśmy na zakończenie bootcampu, w 3-osobowym zespole. Pracowaliśmy przez 2 tygodnie w metodologii SCRUM." 
                technologies={['React.js', 'Typescript', 'Firebase Database and Autehntication']}
                previewLink=''
                appLink="https://hsnotes.netlify.app/#/login"
                />

            <ProjectCard 
                projectName="Perfume line page responsive layout" 
                projectImage="PerfumeLine.png" 
                projectDescriptionEng="Responsive layout of perfume line created during bootcamp." 
                projectDescriptionPl="Responsywny layout stworzony w czasie kursu."
                technologies={['HTML 5', 'CSS']}
               />

            <BackToTopButton/>
        </div>
     );
}
 
