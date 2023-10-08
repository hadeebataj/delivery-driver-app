import React from "react";
import OrderDetailsCard from "../../components/ui/OrderDetailsCard";
import ShowDirectionsButton from "../../components/ui/ShowDirectionsButton";
import UploadPhotoButton from "../../components/ui/UploadPhotoButton";
import FeedbackComponent from "../../components/ui/FeedbackComponent";
import CompleteDeliveryButton from "../../components/ui/CompleteDeliveryButton";
import { useParams } from "react-router-dom";
import { orders } from "../../data/ordersData";

const OrderDetailsPage: React.FC = () => {
  const { id } = useParams();

  const selectedOrder = orders.find((order) => order.orderDetails.id === id);

  return (
    <div>
      <OrderDetailsCard
        id={selectedOrder?.orderDetails.id ?? ""}
        clientName={selectedOrder?.orderDetails.clientName ?? ""}
        addressLine1={selectedOrder?.orderDetails.addressLine1 ?? ""}
        addressLine2={selectedOrder?.orderDetails.addressLine2 ?? ""}
        numberOfPackages={selectedOrder?.orderDetails.numberOfPackages ?? 0}
        clientNote={selectedOrder?.orderDetails.clientNote ?? ""}
      />
      <ShowDirectionsButton />
      <UploadPhotoButton />
      <FeedbackComponent />
      <CompleteDeliveryButton />
    </div>
  );
};

export default OrderDetailsPage;
