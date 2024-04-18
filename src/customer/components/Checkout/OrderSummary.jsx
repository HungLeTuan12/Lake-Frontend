import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckOut = () => {
    navigate("/payment");
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      {/* Cart item */}
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItem?.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5">
              <p className="uppercase pb-4 font-bold opacity-60">
                Chi tiết đơn hàng
              </p>
              <hr />
              {/* Price details */}
              <div className="space-y-3 font-semibold p-3">
                <div className="flex justify-between pt-3 text-black">
                  <span>Giá</span>
                  <span>${order.order.totalPrice},000</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Giảm giá</span>
                  <span className="text-green-600">
                    -${order.order.totalDiscountedPrice},000
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
                    {order.order.totalPrice -
                      order.order.totalDiscountedPrice -
                      30}
                    ,000
                  </span>
                </div>
              </div>
              {/* Button details */}
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "#9155fd" }}
                onClick={handleCheckOut}
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
