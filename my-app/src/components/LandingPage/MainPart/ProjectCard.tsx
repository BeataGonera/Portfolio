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
        <div className="project-card w-full h-76 mb-8 bg-silver text-white relative">
            <figure className='flex justify-between p-6'>
                <div className='w-full'>
                    <figcaption className='text-center text-2xl mb-8'>{projectName}</figcaption>
                    <div className='project-details w-5/6'>
                        <p className='mb-4'>{projectDescription}</p>
                        <p className='mb-2'>Technologies I used:</p>
                        <ul>
                            {technologies.map((technology, number)=> (
                                <li key={number}>{technology}</li>
                                ))
                            }    
                            
                        </ul>
                        <div className='links text-yellow-orange flex justify-between underline absolute bottom-6'>
                            <a href={previewLink} className="mr-20">Preview</a>
                            <a href={appLink} className="mr-20">Application</a>
                            <a href={figmaLink} className="mr-20">Prototype</a>
                        </div>
                    </div>
                </div>
                <img src={projectImage} alt="" width="550" height="700"/>
            </figure>
          
        </div>
     );
}
 
