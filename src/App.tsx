import "./App.css";
import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/ui/BottomNav";
import Logo from "./components/ui/Logo";
import FeedbacksListPage from "./pages/feedbacks/FeedbacksListPage";
import OrderDetailsPage from "./pages/orders/OrderDetailsPage";

import OrderListPage from "./pages/orders/OrderListPage";

const App: React.FC = () => {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/driver/orders" element={<OrderListPage />} />
        <Route path={"/driver/orders/:id"} element={<OrderDetailsPage />} />
        <Route path="/driver/feedbacks" element={<FeedbacksListPage />} />
      </Routes>
      <BottomNav />
    </>
  );
};

export default App;
