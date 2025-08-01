'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from './Navbar';
import StickyFooter from './StickyFooter';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    if (isHomePage) {
        // Special layout for the home page, no footer or navbar here
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <StickyFooter />
        </>
    );
}