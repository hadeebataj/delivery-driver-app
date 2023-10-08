import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import CallMessageButtons from "./CallMessageButtons";

const OrderDetailsCard: React.FC = () => {
  return (
    <div>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "8px",
          borderRadius: "12px",
          margin: "4px auto",
          maxWidth: 524,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", padding: "12px" }}
        >
          WT06839-739-NW9
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body1">54 Windsor Road</Typography>
            <Typography variant="body1">London NW96 7WE</Typography>
            <Typography variant="subtitle1">Number of packages: 1</Typography>
          </div>
          <div
            style={{
              display: "flex",
              minWidth: "10rem",
              alignItems: "flex-end",
            }}
          >
            <CallMessageButtons />
          </div>
        </Box>
        <Box sx={{ padding: "12px" }}>
          <Typography variant="body1" align="left">
            Note: Leave the package at the doorstep and confirm by calling on
            smart doorbell
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default OrderDetailsCard;
