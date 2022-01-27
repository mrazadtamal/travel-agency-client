import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AddBlog from "./components/AddBlog";
import SingelBlog from "./components/Blog/SingelBlog";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import Signup from "./components/Signup";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/blog/:id" element={<SingelBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
