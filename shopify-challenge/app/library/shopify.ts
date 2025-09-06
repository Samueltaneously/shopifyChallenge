

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontKey = process.env.SHOPIFY_API;

const endpoint = `https://${domain}/api/2023-07/graphql.json`;

export async function getProduct(query: string, variables: Record<string, any> = {}) {
    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": storefrontKey || "",
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
        throw new Error("Failed fetch product");
    }

    const json = await res.json();
    return json.data;
}

export async function getShop(query: string) {
    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": storefrontKey || "",
        },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        throw new Error("Failed fetch shop data");
    }

    const json = await res.json();
    return json.data;
}




export const PRODUCT_QUERY = `
query Product($handle: String!) {
product(handle: $handle) {
id
title
description
images(first: 5) {
edges {
node {
url
altText
}
}
}
variants(first: 5) {
edges {
node {
id
title
price {
amount
currencyCode
}
availableForSale
}
}
}
}
}
`;



export const SHOP_QUERY = `
{
  shop {
    name
    brand {
      logo {
        image {
          url
          altText
        }
      }
    }
  }
}
`;

