import "./App.css";
import { Outlet } from "react-router";

import SectionHeader from "./components/SectionHeader.tsx";
import SectionFooter from "./components/SectionFooter.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SectionHeader />
      <main className="grow">
        <Outlet />
      </main>
      <SectionFooter />
    </div>
  );
}

export default App;
