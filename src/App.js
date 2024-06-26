import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Registerpage";
import Listing from "./components/Listing/Listing";
import Signup from "./components/AuthComponents/Signup";
import { useHistory } from "react-router-dom";
import Forgotpassword from "./components/AuthComponents/Forgotpassword";
import Checkout from "./pages/Checkout";

import AcceptedProjects from "./pages/DashBoard/AcceptedProjects";
import OngoingProjects from "./pages/DashBoard/OngoingProjects";

const Home = lazy(() => import("./pages/Home"));


const Projects = lazy(() => import("./pages/Projects"));
const Cart = lazy(() => import("./pages/Cart"));

const Signin = lazy(() => import("./components/AuthComponents/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const DashBoard = lazy(() => import("./pages/DashBoard/DashBoard"));

const Registerpage = lazy(() => import("./pages/Registerpage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/projects" element={<Projects />} />
          <Route path="/my-projects" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/DashBoard" element={<DashBoard />} />

          <Route path="/accepted-projects" element={<AcceptedProjects />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
