
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Settings from '../settings/Settings';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="relative">
            
            <Navbar isHome={isHome} />

            <Settings/>
            <main className="relative z-0">
                <Outlet context={{ isHome }} />
            </main>

            
        </div>
    );
}
