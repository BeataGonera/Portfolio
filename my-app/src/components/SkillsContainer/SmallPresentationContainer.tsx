import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const SmallPresentationContainer = () => {
    return ( 
        <div className="w-full py-8 flex flex-col items-center h-[25rem]">
            <img src='my-photo.png' className="rounded-full object-cover w-32 h-32 mb-8" />
            <h2 className="text-white text-lg">Beata Gonera</h2>
            <h3 className="text-grey text-sm mb-6">Fronted Developer with strong interest in UX</h3>
            <div className="text-white text-sm text-light h-8 flex items-center">
                <LocationOnOutlinedIcon/>
                <div className='self-end'>Warsaw, Poland</div>
            </div>
            <div className="buttons flex w-full justify-between p-6">
                <button type='button' className="bg-yellow-orange w-10 h-10 rounded-full hover:bg-white"><a href='https://github.com/BeataGonera'><GitHubIcon/></a></button>
                <button type='button' className="bg-yellow-orange w-10 h-10 rounded-full hover:bg-white"><a href='https://www.linkedin.com/in/beataiwonagonera/'><LinkedInIcon/></a></button>
                <button type='button' className="bg-yellow-orange w-36 h-10 rounded text-sm hover:bg-white"><FileDownloadOutlinedIcon className='mr-2'/>Download CV</button>
            </div>
        </div>
     );
}
 
