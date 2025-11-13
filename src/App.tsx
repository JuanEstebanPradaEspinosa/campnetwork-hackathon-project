import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import GalleryView from "./pages/GalleryView";
import SettingsConnect from "./pages/SettingsConnect";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/gallery" element={<GalleryView />} />
          <Route path="/settings" element={<SettingsConnect />} />
        </Routes>
      </main>
      <footer className="border-t border-orange-200/40 py-6 text-center text-sm text-gray-500">
        Built for the Hackathon • Camp Network
      </footer>
    </div>
  );
}

export default App;
