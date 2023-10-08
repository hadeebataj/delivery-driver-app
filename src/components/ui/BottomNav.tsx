import React from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/Home";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SosOutlinedIcon from "@mui/icons-material/SosOutlined";

const BottomNav: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/driver/");
  };

  const handleOrdersClick = () => {
    navigate("/driver/orders");
  };

  const handleFeedbacksClick = () => {
    navigate("/driver/feedbacks");
  };

  const handleHelpClick = () => {
    navigate("/help");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        maxWidth: "420px",
        margin: "0px auto",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(event);
        }}
        sx={{ maxWidth: "420px", marginLeft: "-15px" }}
      >
        <BottomNavigationAction
          onClick={handleHomeClick}
          label="Home"
          icon={<HomeOutlinedIcon />}
        />

        <BottomNavigationAction
          label="Orders"
          icon={<LocalShippingOutlinedIcon />}
          onClick={handleOrdersClick}
        />

        <BottomNavigationAction
          label="Feedbacks"
          icon={<ForumOutlinedIcon />}
          onClick={handleFeedbacksClick}
        />

        <BottomNavigationAction
          label="Help"
          icon={<SosOutlinedIcon />}
          onClick={handleHelpClick}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
