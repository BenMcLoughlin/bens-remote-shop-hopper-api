import React from "react";

import useGlobal from "../controller/store";

const mapProducts = (products) => products.map((product) => (
    <a
        key={product.id}
        href={product.html_url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h3>{product.name}</h3>
    </a>
));

const Products = () => {
    const [ globalState, globalActions ] = useGlobal();
    const { status, products } = globalState;

    console.log('status, products:', status, products);
    return (
        <>
            {status === "LOADING" && <h4>Loading...</h4>}
            {/* {status === "SUCCESS" && mapProducts(products)} */}
            {status === "EMPTY" && <h4>This user have zero products</h4>}
            {status === "NOT_FOUND" && <h4>404 - User not found</h4>}
            {status === "ERROR" && <h4>Connection Error</h4>}
        </>
    );
};

export default Products;