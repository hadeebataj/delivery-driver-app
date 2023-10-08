import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import CallMessageButtons from "./CallMessageButtons";

type OrderDetailsCardProps = {
  id: string;
  clientName: string;
  addressLine1: string;
  addressLine2: string;
  numberOfPackages: number;
  clientNote: string;
  feedbackRating?: number;
  feedbackType?: {
    id: number;
    type: string;
    note: string;
  }[];
};

const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({
  id,
  clientName,
  addressLine1,
  addressLine2,
  numberOfPackages,
  clientNote,
}) => {
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
          backgroundColor: "#FAD597",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", padding: "12px" }}
        >
          {id}
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
            <Typography variant="h6">{clientName}</Typography>
            <Typography variant="body1" align="left">
              {addressLine1}
            </Typography>
            <Typography variant="body1" align="left">
              {addressLine2}
            </Typography>
            <Typography variant="subtitle1">
              Number of packages: {numberOfPackages}
            </Typography>
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
        <Box sx={{ padding: "12px" }} hidden={!clientNote}>
          <Typography variant="body1" align="left">
            Note: {clientNote}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default OrderDetailsCard;
