import { Paper, Box, Typography, Skeleton, IconButton } from "@mui/material";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import React, { useState } from "react";

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
    note: string;
  };
};

const FeedbackItemCard: React.FC<FeedbackItemCardProps> = ({
  isFeedbackPositive,
  feedbackDetails,
}) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

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
          <Skeleton
            variant="circular"
            width={68}
            height={68}
            sx={{ minWidth: 68 }}
          />
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

            <Typography variant="caption">
              ZIP Code: {feedbackDetails.zipCode}
            </Typography>
            <Typography
              variant="body2"
              hidden={!isCardExpanded}
              align="left"
              flexWrap={"wrap"}
            >
              {feedbackDetails.note}
            </Typography>
          </Box>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              justifySelf: "baseline",
              marginLeft: "auto",
            }}
          >
            <IconButton onClick={() => setIsCardExpanded((prev) => !prev)}>
              {isCardExpanded ? (
                <ArrowCircleUpOutlinedIcon />
              ) : (
                <ArrowCircleDownOutlinedIcon />
              )}
            </IconButton>
          </div>
        </Box>
      </Paper>
    </div>
  );
};

export default FeedbackItemCard;
