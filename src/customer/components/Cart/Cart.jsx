import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5">
            <p className="uppercase pb-4 font-bold opacity-60">Price Details</p>
            <hr />
            {/* Price details */}
            <div className="space-y-3 font-semibold p-3">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$4697</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Disccount</span>
                <span className="text-green-600">-$3419</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$1278</span>
              </div>
            </div>
            {/* Button details */}
            <Button
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
