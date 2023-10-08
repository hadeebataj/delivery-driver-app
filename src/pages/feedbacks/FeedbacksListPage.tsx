import React from "react";
import FeedbackItemCard from "../../components/ui/FeedbackItemCard";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FeedbacksListPage: React.FC = () => {
  return (
    <div>
      <div>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search with zip code" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
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
          note: "Park vehicle in the Colindale tube station parking area and walk to the next street.",
        }}
      />
    </div>
  );
};

export default FeedbacksListPage;
