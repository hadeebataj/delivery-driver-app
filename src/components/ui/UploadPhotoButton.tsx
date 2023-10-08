import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import React from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadPhotoButton: React.FC = () => {
  return (
    <div style={{ margin: "12px auto" }}>
      {/* show uploaded photos here */}
      <Button
        sx={{
          width: "100%",
          backgroundColor: "#FFBE36",
          color: "#252525",
          "&:hover": {
            backgroundColor: "#FFBE36",
            color: "#252525",
          },
          "&:active": {
            backgroundColor: "#FFBE36",
            color: "#252525",
          },
        }}
        component="label"
        variant="contained"
        startIcon={<PublishOutlinedIcon />}
      >
        Upload Photo
        <VisuallyHiddenInput type="file" />
      </Button>
    </div>
  );
};

export default UploadPhotoButton;
