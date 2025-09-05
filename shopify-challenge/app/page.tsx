"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";



const links = [
  { href: '/product/range-grey-hoodie', label: 'Special Offer! The Range, Grey Hoodie!' },
];



export default function Home() {
  return (
    <div className="items-center">
      {links.map((link, index) => (
        <li key={index} className="my-2">
          <Link href={link.href} className="hover:text-gray-300">
            {link.label}
          </Link>
        </li>
      ))}
    </div>
  );
}
