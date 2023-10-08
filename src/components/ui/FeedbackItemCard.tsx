import { Paper, Box, Typography, Skeleton } from "@mui/material";
import React from "react";

type FeedbackItemCardProps = {
  isFeedbackPositive: boolean;
  feedbackDetails: {
    id: string;
    feedbackType: string;
    recordedOn: string;
    driverName: string;
    image?: string;
    zipCode: string;
    address: string;
  };
};

const FeedbackItemCard: React.FC<FeedbackItemCardProps> = ({
  isFeedbackPositive,
  feedbackDetails,
}) => {
  return (
    <div>
      <Paper
        sx={{
          minWidth: 375,
          maxWidth: 524,
          minHeight: 75,
          backgroundColor: `${isFeedbackPositive ? "#89BB5E" : "#F07361"}`,
          borderRadius: "12px",
          margin: "4px auto",
        }}
        elevation={3}
      >
        <Box sx={{ display: "flex", flexDirection: "row", padding: "12px" }}>
          <Skeleton variant="circular" width={68} height={68} />
          {/* <img src={feedbackDetails.image} height={68} width={68} /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "8px",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {feedbackDetails.feedbackType}
            </Typography>
            <Typography variant="subtitle2">
              {feedbackDetails.driverName}
            </Typography>
            {isFeedbackPositive ? (
              <Typography variant="caption">
                Delivered at: {feedbackDetails.recordedOn}
              </Typography>
            ) : (
              <Typography variant="caption">
                ZIP Code: {feedbackDetails.zipCode}
              </Typography>
            )}
          </Box>
          {/* Expand to show more button */}
        </Box>
      </Paper>
    </div>
  );
};

export default FeedbackItemCard;
