import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

export const NavBar = () => {
    

    return ( 
        <div className="h-full w-full bg-silver flex flex-col items-center text-white text-sm">

            <nav className="h-[15rem] flex flex-col justify-between mt-36">
                <NavLink 
                    className= {({ isActive }) => (isActive ? "active" : 'non-active')} 
                    to="/" end
                    >
                        <div className="flex flex-col items-center justify-between h-12">
                        <HomeOutlinedIcon className="mb-2"/>
                        Home
                        </div>
                </NavLink>

                <NavLink 
                    className= {({ isActive }) => (isActive ? "active" : 'non-active')} 
                    to="/certificates" end
                    >
                        <div className="flex flex-col items-center">
                        <SchoolOutlinedIcon className="mb-2"/>
                        Certificates
                        </div>
                </NavLink>

                <NavLink 
                    className= {({ isActive }) => (isActive ? "active" : 'non-active')} 
                    to="/contact" end
                    >
                        <div className="flex flex-col items-center">
                        <PhoneEnabledOutlinedIcon className="mb-2"/>
                        Contact me
                        </div>
                </NavLink>
            </nav>

        </div>
     );
}
 
