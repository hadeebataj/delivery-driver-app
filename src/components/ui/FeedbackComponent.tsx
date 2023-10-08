import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import RecordFeedbackDetails from "./RecordFeedbackDetails";

type FeedbackComponentProps = {
  // currentFeedback: {
  //   isDelivered: boolean;
  //   orderDetails: {
  //     id: string;
  //     clientName: string;
  //     deliveredAt: string;
  //     phoneNumber: string;
  //     image: string;
  //     deliverySlot: string;
  //     addressLine1: string;
  //     addressLine2: string;
  //     numberOfPackages: number;
  //     clientNote: string;
  //     feedbackRating: number;
  //     feedbackType: {
  //       id: number;
  //       type: string;
  //       note?: string;
  //     }[];
  //   };
  // };
  feedbackRating: number;
  isDelivered: boolean;
  selectedFeedbackTypes:
    | never[]
    | (
        | { id: number; type: string; note: string }
        | { id: number; type: string; note?: undefined }
      )[]
    | undefined;
};

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    id: number;
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    id: 1,
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    id: 2,
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    id: 3,
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    id: 4,
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    id: 5,
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

const IconContainer = (props: IconContainerProps) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
};

const FeedbackComponent: React.FC<FeedbackComponentProps> = ({
  feedbackRating,
  selectedFeedbackTypes,
  isDelivered,
}) => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle1" color={"black"} align="left">
          Feedback
        </Typography>
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "12px",
          }}
        >
          <Typography variant="body2">How was your experience?</Typography>
          <StyledRating
            name="highlight-selected-only"
            defaultValue={feedbackRating ?? 0}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
            sx={{ margin: "12px" }}
          />
        </Paper>
        <RecordFeedbackDetails
          isDelivered={isDelivered}
          selectedFeedbackTypes={selectedFeedbackTypes ?? undefined}
        />
      </Box>
    </div>
  );
};

export default FeedbackComponent;
