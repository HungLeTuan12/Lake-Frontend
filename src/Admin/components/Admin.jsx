import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Dashboard from "./Dashboard";
import CreateProductForm from "./CreateProductForm";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon />,
  },
  { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <MailIcon /> },
  {
    name: "AddProduct",
    path: "/admin/products/create",
    icon: <DashboardIcon />,
  },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "1px solid blue",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar></Toolbar>} */}
      <>
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <div className="flex h-[100vh]">
        {/* <CssBaseline></CssBaseline> */}
        <div className="border border-r-gray-300 w-[15%] h-full fixed">
          {drawer}
        </div>
        <div className="border w-[85%] h-full ml-[15%]">
          <Box>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route
                path="/products/create"
                element={<CreateProductForm />}
              ></Route>
              <Route path="/products" element={<ProductsTable />}></Route>
              <Route path="/orders" element={<OrdersTable />}></Route>
              <Route path="/customers" element={<CustomersTable />}></Route>
            </Routes>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default Admin;
