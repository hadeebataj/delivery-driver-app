import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import React, { useState } from "react";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div style={{ margin: "12px auto" }}>
      {/* show uploaded photos here */}
      {selectedFile && (
        <Typography variant="body2" color="black">
          Selected File: {selectedFile.name}
        </Typography>
      )}
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
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg"
        />
      </Button>
    </div>
  );
};

export default UploadPhotoButton;
