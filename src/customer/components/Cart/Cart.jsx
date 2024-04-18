import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store);
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [carts.updateCartItemss, carts.deleteCartItemss]);
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {carts.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5">
            <p className="uppercase pb-4 font-bold opacity-60">
              Chi tiết giỏ hàng
            </p>
            <hr />
            {/* Price details */}
            <div className="space-y-3 font-semibold p-3">
              <div className="flex justify-between pt-3 text-black">
                <span>Giá</span>
                <span>{carts.cart?.totalPrice},000</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Giảm giá</span>
                <span className="text-green-600">
                  -{carts.cart?.totalDiscountedPrice},000
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Phí vận chuyển</span>
                <span className="text-green-600">30,000</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Tổng</span>
                <span className="text-green-600">
                  {carts.cart?.totalPrice -
                    carts.cart?.totalDiscountedPrice -
                    30}
                  ,000
                </span>
              </div>
            </div>
            {/* Button details */}
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "#9155fd" }}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
