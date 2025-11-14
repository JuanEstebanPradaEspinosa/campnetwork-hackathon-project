import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CampProvider } from "@campnetwork/origin/react";
import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CampProvider
          clientId={import.meta.env.VITE_ORIGIN_CLIENT_ID}
          environment="DEVELOPMENT"
        >
          <App />
        </CampProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);

// TODO: Start an project or let them clone an repository and do an npm install for having all of the dependencies installed.
// TODO: Have the empty and the filled project in the repository.
// TODO: Explain to them how to add the Campprovider and the Campmodal in the App.tsx file.

// TODO  Explain to them how to link the social media accounts to the Campmodal.
// TODO: Explain to them how to mint an file with license on the blockchain.
// TODO: Explain how to mint an Spotify track or x twitter post

// TODO: See how the user is able to authenticate and how to set it up

// TODO: See how to access to the Marketplace to buy or see subscription
// TODO: how to get or claim royalties from the marketplace

// TODO: How to have access ip after buying or having sub for access to the content
// TODO: Have access to get your own data & Stats of your content
