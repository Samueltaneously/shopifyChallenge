"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";



export default function GreyHoodiePage() {

    const [quantity, setQuantity] = useState(1);
    const sizes = ["S", "M", "L", "XL"];
    const [selectedSize, setSelectedSize] = useState(sizes[0]);



    return (

        <div id='productPAGE'
            className='w-full bg-white text-black'
        >

            <div id='productDISPLAY'
                className='w-7/8 flex flex-row'
            >


                <div id='productGALLERY'
                    className='flex-1 h-96'
                >
                    TO DO, Make Gallery
                </div>


                <div id='productINFORMATION'
                    className='flex-1 flex flex-col gap-4'
                >
                    <h1 id='productTITLE' className='text-3xl font-bold'>Range Grey Hoodie</h1>

                    <p id='productPRICE' className='text-xl'>$40.00</p>

                    <div id="sizeSELECTOR" className="flex flex-col gap-2">
                        <p>Size</p>
                        <div id='sizes'>
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`px-4 py-2 rounded-full border ${selectedSize === size
                                        ? "bg-black text-white"
                                        : "bg-white text-black border-black"
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div id="quantitySELECTOR" className="flex flex-col gap-2">
                        <p>Quantity</p>
                        <div className="flex border overflow-hidden">
                            <button id='quantityDecreaseBUTTON'
                                className="px-3 hover:bg-gray-300"
                                onClick={() =>
                                    setQuantity((q) => Math.max(1, q - 1))
                                }
                            >
                                −
                            </button>
                            <input id='quantitySelectedDISPLAY'
                                type="text"
                                value={quantity}
                                readOnly
                                className="text-center border-x-0 border-gray-300"
                            />
                            <button id='quantityIncreaseBUTTON'
                                className="px-3 hover:bg-gray-300"
                                onClick={() => setQuantity((q) => q + 1)}
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <div id='AddToCartBUTTON'>
                        <button className='border-blue text-blue'>Add To Cart</button>
                    </div>

                    <div id='productDESCRIPTION'>
                        <p>DESCRIPTION HERE?</p>
                    </div>


                </div>

            </div>



        </div>

    );

}