import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import MainPage from "./components/pages/Main/MainPage";
import PolicyPage from "./components/pages/Policy/PolicyPage";

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
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/PolicyPage" element={<PolicyPage />} />
    </Routes>
  );
}
export default App;
