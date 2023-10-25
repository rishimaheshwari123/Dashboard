import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import "../pages/Dashboard.css";
import DrawerComponent from "../components/Drawer";
import sampleData from "../utils/data";
import StatCard from "../components/Stats";
import SalesOverviewChart from "../components/BarChar";
import PieChartComponent from "../components/PieChart";
import ProductDetail from "../components/ProductDetail";

const drawerWidth = 230;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Dashboard");
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions([...sampleData.periods]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  const handleItemClick = (text) => {
    setActiveItem(text);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={{ backgroundColor: "#F5F6F8" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#F5F6F8",
          color: "black",
          boxShadow: "none",
        }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            style={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft: "1.3em", fontWeight: "bold" }}
          >
            Hello Shahrukh👋,
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "4px",
                backgroundColor: alpha("#ffffff", 1),
                marginLeft: 0,
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "10px",
                  pointerEvents: "none",
                  zIndex: "1",
                  height: "100%",
                  color: alpha("#808080", 1),
                }}
              >
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                style={{
                  paddingLeft: "2.5em",
                  color: "gray",
                  fontSize: "small",
                }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerComponent
            activeItem={activeItem}
            handleItemClick={handleItemClick}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerComponent
            activeItem={activeItem}
            handleItemClick={handleItemClick}
          />
        </Drawer>
      </Box>

      <Box
        style={{ backgroundColor: "#F5F6F8" }}
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: "100%",
        }}
      >
        <Toolbar />

        <Grid container spacing={4} className="gridlayout">
          <Grid item xs={12} sm={8} md={3}>
            <StatCard
              title="Earning"
              value="$198k"
              change="↑ 37.8%"
              icon="/images/dollar.png"
              propcolor="green"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <StatCard
              title="Orders"
              value="$2.4k"
              change="↓ 2%"
              icon="/images/orders.png"
              propcolor="red"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <StatCard
              title="Balance"
              value="$2.4k"
              change="↓ 2%"
              icon="/images/balance.png"
              propcolor="red"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <StatCard
              title="Total Sales"
              value="$89k"
              change="↑ 11%"
              icon="/images/bag.png"
              propcolor="green"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={8.5}>
            <SalesOverviewChart
              open={open}
              setOpen={setOpen}
              options={options}
              loading={loading}
              salesData={sampleData.salesData}
            />
          </Grid>

          <Grid item xs={12} sm={8} md={3.5}>
            <PieChartComponent />
          </Grid>

          <Grid item xs={12} sm={8} md={12}>
            {/* <ProductTable/> */}
            <ProductDetail />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
