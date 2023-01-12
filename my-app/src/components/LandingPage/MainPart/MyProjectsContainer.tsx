import { ProjectCard } from "./ProjectCard";

export const MyProjectsContainer = () => {
    return ( 
        <div className='projects-container w-full'>
            <div className="w-4/6 h-48 flex justify-center items-center"><h3 className='text-white text-2xl'>My projects</h3></div>
            <ProjectCard 
                projectName="BookShare" 
                projectImage="BookShare.png" 
                projectDescription="Responsive application of my idea and design for sharing books among users." 
                technologies={['React.js', 'Typescript', 'Material UI', 'Google Books API', 'Firebase Database and Authentication']}
                previewLink=''
                appLink="https://bookshare-react.netlify.app/"
                figmaLink="https://www.figma.com/proto/HiDWWAOSVMWauUqFiFgX45/Bookshare?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2"/>
            <ProjectCard 
                projectName="Cakee" 
                projectImage="Cakee.png" 
                projectDescription="Responsive application for ordering homemade cakes." 
                technologies={['React.js', 'Typescript', 'Bootstrap', 'Sass', 'Firebase Database and Authentication']}
                previewLink=''
                appLink=""
                figmaLink="https://www.figma.com/proto/pXOogdaP33VvnswHI0uKit/SweetShop?page-id=0%3A1&node-id=14%3A121191"/>
            <ProjectCard 
                projectName="HSNotes" 
                projectImage="HSNotes.png" 
                projectDescription="Partly responsive app created as a final bootcamp project. We worked in SCRUM methodology in a team of 3. " 
                technologies={['React.js', 'Typescript', 'Firebase Database and Autehntication']}
                previewLink=''
                appLink="https://hsnotes.netlify.app/#/login"
                />
            <ProjectCard 
                projectName="Perfume line page responsive layout" 
                projectImage="PerfumeLine.png" 
                projectDescription="Responsive layout of perfume line created during bootcamp." 
                technologies={['HTML 5', 'CSS']}
               />
        </div>
     );
}
 
