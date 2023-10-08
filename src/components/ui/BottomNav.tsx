import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/Home";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SosOutlinedIcon from "@mui/icons-material/SosOutlined";

const BottomNav: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="Orders"
          icon={<LocalShippingOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Feedbacks"
          icon={<ForumOutlinedIcon />}
        />
        <BottomNavigationAction label="Help" icon={<SosOutlinedIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
