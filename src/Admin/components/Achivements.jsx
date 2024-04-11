import styled from "@emotion/styled";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
const TringleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});
const Achivements = () => {
  return (
    <Card
      sx={{
        position: "relative",
        bgcolor: "#242B2E",
        color: "white",
        paddingBottom: "13px",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Hung Le
        </Typography>
        <Typography>Congratulations !</Typography>
        <Typography variant="h5" paddingTop={2} paddingBottom={2}>
          420.8k{" "}
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TringleImg src=""></TringleImg>

        <TrophyImg src="https://img.fruugo.com/product/0/71/976225710_max.jpg"></TrophyImg>
      </CardContent>
    </Card>
  );
};
export default Achivements;
