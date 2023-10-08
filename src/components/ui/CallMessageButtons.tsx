import { Box, IconButton } from "@mui/material";
import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DisplaySnackBar from "./DisplaySnackBar";

type CallMessageButtonsProp = {
  phoneNumber?: string;
};

const CallMessageButtons: React.FC<CallMessageButtonsProp> = ({
  phoneNumber,
}) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClick = () => {
    setOpen(true);
    setMessage(`calling ${phoneNumber}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
      }}
    >
      <div hidden>
        <DisplaySnackBar isOpen={open} message={message} />
      </div>
      <IconButton
        sx={{
          height: 40,
          width: 40,
          margin: "auto auto",
        }}
        onClick={handleClick}
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
