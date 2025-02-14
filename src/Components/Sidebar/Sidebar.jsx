import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard');
    const navigate = useNavigate();

    const navigations = [
        { name: 'Dashboard', path: '/' },
        { name: 'Property', path: '/property' },
        { name: 'Tenants', path: '/tenants' },
        { name: 'Add Property', path: '/add-property' },
        { name: 'Maintainer', path: '/maintainer' },
        { name: 'Contacts', path: '/contacts' }
    ];

    const handleNavigation = (nav) => {
        setActive(nav.name);
        navigate(nav.path);
    };

    return (
        <div className="w-[310px] h-[1020px] bg-white shadow-lg absolute">
            <div className="flex items-center justify-center my-6">
                <div className="flex items-center">
                    <div className="bg-[#5CBAF7] w-6 h-6 mr-2"></div>
                    <span className="text-[#00568D] text-[27px] font-medium">TMS</span>
                </div>
            </div>
            <nav className="mt-8">
                {navigations.map((nav, index) => (
                    <div
                        key={index}
                        className={`w-[270px] h-[45px] mx-auto my-2 flex items-center pl-6 rounded cursor-pointer ${active === nav.name ? 'bg-[#45A9EA] text-white font-medium' : 'text-[#4D4D4D]'}`}
                        onClick={() => handleNavigation(nav)}
                    >
                        {nav.name}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
