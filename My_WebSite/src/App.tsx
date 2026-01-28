import { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router";

import SectionHeader from "./components/SectionHeader.tsx";
import SectionFooter from "./components/SectionFooter.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SectionHeader />
      <main className="grow">
        <Outlet />
      </main>
      <SectionFooter />
    </div>
  );
}

export default App;
