import { FC } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../../../components/LanguageProvider';


interface ProjectCard{
    projectName: string;
    projectImage: string;
    projectDescriptionEng: string;
    projectDescriptionPl: string;
    technologies: string[];
    previewLink?: string;
    appLink?: string;
    figmaLink?: string;
}

export const ProjectCard:FC<ProjectCard> = ({projectName, projectImage, projectDescriptionEng, projectDescriptionPl, technologies, previewLink, appLink, figmaLink }) => {

    const {polish} = useContext(LanguageContext)


    return ( 
        <div className="project-card w-full h-76 mb-8 bg-silver text-white relative">
            <figure className='flex justify-between p-6'>
                <div className='w-full'>
                    <figcaption className='text-center text-2xl mb-8'>{projectName}</figcaption>
                    <div className='project-details mr-2'>
                        {!polish && <p className='mb-4'>{projectDescriptionEng}</p>}
                        {polish && <p className='mb-4'>{projectDescriptionPl}</p>}

                        {!polish && <p className='mb-2'>Technologies I used:</p>}
                        {polish &&<p className='mb-2'>Technologie:</p>}

                        <ul>
                            {technologies.map((technology, number)=> (
                                <li key={number}>{technology}</li>
                                ))
                            }    
                            
                        </ul>


                        {!polish && 
                        <div className='links text-yellow-orange flex justify-between underline absolute bottom-6 font-light mr-2'>
                            <a href={previewLink} className="mr-[4rem]">Screen recording</a>
                            <a href={appLink} className="mr-[4rem]">Application</a>
                            <a href={figmaLink} className="mr-[4rem]">Prototype</a>
                        </div>
                        }

                        {polish && 
                        <div className='links text-yellow-orange flex justify-between underline absolute bottom-6 font-light '>
                            <a href={previewLink} className="mr-[4rem]">Nagranie ekranu</a>
                            <a href={appLink} className="mr-[4rem]">Aplikacja</a>
                            <a href={figmaLink} className="mr-[4rem]">Prototyp</a>
                        </div>
                        }

                    </div>
                </div>
                <img src={projectImage} alt="" width="550" height="700"/>
            </figure>
          
        </div>
     );
}
 
