import React from "react";
import "./ProductCard.css"
const ProductCard = ({product}) => {
    return (
        <div className="productCard w-[15rem] m-3 cursor-pointer transition-all">
            <div className="h-[20rem]">
                <img className="h-full w-full object-cover object-right-top" src={product.imageUrl} alt="" />
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p className="">{product.title}</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <p className="font-semibold">${product.discountedPrice}</p>
                    <p className="line-through opacity-50">${product.price}</p>
                    <p className="text-green-600 font-semibold">${product.discountPersent}% off</p>
                </div>
            </div>
            
        </div>
    )
}
export default ProductCard