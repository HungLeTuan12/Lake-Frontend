import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeItemToCart, updateCartItem } from "../../../State/Cart/Action";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    console.log("Data update", data);
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeItemToCart(item.id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Kích thước: {item.size}</p>
          <p className="opacity-70">Màu sắc: {item.product.color}</p>
          <p className="opacity-70">Người bán: Le Tuan Hung</p>
          <div className="flex items-center space-x-5 mt-5">
            <p className="font-semibold">{item.product.price},000</p>
            <p className="opacity-50 line-through">
              ${item.product.discountedPrice},000
            </p>
            <p className="text-green-600 font-semibold">
              {item.product.discountedPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div>
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton
            sx={{ color: "RGB(145 83 253)" }}
            onClick={() => handleUpdateCartItem(1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "RGB(145 83 253)" }}
          >
            Xóa
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
