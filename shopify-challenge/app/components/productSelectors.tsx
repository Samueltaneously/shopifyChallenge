"use client";
import React, { useState } from "react";

export default function ProductSelectors({ product, firstVariant }: any) {
    const sizes = ["S", "M", "L", "XL"];
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <div id="productINFORMATION" className="flex-1 flex flex-col gap-4">
            <h1 id="TITLE" className="text-3xl font-bold mb-2">{product.title}</h1>
            <p id="PRICE" className="text-xl">
                {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: firstVariant.price.currencyCode
                }).format(firstVariant.price.amount)}
            </p>


            <div id="sizeSELECTOR" className="flex flex-col gap-2">
                <p className="text-md">Size</p>
                <div className="flex gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className={`py-1 px-5 cursor-pointer rounded-full border ${selectedSize === size ? "bg-black text-white" : "bg-white text-black border-black"}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div id="quantitySELECTOR" className="flex flex-col gap-2">
                <p className="text-md">Quantity</p>
                <div className="flex border w-1/3 items-center">
                    <button
                        className="flex-1 flex items-center justify-center py-2 cursor-pointer"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                        -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        className="flex-1 flex items-center justify-center py-2 cursor-pointer"
                        onClick={() => setQuantity((q) => q + 1)}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* <div id="quantitySELECTOR" className="flex flex-col gap-2">
                <p className="text-md">Quantity</p>
                <div className="flex border w-1/3 items-center justify-between px-4 lg:px-6 py-2">
                    <button
                        className="p-2 -m-2 flex items-center justify-center"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="p-2 -m-2 flex items-center justify-center"
                        onClick={() => setQuantity((q) => q + 1)}
                    >
                        +
                    </button>
                </div>
            </div> */}

            <button id="cartBUTTON"
                className="border border-blue-800 text-blue-800 text-md font-bold py-3 mt-4 cursor-pointer">
                Add To Cart
            </button>

            <div id="productDESCRIPTION">
                <p id="DESRIPTION" className="text-md">
                    {product.description}
                </p>
            </div>

        </div>
    );
}
