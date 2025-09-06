"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageNode {
    url: string;
    altText?: string | null;
}

interface Props {
    images: ImageNode[];
}

export default function ImageGallery({ images }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const hasImages = images && images.length > 0;
    const mainImage = hasImages ? images[selectedIndex] : { url: "/placeholder.png", altText: "No image" };

    return (
        <div id="productGALLERY"
            className="w-full flex flex-col"
        >

            <div id="mainIMAGE"
                className="w-full max-w-xl border aspect-square relative bg-gray-100 overflow-hidden"
            >
                <Image
                    src={mainImage.url}
                    alt={mainImage.altText || "Product image"}
                    fill
                    className="object-contain"
                />
            </div>


            {hasImages && (
                <div id="thumbnailIMAGES"
                    className="flex justified-start gap-2 overflow-x-auto mt-2"
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`w-20 h-20 border cursor-pointer overflow-hidden ${idx === selectedIndex ? "border-blue-800" : "border-gray-300"
                                }`}
                            onClick={() => setSelectedIndex(idx)}
                        >
                            <Image
                                src={img.url}
                                alt={img.altText || "Product image"}
                                width={400}
                                height={500}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            )}


        </div>
    );
}
