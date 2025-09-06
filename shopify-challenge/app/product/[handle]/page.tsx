
import React, { } from 'react';
import { getProduct, PRODUCT_QUERY } from '@/app/library/shopify';
import ProductSelectors from '@/app/components/productSelectors';
import ImageGallery from "../../components/imageGallery";



export default async function SelectedProductPage({ params }: { params: { handle: string } }) {

    const product = await getProduct(PRODUCT_QUERY, { handle: params.handle });
    const firstVariant = product.product.variants.edges[0]?.node;


    return (


        <div id="productPAGE" className="flex flex-col w-full bg-white text-black pt-10 pb-10">

            <div id="productDISPLAY" className="w-4/5 mx-auto flex flex-col md:flex-row gap-12">

                <div id="productGALLERY" className="w-full md:w-2/3">
                    <ImageGallery images={product.product.images.edges.map((edge: any) => edge.node)} />
                </div>


                <div id="productINFO" className="w-full md:w-1/3">
                    <ProductSelectors product={product.product} firstVariant={firstVariant} />
                </div>

            </div>
        </div>



    );

}
