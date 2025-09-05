"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from 'next/image';



const links = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'New Arrivals' },
    { href: '/', label: 'Apparel' },
    { href: '/', label: 'Accessories' },
    { href: '/', label: 'Gift Cards' },
];


export default function NavBar() {

    return (
        <div id='headerSPACE'
            className='w-full h-1/7 flex flex-col bg-blue-600'
        >


            <div id='siteWideAlertBANNER'
                className='w-full h-1/5 bg-blue-200 text-black flex justify-center'
            >
                <p id='siteALERT'>SITE ALERT HERE?</p>
            </div>



            <div id="navigationSPACE"
                className='w-7/8 justify-between'
            >

                <div id='rangeLogo'
                    className='flex justify-start'
                >
                    Placehold
                </div>

                <div id="navigation"
                    className='flex justify-end'
                >
                    <div id='iconButtons'>
                        <div id='searchBUTTON'>Se</div>
                        <div id='profileBUTTON'>Pr</div>
                        <div id='cartBUTTON'>Ca</div>
                    </div>

                    <div id='linkButtons'>
                        <nav className=''>
                            <ul className="flex flex-row items-start p-4">
                                {links.map((link, index) => (
                                    <li key={index} className="" >
                                        <Link href={link.href} className="hover:text-gray-300">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                </div>

            </div>


            <div id='spectralFinesseBANNER'
                className='w-full h-2px'
            >

            </div>



        </div>

    );

}
