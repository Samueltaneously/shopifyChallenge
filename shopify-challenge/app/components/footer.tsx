"use client";

import Link from "next/link";



export default function Footer() {

    const links = [
        { href: '/', label: 'Account' },
        { href: '/', label: 'FAQs' },
        { href: '/', label: 'Search' },
        { href: '/', label: 'Contact' },
    ];


    return (
        <footer id='footerBANNER'
            className='mt-auto h-1/6 bg-blue-900 text-white py-8'
        >

            <div id='footerLinkButtons'>
                <nav className='w-4/5 mx-auto text-sm'>
                    <ul className="flex flex-col justify-start gap-2">
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

        </footer>

    );

}
