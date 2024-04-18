import { Avatar, AvatarGroup, Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../State/Admin/Order/Action";
import AdjustIcon from "@mui/icons-material/Adjust";

const Order = () => {
  const orderStatus = [
    { label: "Đang vận chuyển", value: "on_the_way" },
    { label: "Đã vận chuyển", value: "delivered" },
    { label: "Đã hủy", value: "returned" },
  ];
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.deletedOrder,
  ]);
  return (
    <div className="px:5 lg:px-20 pt-8">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Tìm kiếm</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">TRẠNG THÁI ĐƠN HÀNG</h1>
            </div>
            {orderStatus.map((option) => (
              <div className="flex items-center space-y-2">
                <input
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultValue={option.value}
                  type="checkbox"
                />
                <label
                  className="ml-3 text-sm text-gray-600"
                  htmlFor={option.value}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </Grid>
        {/* Right */}
        <Grid item xs={9}>
          <div className="space-y-2">
            {adminOrder?.orders?.map((item) => (
              // <OrderCard item={item} />
              <div className="p-5 border shadow-lg hover:shadow-2xl">
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  {/* Image and infor */}
                  <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                      <AvatarGroup>
                        {item.orderItem.map((orderIte) => (
                          <Avatar src={orderIte.product.imageUrl}></Avatar>
                        ))}
                      </AvatarGroup>
                      <div className="ml-5 space-y-2">
                        <p className="">
                          {item.orderItem.map((orderIte) => (
                            <p> {orderIte.product.title}</p>
                          ))}
                        </p>
                        <p className="opacity-50 text-xs font-semibold">
                          {item.orderItem.map((orderIte) => (
                            <p> {orderIte.product.branch}</p>
                          ))}
                        </p>
                        <p className="opacity-50 text-xs font-semibold">
                          {item.orderItem.map((orderIte) => (
                            <p> {orderIte.product.color}</p>
                          ))}
                        </p>
                      </div>
                    </div>
                  </Grid>
                  {/* Price */}
                  <Grid item xs={2}>
                    <p>{item.totalPrice},000</p>
                  </Grid>
                  {/* Price */}
                  <Grid item xs={4}>
                    {true && (
                      <div>
                        <p>
                          <AdjustIcon
                            sx={{ width: "15px", height: "15px" }}
                            className="text-green-600 mr-2 text-sm"
                          />
                          <span>Dự kiến nhận hàng vào ngày 19-20/04/2024</span>
                        </p>

                        {/* <p className="text-xs">Your item has been delivered</p> */}
                      </div>
                    )}
                    {false && (
                      <p>
                        <span>Your item has been delivered</span>
                      </p>
                    )}
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Order;
