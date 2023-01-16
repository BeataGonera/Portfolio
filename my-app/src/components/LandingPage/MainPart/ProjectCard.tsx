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
        <div className="project-card w-full min-h-32 md:h-96 mb-2 md:mb-8 bg-silver text-white relative">
            <figure className='flex justify-between items-center p-4 md:p-6'>
                <div className='w-full'>
                    <figcaption className='md:text-center text-[1rem] md:text-2xl mb-2 md:mb-8'>{projectName}</figcaption>
                    <div className='project-details mr-2'>
                        {!polish && <p className='mb-4 text-sm md:text-lg font-light md:font-normal'>{projectDescriptionEng}</p>}
                        {polish && <p className='mb-4 text-sm md:text-lg font-light md:font-normal'>{projectDescriptionPl}</p>}

                        {!polish && <p className='hidden md:block mb-2'>Technologies I used:</p>}
                        {polish &&<p className='hidden md:block mb-2'>Technologie:</p>}

                        <ul className='hidden md:block'>
                            {technologies.map((technology, number)=> (
                                <li key={number}>{technology}</li>
                                ))
                            }    
                            
                        </ul>


                        {!polish && 
                        <div className='links text-yellow-orange flex justify-between underline absolute bottom-6 font-light mr-2 hidden md:block'>
                            <a href={previewLink} className="mr-[4rem]">Screen recording</a>
                            <a href={appLink} className="mr-[4rem]">Application</a>
                            <a href={figmaLink} className="mr-[4rem]">Prototype</a>
                        </div>
                        }

                        {polish && 
                        <div className='links text-yellow-orange flex justify-between underline absolute bottom-6 font-light hidden md:block'>
                            <a href={previewLink} className="mr-[4rem]">Nagranie ekranu</a>
                            <a href={appLink} className="mr-[4rem]">Aplikacja</a>
                            <a href={figmaLink} className="mr-[4rem]">Prototyp</a>
                        </div>
                        }

                        {!polish && 
                        <button className='md:hidden text-sm text-yellow-orange bg-silver font-light'>Show details</button>
                        
                        }

                    </div>
                </div>
                <img src={projectImage} alt="" className='w-32 h-full md:w-96 md:h-full'/>
            </figure>
          
        </div>
     );
}
 
