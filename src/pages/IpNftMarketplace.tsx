import { useState } from "react";
import Section from "../components/Section";
import { useAuth } from "@campnetwork/origin/react";

function IpNftMarketplace() {
  const { origin, walletAddress } = useAuth();

  const [tokenId, setTokenId] = useState<bigint>(0n);
  const [actionStatus, setActionStatus] = useState<string>("");
  const [hasAccessResult, setHasAccessResult] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [dataPreview, setDataPreview] = useState<string>("");
  const [royaltiesInfo, setRoyaltiesInfo] = useState<string>("");

  const buyAccess = async () => {
    try {
      if (!origin) {
        setActionStatus("Origin not available.");
        return;
      }
      setActionStatus("Buying access via smart flow...");
      await origin.buyAccessSmart(tokenId);
      setActionStatus("Access purchased.");
    } catch (e) {
      setActionStatus(e instanceof Error ? e.message : "Failed to buy access");
    }
  };

  const checkAccess = async () => {
    try {
      if (!origin || !walletAddress) {
        setHasAccessResult("Origin or wallet not available.");
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ok = await (origin as any).hasAccess(tokenId, walletAddress);
      setHasAccessResult(ok ? "Has access" : "No access");
    } catch (e) {
      setHasAccessResult(
        e instanceof Error ? e.message : "Failed to check access"
      );
    }
  };

  const readExpiry = async () => {
    try {
      if (!origin || !walletAddress) {
        setExpiry("Origin or wallet not available.");
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ts = await (origin as any).subscriptionExpiry(
        tokenId,
        walletAddress
      );
      setExpiry(String(ts));
    } catch (e) {
      setExpiry(e instanceof Error ? e.message : "Failed to read expiry");
    }
  };

  const fetchData = async () => {
    try {
      if (!origin) {
        setDataPreview("Origin not available.");
        return;
      }
      const data = await origin.getData(tokenId);
      setDataPreview(JSON.stringify(data, null, 2));
    } catch (e) {
      setDataPreview(e instanceof Error ? e.message : "Failed to fetch data");
    }
  };

  const readRoyalties = async () => {
    try {
      if (!origin) {
        setRoyaltiesInfo("Origin not available.");
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const r = await (origin as any).getRoyalties(
        tokenId ? tokenId : undefined,
        walletAddress
      );
      setRoyaltiesInfo(JSON.stringify(r, null, 2));
    } catch (e) {
      setRoyaltiesInfo(
        e instanceof Error ? e.message : "Failed to get royalties"
      );
    }
  };

  const claimRoyalties = async () => {
    try {
      if (!origin) {
        setActionStatus("Origin not available.");
        return;
      }
      setActionStatus("Claiming royalties...");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (origin as any).claimRoyalties(
        tokenId ? tokenId : undefined,
        walletAddress
      );
      setActionStatus("Royalties claimed (if available).");
    } catch (e) {
      setActionStatus(
        e instanceof Error ? e.message : "Failed to claim royalties"
      );
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          IpNFT & Marketplace
        </h1>
        <p className="mt-3 text-gray-700">
          Buy access, check access and expiry, read underlying data, and manage
          royalties.
        </p>
      </div>

      <Section className="max-w-3xl">
        <div className="text-sm font-semibold text-gray-900">Token</div>
        <input
          value={tokenId.toString()}
          onChange={(e) => setTokenId(BigInt(e.target.value))}
          placeholder="Token ID"
          className="mt-2 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={buyAccess}
            className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
          >
            Buy Access (Smart)
          </button>
          <button
            onClick={checkAccess}
            className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
          >
            Has Access?
          </button>
          <button
            onClick={readExpiry}
            className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
          >
            Subscription Expiry
          </button>
          <button
            onClick={fetchData}
            className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
          >
            Get Data
          </button>
          <button
            onClick={readRoyalties}
            className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
          >
            Get Royalties
          </button>
          <button
            onClick={claimRoyalties}
            className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-200"
          >
            Claim Royalties
          </button>
        </div>

        {actionStatus && (
          <div className="mt-3 text-sm text-gray-700">{actionStatus}</div>
        )}
        {hasAccessResult && (
          <div className="mt-1 text-sm text-gray-900">{hasAccessResult}</div>
        )}
        {expiry && (
          <div className="mt-1 text-sm text-gray-900">Expiry: {expiry}</div>
        )}

        {dataPreview && (
          <pre className="mt-4 max-h-80 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-800">
            {dataPreview}
          </pre>
        )}

        {royaltiesInfo && (
          <pre className="mt-4 max-h-80 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-800">
            {royaltiesInfo}
          </pre>
        )}
      </Section>
    </div>
  );
}

export default IpNftMarketplace;
