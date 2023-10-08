import { Button } from "@mui/material";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import React from "react";

const CompleteDeliveryButton: React.FC = () => {
  return (
    <div>
      <Button
        sx={{
          width: "100%",
          backgroundColor: "#FFBE36",
          color: "#252525",
          "&:hover": {
            backgroundColor: "#FFBE36",
            color: "#252525",
          },
          "&:active": {
            backgroundColor: "#FFBE36",
            color: "#252525",
          },
          position: "fixed",
          bottom: 70,
          left: 0,
          zIndex: 20,
        }}
        component="label"
        variant="contained"
        startIcon={<AssignmentTurnedInOutlinedIcon />}
      >
        Complete Delivery
      </Button>
    </div>
  );
};

export default CompleteDeliveryButton;
