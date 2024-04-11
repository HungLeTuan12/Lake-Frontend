import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getAllOrders,
  shippedOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AvatarGroup,
  Menu,
  MenuItem,
} from "@mui/material";
const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;

    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;

    setAnchorEl(newAnchorElArray);
  };
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
  console.log("admin orders: ", adminOrder);
  const handleShippedOrder = (orderId) => {
    dispatch(shippedOrder(orderId));
    handleClose();
  };
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };
  const handleDeletedOrder = (orderId) => {
    alert("Bạn có chắc muốn xóa đơn hàng này ?");
    dispatch(deleteOrder(orderId));
    handleClose();
  };
  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Orders"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Hình ảnh</TableCell>
                <TableCell align="">Tiêu đề</TableCell>
                <TableCell align="">Tên sản phẩm</TableCell>
                <TableCell align="">Tổng giá</TableCell>
                <TableCell align="">Số lượng đặt</TableCell>
                <TableCell align="">Trạng thái hiện tại</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="">
                    <AvatarGroup>
                      {item.orderItem.map((orderIte) => (
                        <Avatar src={orderIte.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="">
                    {item.orderItem.map((orderIte) => (
                      <p> {orderIte.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="">
                    {item.orderItem.map((orderIte) => (
                      <p> {orderIte.product.branch}</p>
                    ))}
                  </TableCell>
                  <TableCell align="">
                    <p> {item.totalPrice}</p>
                  </TableCell>
                  <TableCell align="">
                    {item.orderItem.map((orderIte) => (
                      <p> {orderIte.quantity}</p>
                    ))}
                  </TableCell>
                  <TableCell align="">
                    <p
                      className={`text-white text-center px-5 py-2 rounded-full ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-[green]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[blue]"
                          : item.orderStatus === "DELIVERED"
                          ? "bg-[violet]"
                          : item.orderStatus === "PENDING"
                          ? "bg-[gray]"
                          : "bg-[red]"
                      }`}
                    >
                      {item.orderStatus}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};
export default OrdersTable;
