import React from "react";
import {
  Paper,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  Avatar,
  alpha,
  InputBase,
} from "@mui/material";
import "../components/style.css";
// import ProductImg from "../images/Product.jpeg";
import SearchIcon from "@mui/icons-material/SearchOutlined";

function ProductSell({ open, setOpen, options, loading, salesData }) {
  return (
    <Paper style={{ height: "300px", padding: "20px", overflow: "hidden" }}>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            component="div"
            variant="h5"
            style={{ fontWeight: "bold" }}
          >
            Product Sell
          </Typography>
        </div>
        <div style={{ width: "40%", display: "flex" }}>
          <div
            style={{
              display: "flex",
              marginTop: "1%",
              justifyContent: "space-between",
            }}
          >
            <SearchIcon style={{ marginTop: "5%" }} />
            <InputBase placeholder="Search" style={{ fontSize: "small" }} />
          </div>

          <div>
            <TextField
              label="Last"
              variant="standard"
              select
              defaultValue={30} // Default value for the dropdown
              style={{ marginLeft: "20%", width: "5.5em" }}
            >
              <MenuItem value={7}>7 Days</MenuItem>
              <MenuItem value={30}>30 Days</MenuItem>
              <MenuItem value={90}>90 Days</MenuItem>
            </TextField>
          </div>
        </div>
      </div>

      <TableContainer style={{ maxHeight: 250 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  textAlign: "left",
                  width: "70%",
                }}
              >
                Product
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Stock
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Price
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Total Sales
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell style={{ textAlign: "left", border: "none" }}>
                  <div style={{ display: "flex", marginTop: "1%" }}>
                    <Avatar
                      variant="square"
                      src="/images/Product.jpeg"
                      sx={{ width: 100, height: 50 }}
                    ></Avatar>
                    <div style={{ marginLeft: "3%" }}>
                      <Typography style={{ fontWeight: "bold" }} variant="h7">
                        {row.name}
                      </Typography>
                      <Typography component="div" style={{ fontSize: "0.9em" }}>
                        {row.description}
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ textAlign: "center", border: "none" }}>
                  {row.stock}
                </TableCell>
                <TableCell style={{ textAlign: "center", border: "none" }}>
                  {row.price}
                </TableCell>
                <TableCell style={{ textAlign: "center", border: "none" }}>
                  {row.totalSales}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const products = [
  {
    id: 1,
    name: "Abstract 3D",
    description: "Lorem ipsum dobr seit overut gannorctuct otyspacing alet.",
    stock: 52,
    price: "$45.99",
    totalSales: 20,
    image: "/images/Product.jpeg",
  },
  {
    id: 2,
    name: "Sarphens Illustration",
    description: "Lorem ipsum dobr seit overut gannorctuct otyspacing alet.",

    stock: 32,
    price: "$45.99",
    totalSales: 20,
    image: "/images/Product.jpeg",
  },
  {
    id: 3,
    name: "Skin Product",
    description: "Lorem ipsum dobr seit overut gannorctuct otyspacing alet.",

    stock: 23,
    price: "$25.99",
    totalSales: 40,
    image: "/images/Product.jpeg",
  },
];

export default ProductSell;
