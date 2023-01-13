import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

export const NavBar = () => {
    

    return ( 
        <div className="h-screen w-full bg-silver flex flex-col items-center text-white text-sm p-2">

            <button type='button' className="flex justify-center mt-10 w-full p-4">
                <p className="hover:text-yellow-orange mr-2">PL</p>
                <img className='object-fill' src='PolishFlag.png' width='30px' height='50px'/>
            </button>

            <nav className="h-[15rem] flex flex-col justify-evenly mt-28">
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
 
