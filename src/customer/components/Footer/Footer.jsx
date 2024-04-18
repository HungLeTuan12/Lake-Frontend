import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: "3" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 pt-5" variant="h6">
            GIỚI THIỆU
          </Typography>
          <div>
            <p className="pl-5 pb-5" variant="h6">
              TyHi Sneaker nơi trao tặng các sản phẩm giày thời trang trẻ trung,
              phong cách, bắt trend cho giới trẻ.
            </p>
            <p className="pl-5 pb-5" variant="h6">
              Địa chỉ: Tầng B1, TTTM Vincom Megamall, 458 Minh Khai, P. Vĩnh
              Tuy, Q. Hai Bà Trưng, Hà Nội.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 pt-5" variant="h6">
            CÁC CHÍNH SÁCH
          </Typography>
          <div>
            <Button className="pb-5" variant="h3">
              Chính sách bảo mật
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Chính sách bảo hành
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Chính sách đổi trả hoàn tiền
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Phương thức thanh toán
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Chính sách vận chuyển
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 pt-5" variant="h6">
            HỖ TRỢ KHÁCH HÀNG
          </Typography>
          <div>
            <Button className="pb-5" variant="h3">
              Giới thiệu
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Liên hệ
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Tác giả
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Mua hàng: 0932433160 (7h30-22h) (Tất cả các ngày trong tuần)
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 pt-5" variant="h6">
            KẾT NỐI VỚI CHÚNG TÔI
          </Typography>
          <div>
            <Button className="pb-5" variant="h3">
              Hotline: 0932.433.160
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Email: hhhsneaker@gmail.com
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h3">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20 pb-5" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My company. All rights reserved
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by me
          </Typography>
          <Typography variant="body2" component="p" align="center">
            05/03/2024. Iam always still here and don't know what can be
            happening tomorrow !
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
