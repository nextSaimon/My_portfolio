'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Menu = ({ targetId, label, href }) => {
    const router = useRouter();

    const handleNavClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        if (href === '/') {
            router.push('/');
            setTimeout(() => {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            router.push(href);
        }
    };

    return (
       
            <Link href={href} onClick={handleNavClick}>
                {label}
            </Link>
    
    );
};

export default Menu;
