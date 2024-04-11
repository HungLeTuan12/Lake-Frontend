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
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductById,
  findProductById,
  findProducts,
} from "../../State/Product/Action";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  console.log("products ------", products);

  const handleProductDelete = (productId) => {
    var result = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này !");
    if (result) {
      dispatch(deleteProductById(productId));
    }
  };
  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deleted]);
  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell align="">Title</TableCell>
                <TableCell align="">Category name</TableCell>
                <TableCell align="">Price</TableCell>
                <TableCell align="">Quantity</TableCell>
                <TableCell align="">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="">{item.title}</TableCell>
                  <TableCell align="">{item.category.name}</TableCell>

                  <TableCell align="">{item.price}</TableCell>
                  <TableCell align="">{item.quantity}</TableCell>
                  <TableCell align="">
                    <Button
                      onClick={() => handleProductDelete(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
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
export default ProductsTable;
