import { Grid, Box, Avatar, Rating, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createReview,
  findReviewByProductID,
} from "../../../State/Review/Action";
import store from "../../../State/store";
const ProductReviewCards = () => {
  // const CreateProductForm = () => {
  //   const [reqData, setReqData] = useState({
  //     comments: ""
  //   });
  // }
  const params = useParams();
  const dispatch = useDispatch();
  const { reviews } = useSelector((store) => store);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const reqData = {
      productId: params.productId,
      review: data.get("comments"),
    };
    dispatch(createReview(reqData));
  };
  useEffect(() => {
    dispatch(findReviewByProductID(params.productId));
    console.log("Tets:", reviews.reviews);
  }, [reviews.review]);
  return (
    <div>
      {reviews?.reviews?.map((item) => (
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
                <p className="font-semibold text-lg">{item.user.firstName}</p>
                <p className="opacity-60">
                  {item.createdAt.slice(0, 10)} --{" "}
                  {item.createdAt.slice(11, 19)}
                </p>
                <p className="opacity-60">{item.review}</p>
              </div>
              <Rating
                value={4.5}
                name="half-rating"
                readOnly
                precision={0.5}
              ></Rating>
            </div>
          </Grid>
        </Grid>
      ))}
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
              <p className="font-semibold text-lg">H</p>
              <p className="opacity-60">13/4/2024</p>
            </div>
            <Rating
              value={4.5}
              name="half-rating"
              readOnly
              precision={0.5}
            ></Rating>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bình luận"
                  name="comments"
                  // value={reviews.review}
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} spacing={2}>
                <Button
                  variant="contained"
                  sx={{ p: 0.5 }}
                  className="py-5 mt-2"
                  // size="large"
                  type="submit"
                >
                  Gửi
                </Button>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductReviewCards;
