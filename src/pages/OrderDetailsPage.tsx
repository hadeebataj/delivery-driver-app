import React from "react";
import OrderDetailsCard from "../components/ui/OrderDetailsCard";
import ShowDirectionsButton from "../components/ui/ShowDirectionsButton";
import UploadPhotoButton from "../components/ui/UploadPhotoButton";
import FeedbackComponent from "../components/ui/FeedbackComponent";
import CompleteDeliveryButton from "../components/ui/CompleteDeliveryButton";

const OrderDetailsPage: React.FC = () => {
  return (
    <div>
      <OrderDetailsCard />
      <ShowDirectionsButton />
      <UploadPhotoButton />
      <FeedbackComponent />
      <CompleteDeliveryButton />
    </div>
  );
};

export default OrderDetailsPage;
