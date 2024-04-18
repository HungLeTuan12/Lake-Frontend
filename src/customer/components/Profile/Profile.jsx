import React, { useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../State/Profile/Action";
const Profile = () => {
  const { profileCustomer } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div>
      <Fragment>
        <Typography
          variant="h4"
          sx={{ textAlign: "center" }}
          className="py-10 text-center"
        >
          Trang cá nhân
          <p>Quản lý tài khoản của bạn</p>
          <hr></hr>
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            padding={4}
            paddingLeft={12}
            paddingRight={12}
          >
            <Grid item xs={12}>
              <p className="text-lg mb-2">Tên tài khoản:</p>

              <TextField
                fullWidth
                name="username"
                value={profileCustomer?.profile?.firstName}
                aria-readonly="true"
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text-lg mb-2">Email:</p>
              <TextField
                fullWidth
                name="email"
                value={profileCustomer?.profile?.email}
                aria-readonly="true"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="text-lg mb-2">Họ:</p>

              <TextField
                fullWidth
                name="firstName"
                value={profileCustomer?.profile?.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="text-lg mb-2">Tên:</p>

              <TextField
                fullWidth
                name="lastName"
                value={profileCustomer?.profile?.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="text-lg mb-2">Số điện thoại:</p>

              <TextField
                fullWidth
                name="mobile"
                value={profileCustomer?.profile?.mobile}
                aria-readonly="true"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <p className="text-lg mb-2">Giới tính:</p>
              <FormControl fullWidth>
                <InputLabel>Giới tính</InputLabel>
                <Select name="gender" label="Danh mục gốc">
                  <MenuItem value="Men">Nam</MenuItem>
                  <MenuItem value="women">Nữ</MenuItem>
                  <MenuItem value="kids">Khác</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ p: 1.8 }}
                className="py-20"
                size="large"
                type="submit"
              >
                Lưu
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    </div>
  );
};
export default Profile;
