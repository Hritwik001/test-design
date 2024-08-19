import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Insurance from "./pages/Insurance";
import Operations from "./pages/Operations";
import ESG from "./pages/ESG";
import Root from "./pages/Root";
import Root1 from "./pages/Root1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/operations":
        title = "";
        metaDescription = "";
        break;
      case "/esg":
        title = "";
        metaDescription = "";
        break;
      case "/root":
        title = "";
        metaDescription = "";
        break;
      case "/root1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Insurance />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/esg" element={<ESG />} />
      <Route path="/root" element={<Root />} />
      <Route path="/root1" element={<Root1 />} />
    </Routes>
  );
}
export default App;
