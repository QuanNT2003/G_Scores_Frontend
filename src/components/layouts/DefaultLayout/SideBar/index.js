import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
function SideBar() {
    const links = [
        {
            title: 'Dashboard',
            path: '/',
        },
        {
            title: 'Search Scores',
            path: '/search',
        },
        {
            title: 'Report',
            path: '/report',
        },
        {
            title: 'Setting',
            path: '/setting',
        },
    ];
    return (
        <div className="w-full h-full bg-gradient-to-b from-yellow-400 to-emerald-600">
            <div className="pt-6 flex justify-center items-center h-28 text-[24px] font-semibold">
                Menu
            </div>
            <div className="mt-5 me-2 pe-3 ms-2 text-base">
                {links.map((e, index) => (
                    <NavLink
                        key={index}
                        to={e.path}
                        className={({ isActive }) =>
                            isActive ? 'active navlink ' : 'navlink'
                        }
                    >
                        <div className="pe-2">{e.title}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default SideBar;
