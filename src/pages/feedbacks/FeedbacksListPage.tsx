import React, { useEffect, useState } from "react";
import FeedbackItemCard from "../../components/ui/FeedbackItemCard";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { feedbacks } from "../../data/feedbackData";

const FeedbacksListPage: React.FC = () => {
  const [zipCodeInput, setZipCodeInput] = useState("");
  const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbacks);

  useEffect(() => {
    filterFeedbacks();
  }, [zipCodeInput]);

  const filterFeedbacks = () => {
    const filtered = feedbacks.filter((feedback) =>
      feedback.feedbackDetails.zipCode.includes(zipCodeInput.toUpperCase())
    );
    setFilteredFeedbacks(filtered);
  };

  return (
    <div>
      <div>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search with zip code"
          value={zipCodeInput}
          onChange={(e) => setZipCodeInput(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={filterFeedbacks}
        >
          <SearchIcon />
        </IconButton>
      </div>
      {filteredFeedbacks.map((feedback) => (
        <FeedbackItemCard
          key={feedback.feedbackDetails.id}
          isFeedbackPositive={feedback.isFeedbackPositive}
          feedbackDetails={{
            id: `${feedback.feedbackDetails.id}`,
            feedbackType: `${feedback.feedbackDetails.feedbackType}`,
            recordedOn: `${feedback.feedbackDetails.recordedOn}`,
            driverName: `${feedback.feedbackDetails.driverName}`,
            image: `${feedback.feedbackDetails.image}`,
            zipCode: `${feedback.feedbackDetails.zipCode}`,
            address: `${feedback.feedbackDetails.address}`,
            note: `${feedback.feedbackDetails.note}`,
          }}
        />
      ))}
    </div>
  );
};

export default FeedbacksListPage;
