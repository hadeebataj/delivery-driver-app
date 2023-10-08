import { Box } from "@mui/material";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Box>
      <img
        src="/hived-logo-full.svg"
        height={80}
        style={{
          margin: "0px",
          padding: "0px",
        }}
      />
    </Box>
  );
};

export default Logo;
