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
import Admin from "./components/admin/admin";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
