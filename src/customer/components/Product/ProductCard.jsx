import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="productCard w-[15rem] m-3 cursor-pointer transition-all"
    >
      <div className="h-[20rem]">
        <img className="h-full w-full " src={product.imageUrl} alt="" />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.title}</p>
          <p className="">{product.branch}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-semibold">
            {product.price},000<span className="text-sm text-gray-600">đ</span>
          </p>
          {product.discountedPrice !== 0 && (
            <p className="line-through opacity-50">
              {product.discountedPrice},000
              <span className="text-sm text-gray-600">đ</span>
            </p>
          )}
          {product.discountedPrice !== 0 && (
            <p className="text-green-600 font-semibold">
              {Math.round((product.discountedPrice / product.price) * 100)}% off
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
