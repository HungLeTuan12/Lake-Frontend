import { Grid, Box, Avatar, Rating } from "@mui/material";
import React from "react";
const ProductReviewCards = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3} mt={1}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-60">April 5, 2023</p>
            </div>
          </div>
          <Rating
            value={4.5}
            name="half-rating"
            readOnly
            precision={0.5}
          ></Rating>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas,
            asperiores deleniti sed dolores suscipit, voluptas excepturi sit rem
            aliquid, error quibusdam? Non tempore aliquid recusandae repudiandae
            nostrum blanditiis qui.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductReviewCards;
