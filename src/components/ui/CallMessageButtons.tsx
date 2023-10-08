import { Box, IconButton } from "@mui/material";
import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const CallMessageButtons: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
      }}
    >
      <IconButton
        sx={{
          height: 40,
          width: 40,
          margin: "auto auto",
        }}
      >
        <CallOutlinedIcon />
      </IconButton>
      <IconButton
        sx={{
          height: 40,
          width: 40,
          margin: "auto auto",
        }}
      >
        <MessageOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default CallMessageButtons;
