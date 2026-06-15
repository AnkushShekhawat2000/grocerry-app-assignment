import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/auth/SplashPage";
import OnboardingPage from "./pages/auth/OnboardingPage";
import SingIn from "./pages/auth/SingInPage";
import MobileNumberPage from "./pages/auth/MobileNumberPage";
import OtpPage from "./pages/auth/OtpPage";
import LocationPage from "./pages/auth/LocationPage";
import LoginPage from "./pages/auth/LoginPage";
import SingupPage from "./pages/auth/SingupPage";
import DashBoardPage from "./pages/home/DashBoardPage";
import ExplorePage from "./pages/explore/ExplorePage.tsx";
import Cart from "./pages/cart/cart.tsx";
import Favourite from "./pages/favourite/favourite.tsx";
import MainLayout from "./components/MainLayout.tsx";
import ProductDetailPage from "./pages/product/productDetailPage.tsx";
import ProductOrderSuccessPage from "./pages/product/productOrderSuccessPage.tsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/loginwithNumber" element={<MobileNumberPage />} />
          <Route path="/verification" element={<OtpPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingupPage />} />

          <Route element={<MainLayout />}>
            <Route path="/home" element={<DashBoardPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/account" element={<h1>Account Page</h1>} />
            <Route
              path="/order-success"
              element={<ProductOrderSuccessPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
