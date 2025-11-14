import { useCallback, useMemo, useState } from "react";
import Section from "../components/Section";
import { useAuth, useAuthState } from "@campnetwork/origin/react";
// import { campMainnet, campTestnet } from "@campnetwork/origin";

function ProviderSetup() {
  const auth = useAuth();
  const { authenticated } = useAuthState();
  const [status, setStatus] = useState<string>("");
  const [selectedChain, setSelectedChain] = useState<"testnet" | "mainnet">(
    "testnet"
  );

  const chain = useMemo(() => {
    //return selectedChain === "mainnet" ? campMainnet : campTestnet;
  }, [selectedChain]);

  const initViemClient = useCallback(async () => {
    try {
      setStatus("Initializing wallet client...");
      if (typeof window === "undefined" || !(window as any).ethereum) {
        setStatus("No wallet provider found. Please install a wallet.");
        return;
      }
      // const walletClient = createWalletClient({
      //   chain,
      //   transport: custom((window as any).ethereum),
      // });

      if (!auth.origin) {
        setStatus("Origin not available.");
        return;
      }
      //await auth.origin.setViemClient(walletClient);
      setStatus(
        "Viem client set on Origin Auth. You can now use onchain methods."
      );
    } catch (err) {
      setStatus(
        err instanceof Error ? err.message : "Failed to initialize viem client"
      );
    }
  }, [auth, chain]);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Origin Provider & Viem Setup
        </h1>
        <p className="mt-3 text-gray-700">
          Initialize a viem wallet client and register it with Origin&apos;s
          Auth to enable minting and marketplace actions.
        </p>
      </div>

      <Section className="max-w-2xl">
        <div className="text-sm font-semibold text-gray-900">Select Chain</div>
        <div className="mt-2 flex gap-3">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="chain"
              value="testnet"
              checked={selectedChain === "testnet"}
              onChange={() => setSelectedChain("testnet")}
            />
            <span className="text-sm">Camp Testnet</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="chain"
              value="mainnet"
              checked={selectedChain === "mainnet"}
              onChange={() => setSelectedChain("mainnet")}
            />
            <span className="text-sm">Camp Mainnet</span>
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={initViemClient}
            className="rounded-md bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600"
          >
            Initialize Viem Client
          </button>
          <span className="text-sm text-gray-600">
            {authenticated ? "Authenticated" : "Not authenticated"}
          </span>
        </div>
        {status && <div className="mt-3 text-sm text-gray-700">{status}</div>}

        <div className="mt-6 rounded-lg border border-orange-200/60 bg-orange-50 p-4 text-sm text-gray-800">
          CampProvider is already set in <code>src/main.tsx</code>. This page
          helps bind your wallet to Origin via viem. After initializing, you can
          mint and interact with the marketplace.
        </div>
      </Section>
    </div>
  );
}

export default ProviderSetup;
