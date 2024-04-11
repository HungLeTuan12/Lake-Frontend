import { Grid } from "@mui/material";
import React from "react";
import Achivements from "./Achivements";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTable from "./ProductsTable";
import OrdersTable from "../view/OrderViewTable";
const Dashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid className="shadow-lg shadow-gray-600" item xs={12} md={4}>
          <Achivements></Achivements>
        </Grid>
        <Grid className="shadow-lg shadow-gray-600" item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid className="shadow-lg shadow-gray-600" item xs={12} md={6}>
          <OrdersTable />
        </Grid>
        <Grid className="shadow-lg shadow-gray-600" item xs={12} md={6}>
          <OrdersTable />
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
