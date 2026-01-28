import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import Blog from "./components/Blog";
import FAQs from "./components/FAQs";
import HireMe from "./components/HireMe";
import ViewWork from "./components/ViewWork";
import Projects from "./components/ExploreWork";
import SelectedProjects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import BookOrder from "./components/BookNow";

import AdminLogin from "./components/admin/adminlogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import OrderDetails from "./components/admin/utilities/OrderDeatils";

import ProtectedRoute from "./routes/ProtectedRoute";
import FormDetails from "./components/admin/utilities/FormDeatisl";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/view-work" element={<ViewWork />} />
        <Route path="/explore-work" element={<Projects />} />
        <Route path="/projects" element={<SelectedProjects />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/book-order" element={<BookOrder />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 🔐 Admin Protected + Nested */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="orders" element={<OrderDetails />} />
          <Route path="forms" element={<FormDetails/>}/>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
