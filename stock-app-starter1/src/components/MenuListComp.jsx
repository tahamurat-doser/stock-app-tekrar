import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from "react-router-dom";


const MenuListComp = () => {
  const navigate = useNavigate()
  const icons = [
    {
      title: "Dashboard",
      iconName: <GridViewIcon/>,
      path: "/stock",
    },
    {
      title: "Purchases",
      iconName: <ShoppingCartIcon/>,
      path: "/stock/purchases/",
    },
    {
      title: "Sales",
      iconName: <MonetizationOnIcon/>,
      path: "/stock/sales/",
    },
    {
      title: "Firms",
      iconName: <HomeWorkIcon />,
      path: "/stock/firms/",
    },
    {
      title: "Brands",
      iconName: < AutoAwesomeIcon/>,
      path: "/stock/brands",
    },
    {
      title: "Products",
      iconName: <BusinessCenterIcon />,
      path: "/stock/products",
    },
  ];
  return (
    <div>
      <List>
        {icons.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.path)} sx={{
            color: "white",
            "& .MuiSvgIcon-root": {color:"white"},
          }} >
            <ListItemButton>
              <ListItemIcon>{item.iconName}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListComp;
