import { Routes, Route } from "react-router-dom";

import GuidePage from "@/pages/GuidePage";
import GuideThanksPage from "@/pages/GuideThanksPage";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/guide/thanks" element={<GuideThanksPage />} />
    </Routes>
  );
}
