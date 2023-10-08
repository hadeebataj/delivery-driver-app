import { Button } from "@mui/material";
import React from "react";

const ShowDirectionsButton: React.FC = () => {
  return (
    <div style={{ margin: "12px auto" }}>
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
        }}
        variant="contained"
      >
        Show Directions
      </Button>
    </div>
  );
};

export default ShowDirectionsButton;
