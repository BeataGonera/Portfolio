import {FC} from 'react';

interface ProjectCard{
    projectName: string;
    projectImage: string;
    projectDescription: string;
    technologies: string[];
    previewLink?: string;
    appLink?: string;
    figmaLink?: string;
}

export const ProjectCard:FC<ProjectCard> = ({projectName, projectImage, projectDescription, technologies, previewLink, appLink, figmaLink }) => {
    return ( 
        <div className="project-card w-full h-76 mb-8 bg-silver text-white">
            <figure className='flex justify-between p-6'>
                <div>
                    <figcaption className='text-center text-2xl mb-2'>{projectName}</figcaption>
                    <div className='project-details w-5/6'>
                    <p className='mb-4'>{projectDescription}</p>
                        <p className='mb-2'>Technologies I used:</p>
                        <ul>
                            {technologies.map((technology)=> (
                                <li>{technology}</li>
                                ))
                            }    
                            
                        </ul>
                        <div className='links text-yellow-orange flex justify-between underline'>
                            <div><a href={previewLink}>Preview</a></div>
                            <div><a href={appLink}>Application</a></div>
                            <div><a href={figmaLink}>Prototype</a></div>
                        </div>
                    </div>
                </div>
                <img src={projectImage} alt="" width="550" height="700"/>
            </figure>
          
        </div>
     );
}
 
