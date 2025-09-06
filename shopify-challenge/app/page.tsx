"use client";

import Link from "next/link";
import Image from "next/image";

import RangeLogo from '../app/rangelogo.png';



const links = [
  { href: '/product/range-grey-hoodie', label: '> Special Offer! The Range, Grey Hoodie! <' },
];



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-5xl pt-30">

      <div id='rangeLOGO'
        className='flex border bg-opacity-50 bg-gradient-to-r from-purple-500 to-cyan-500 items-center justify-center min-w-3xl'>
        <Image src={RangeLogo} alt="Range Logo" className="object-contain" />
      </div>

      {links.map((link, index) => (
        <ul key={index} className="pt-5 my-2">
          <Link href={link.href} className="hover:text-gray-800 hover:underline hover:font-bold">
            {link.label}
          </Link>
        </ul>
      ))}
    </div>
  );
}
