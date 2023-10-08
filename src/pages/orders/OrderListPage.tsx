import React, { useEffect, useState } from "react";
import OrderItemCard from "../../components/ui/OrderItemCard";
import { IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { orders } from "../../data/ordersData";
import { useNavigate } from "react-router-dom";

const OrderListPage: React.FC = () => {
  const [today, setToday] = useState(new Date());
  const navigate = useNavigate();
  const [orderIdInput, setOrderIdInput] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    setToday(new Date());
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orderIdInput]);

  const filterOrders = () => {
    const filtered = orders.filter((order) =>
      order.orderDetails.id.includes(orderIdInput.toUpperCase())
    );
    setFilteredOrders(filtered);
  };

  const onCardClick = (id: string) => {
    navigate(`/driver/orders/${id}`);
  };

  return (
    <div>
      <div>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search with order ID"
          onChange={(e) => setOrderIdInput(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={filterOrders}
        >
          <SearchIcon />
        </IconButton>
      </div>

      <Typography variant="subtitle2" color={"#252525"} align="left">
        {today.toLocaleDateString()}
      </Typography>

      {filteredOrders.map((order) => (
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
