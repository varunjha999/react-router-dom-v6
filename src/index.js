import ReactDom from "react-dom/client";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import "./App.css";

export default function App()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />}  />

        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);