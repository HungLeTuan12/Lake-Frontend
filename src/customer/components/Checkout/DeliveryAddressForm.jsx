import React from "react";
import { Button, Grid, Box, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address");
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
    console.log("Address: ", orderData);
  };
  return (
    <div>
      <Grid container spacing={4}>
        {/* <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid> */}
        <Grid item xs={12} lg={12}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit} action="">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {/* First name */}
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Họ"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                {/* Last name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Tên"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                {/* Address */}
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Địa chỉ"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  ></TextField>
                </Grid>
                {/* City */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Thành phố"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                {/* State */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                {/* State */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  ></TextField>
                </Grid>
                {/* Phone number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Số điện thoại"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                {/* Button delivery */}
                <Grid item xs={12} sm={6}>
                  <Button
                    size="large"
                    sx={{ py: "1.5", bgcolor: "RGB(145 85 253)" }}
                    variant="contained"
                    type="submit"
                  >
                    Thanh toán ngay
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default DeliveryAddressForm;
