import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import GalleryView from "./pages/GalleryView";
import SettingsConnect from "./pages/SettingsConnect";
import ProviderSetup from "./pages/ProviderSetup";
import SocialsPage from "./pages/SocialsPage";
import MintingPage from "./pages/MintingPage";
import IpNftMarketplace from "./pages/IpNftMarketplace";
import PersonalPage from "./pages/PersonalPage";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/gallery" element={<GalleryView />} />
          <Route path="/settings" element={<SettingsConnect />} />
          <Route path="/provider" element={<ProviderSetup />} />
          <Route path="/socials" element={<SocialsPage />} />
          <Route path="/mint" element={<MintingPage />} />
          <Route path="/ipmarket" element={<IpNftMarketplace />} />
          <Route path="/personal" element={<PersonalPage />} />
        </Routes>
      </main>
      <footer className="border-t border-orange-200/40 py-6 text-center text-sm text-gray-500">
        Built for the Hackathon • Camp Network
      </footer>
    </div>
  );
}

export default App;
