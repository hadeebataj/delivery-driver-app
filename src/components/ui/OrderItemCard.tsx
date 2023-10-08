import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import CallMessageButtons from "./CallMessageButtons";

type OrderItemCardProps = {
  recordOrderId: (id: string) => void;
  isDelivered: boolean;
  orderDetails: {
    id: string;
    clientName: string;
    deliveredAt?: string;
    phoneNumber: string;
    image: string;
    deliverySlot?: string;
  };
};

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  recordOrderId,
  isDelivered,
  orderDetails,
}) => {
  return (
    <div>
      <Paper
        sx={{
          minWidth: 375,
          maxWidth: 524,
          minHeight: 75,
          backgroundColor: `${isDelivered ? "#89BB5E" : "#FFC45F"}`,
          borderRadius: "12px",
          margin: "4px auto",
        }}
        elevation={3}
        onClick={() => recordOrderId(orderDetails.id)}
      >
        <Box sx={{ display: "flex", flexDirection: "row", padding: "12px" }}>
          <img
            src={orderDetails.image}
            height={68}
            width={68}
            hidden={!isDelivered}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "8px",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {orderDetails.id}
            </Typography>
            <Typography variant="subtitle1">
              {orderDetails.clientName}
            </Typography>
            {isDelivered ? (
              <Typography variant="caption">
                Delivered at: {orderDetails.deliveredAt}
              </Typography>
            ) : (
              <Typography variant="caption">
                Delivery slot: {orderDetails.deliverySlot}
              </Typography>
            )}
          </Box>
          <CallMessageButtons />
        </Box>
      </Paper>
    </div>
  );
};

export default OrderItemCard;
