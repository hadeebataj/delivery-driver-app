import React from "react";
import FeedbackItemCard from "../components/ui/FeedbackItemCard";

const FeedbacksListPage: React.FC = () => {
  return (
    <div>
      <FeedbackItemCard
        isFeedbackPositive={false}
        feedbackDetails={{
          id: "FDBK0827",
          feedbackType: "No Parking",
          recordedOn: "3/10/2023",
          driverName: "Mike Ross",
          image: "",
          zipCode: "NW8 9AA",
          address: "123 Abbey Road, London, NW8 9AA",
        }}
      />
    </div>
  );
};

export default FeedbacksListPage;
