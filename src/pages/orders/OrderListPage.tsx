import React, { useEffect, useState } from "react";
import OrderItemCard from "../../components/ui/OrderItemCard";
import { IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { orders } from "../../data/ordersData";
import { useNavigate } from "react-router-dom";

const OrderListPage: React.FC = () => {
  const [today, setToday] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    setToday(new Date());
  }, []);

  const onCardClick = (id: string) => {
    navigate(`/driver/orders/${id}`);
  };

  return (
    <div>
      <div>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search with order ID" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>

      <Typography variant="subtitle2" color={"#252525"} align="left">
        {today.toLocaleDateString()}
      </Typography>

      {orders.map((order) => (
        <OrderItemCard
          key={order.orderDetails.id}
          recordOrderId={onCardClick}
          isDelivered={order.isDelivered}
          orderDetails={{
            id: `${order.orderDetails.id}`,
            clientName: `${order.orderDetails.clientName}`,
            deliveredAt: `${order.orderDetails.deliveredAt}`,
            phoneNumber: `${order.orderDetails.phoneNumber}`,
            image: `${order.orderDetails.image}`,
            deliverySlot: `${order.orderDetails.deliverySlot}`,
          }}
        />
      ))}
    </div>
  );
};

export default OrderListPage;
