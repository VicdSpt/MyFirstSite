import "./App.css";
import { Outlet } from "react-router";

import SectionHeader from "./components/SectionHeader.tsx";
import SectionFooter from "./components/SectionFooter.tsx";

function App() {
  return (
    <>
      <SectionHeader />
      <main>
        <Outlet />
      </main>
      <SectionFooter />
    </>
  );
}

export default App;
