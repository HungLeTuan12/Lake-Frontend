import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://dongphuchaianh.vn/wp-content/uploads/2022/01/cach-phoi-do-voi-ao-2-day-croptop.jpg"
            alt=""
          />
        </div>
        <div className="ml-5">
          <p className="font-semibold">ÁO 2 DÂY BÚN DÁNG CROPTOP THỜI TRANG</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70">Seller: Le Tuan Hung</p>
          <div className="flex items-center space-x-5 mt-5">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div>
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 83 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 83 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
