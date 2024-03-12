import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div className="shadow-lg p-5">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20 flex items-center justify-between shadow-lg">
        <OrderTracker activeStep={3} />
        <Button>Cancel Order</Button>
      </div>

      <Grid className="space-y-5 mt-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            {/* Left */}
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5ab0a6c-6393-4af6-abbc-4f1acaa6ed94/air-max-dawn-shoes-tx7TpB.png"
                  alt=""
                />

                <div>
                  <p className="font-semibold">Nike Air Max Dawn</p>
                  <p className="space-x-5 opacity-50 text-xs">
                    <span>Color: White</span> <span>Size: M</span>{" "}
                  </p>
                  <p>Seller: Tuan Hung</p>
                  <p>$1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarOutlineIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                ></StarOutlineIcon>
                <span>Rate & Review Products</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default OrderDetails;
