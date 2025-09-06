// "use client";

// import React, { useEffect, useState } from "react";
import { getShop, SHOP_QUERY } from "@/app/library/shopify";
import Link from "next/link";
import Image from 'next/image';

// import RangeLogo from '../rangelogo.png';
import searchIcon from '../searchIcon.png';
import profileIcon from '../profileIcon.png';
import cartIcon from '../cartIcon.png';

const links = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'New Arrivals' },
    { href: '/', label: 'Apparel' },
    { href: '/', label: 'Accessories' },
    { href: '/', label: 'Gift Cards' },
];

const siteAlert = 'FREE SHIPPING ON $150 USD+ ORDERS';

export default async function NavBar() {


    // const [logoUrl, setLogoUrl] = useState<string | null>(null);
    // const [logoAlt, setLogoAlt] = useState("Range Logo");

    let logoUrl = '';
    let logoAlt = "Range Logo";

    try {
        const data = await getShop(SHOP_QUERY);

        const shop = data?.shop;
        if (shop?.brand?.logo?.image?.url) {
            logoUrl = shop.brand.logo.image.url;
            logoAlt = shop.brand.logo.image.altText || shop.name || "Range Logo";
        }
    } catch (err) {
        console.warn("Failed fetch shop logo", err);
    }

    return (
        <header className="h-1/6 w-full flex flex-col bg-blue-900 text-white">


            <div id="siteALERT"
                className="w-full bg-cyan-500 text-black text-xs font-bold flex items-center justify-center py-1 md:py-2"
            >
                <p>{siteAlert}</p>
            </div>


            <div id="navigationBANNER"
                className="w-4/5 mx-auto flex items-center justify-between py-3 md:py-4"
            >


                <div id="LOGO"
                    className="relative w-32 md:w-40 lg:w-48 aspect-[4/1] flex-shrink-0"
                >
                    {logoUrl && (
                        <Image src={logoUrl} alt={logoAlt} fill className="object-contain" />
                    )}
                </div>


                <div id="NAVIGATION"
                    className="flex flex-col justify-center"
                >


                    <div className="flex justify-end gap-3 ">
                        <Image src={searchIcon} alt="Search" className="object-contain cursor-pointer" />
                        <Image src={profileIcon} alt="Profile" className="object-contain cursor-pointer" />
                        <Image src={cartIcon} alt="Cart" className="object-contain cursor-pointer" />
                    </div>


                    <nav>
                        <ul className="flex flex-row justify-end gap-3 text-sm md:text-base">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:underline hover:[text-shadow:0_0_1.5px_currentColor]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>


            <div id="gradientSEPARATOR"
                className="w-full h-1 mt-auto bg-white bg-opacity-50 bg-gradient-to-r from-purple-500 to-cyan-500"
            ></div>


        </header>
    );
}
