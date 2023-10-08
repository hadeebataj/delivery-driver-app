// Assuming driver has already signed in to the application
import { Skeleton, Typography } from "@mui/material";
import React from "react";

type DriverProps = {
  name: string;
};

const WelcomePage: React.FC<DriverProps> = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        maxWidth: "420px",
        margin: "0px auto",
      }}
    >
      <Skeleton variant="circular" width={100} height={100} />
      <Typography variant="h3" color="#252525">
        Welcome, {name}!
      </Typography>
    </div>
  );
};

export default WelcomePage;
