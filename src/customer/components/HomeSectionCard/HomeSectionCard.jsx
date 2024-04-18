import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  // const handleProductDetails = () => {
  //   navigate("")
  // }
  // useEffect(() => {
  //   const data = { productId: params.productId };
  //   dispatch(findProductById(data));
  // }, [params.productId]);
  return (
    <div
      className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
       w-[15rem] mx-3 border"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="h-[13rem] w-[11rem]">
        <img className=" h-full w-full" src={product.imageUrl}></img>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{product.branch}</p>
        <p className="mt-1 text-lg text-black-500">
          <span className="text-sm">đ</span>
          {product.discountedPrice},000
        </p>
      </div>
    </div>
  );
};
export default HomeSectionCard;
