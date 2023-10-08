import React from "react";
import OrderItemCard from "../components/ui/OrderItemCard";

const OrderListPage: React.FC = () => {
  return (
    <div>
      <OrderItemCard
        isDelivered={true}
        orderDetails={{
          id: "WT06839-739-NW9",
          clientName: "John Doe",
          deliveredAt: "10:00 AM",
          phoneNumber: "0712345698",
          image: "/placeholder-square.jpg",
        }}
      />
    </div>
  );
};

export default OrderListPage;
