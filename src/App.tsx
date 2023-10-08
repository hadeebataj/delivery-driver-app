import "./App.css";
import BottomNav from "./components/ui/BottomNav";
import Logo from "./components/ui/Logo";
import FeedbacksListPage from "./pages/FeedbacksListPage";
// import OrderDetailsPage from "./pages/OrderDetailsPage";

// import OrderListPage from "./pages/OrderListPage";

const App: React.FC = () => {
  return (
    <>
      <Logo />
      {/* <OrderListPage /> */}
      {/* <OrderDetailsPage /> */}
      <FeedbacksListPage />
      <BottomNav />
    </>
  );
};

export default App;
