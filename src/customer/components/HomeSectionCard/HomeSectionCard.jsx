import React from "react";
const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
       w-[15rem] mx-3 border"
    >
      <div className="h-[13rem] w-[11rem]">
        <img className=" h-full w-full" src={product.imageUrl}></img>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>

        <p className="mt-1 text-sm text-gray-500">{product.branch}</p>
        <p className="mt-1 text-lg text-black-500">
          <span className="text-sm">đ</span>
          {product.price},000
        </p>
      </div>
    </div>
  );
};
export default HomeSectionCard;
