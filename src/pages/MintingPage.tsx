import { useState } from "react";
import Section from "../components/Section";
import { useAuth } from "@campnetwork/origin/react";
import { zeroAddress, type Address } from "viem";

type SocialSource = "spotify" | "twitter" | "tiktok";

function MintingPage() {
  const { origin } = useAuth();

  // File mint states
  const [file, setFile] = useState<File | null>(null);
  const [ipName, setIpName] = useState<string>("");
  const [ipDescription, setIpDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [parentsInput, setParentsInput] = useState<string>("");
  const [priceWei, setPriceWei] = useState<string>("1000000000000000");
  const [durationSec, setDurationSec] = useState<number>(86400);
  const [royaltyBps, setRoyaltyBps] = useState<number>(1000);
  const [paymentToken, setPaymentToken] = useState<Address>(zeroAddress);
  const [mintingStatus, setMintingStatus] = useState<string>("");
  const [mintedId, setMintedId] = useState<string>("");

  // Social mint states
  const [socialSource, setSocialSource] = useState<SocialSource>("twitter");
  const [socialName, setSocialName] = useState<string>("");
  const [socialDesc, setSocialDesc] = useState<string>("");
  const [socialStatus, setSocialStatus] = useState<string>("");
  const [socialMintedId, setSocialMintedId] = useState<string>("");

  const handleMintFile = async () => {
    try {
      if (!origin) {
        setMintingStatus(
          "Origin not available. Authenticate and set viem client first."
        );
        return;
      }
      if (!file) {
        setMintingStatus("Please choose a file.");
        return;
      }
      setMintingStatus("Creating license...");
      const license = {
        price: BigInt(priceWei),
        duration: durationSec,
        royaltyBps,
        paymentToken,
      };
      const metadata = {
        name: ipName || "Untitled",
        description: ipDescription || "",
        image: imageUrl || undefined,
        attributes: [] as Array<{ trait_type: string; value: string }>,
      };
      const parents =
        parentsInput
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((s) => BigInt(s)) || undefined;

      setMintingStatus("Uploading file and minting IpNFT...");
      const tokenId = await origin.mintFile(file, metadata, license, parents);
      setMintedId(tokenId ?? "");
      setMintingStatus("Minted successfully.");
    } catch (e) {
      setMintingStatus(e instanceof Error ? e.message : "Mint failed");
    }
  };

  const handleMintSocial = async () => {
    try {
      if (!origin) {
        setSocialStatus(
          "Origin not available. Authenticate and set viem client first."
        );
        return;
      }
      setSocialStatus("Creating license...");
      const license = {
        price: BigInt(priceWei),
        duration: durationSec,
        royaltyBps,
        paymentToken,
      };
      const metadata = {
        name: socialName || "My Social Asset",
        description: socialDesc || "",
        attributes: [] as Array<{ trait_type: string; value: string }>,
      };

      setSocialStatus("Minting social IpNFT...");
      const tokenId = await origin.mintSocial(socialSource, metadata, license);
      setSocialMintedId(tokenId ?? "");
      setSocialStatus("Minted successfully.");
    } catch (e) {
      setSocialStatus(e instanceof Error ? e.message : "Mint failed");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Mint IP Assets
        </h1>
        <p className="mt-3 text-gray-700">
          Mint files or connected social accounts as IpNFTs with validated
          license terms.
        </p>
      </div>

      <Section className="max-w-4xl">
        <div className="text-sm font-semibold text-gray-900">License Terms</div>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="text-sm text-gray-700">
            Price (wei)
            <input
              value={priceWei}
              onChange={(e) => setPriceWei(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700">
            Duration (seconds)
            <input
              type="number"
              value={durationSec}
              onChange={(e) => setDurationSec(Number(e.target.value))}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700">
            Royalty (bps)
            <input
              type="number"
              value={royaltyBps}
              onChange={(e) => setRoyaltyBps(Number(e.target.value))}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700">
            Payment Token
            <input
              value={paymentToken}
              onChange={(e) => setPaymentToken(e.target.value as Address)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
              placeholder={zeroAddress}
            />
          </label>
        </div>
      </Section>

      <Section className="max-w-4xl">
        <div className="text-sm font-semibold text-gray-900">Mint File</div>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="text-sm text-gray-700">
            File
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700">
            Name
            <input
              value={ipName}
              onChange={(e) => setIpName(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700 sm:col-span-2">
            Description
            <input
              value={ipDescription}
              onChange={(e) => setIpDescription(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700 sm:col-span-2">
            Image URL (optional)
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700 sm:col-span-2">
            Parent Token IDs (comma-separated, optional)
            <input
              value={parentsInput}
              onChange={(e) => setParentsInput(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="e.g. 123,456"
            />
          </label>
        </div>
        <div className="mt-4">
          <button
            onClick={handleMintFile}
            className="rounded-md bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600"
          >
            Mint File
          </button>
          {mintingStatus && (
            <div className="mt-3 text-sm text-gray-700">{mintingStatus}</div>
          )}
          {mintedId && (
            <div className="mt-1 text-sm text-gray-900">
              Minted Token ID: <span className="font-semibold">{mintedId}</span>
            </div>
          )}
        </div>
      </Section>

      <Section className="max-w-4xl">
        <div className="text-sm font-semibold text-gray-900">Mint Social</div>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="text-sm text-gray-700">
            Source
            <select
              value={socialSource}
              onChange={(e) => setSocialSource(e.target.value as SocialSource)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="twitter">Twitter</option>
              <option value="spotify">Spotify</option>
              <option value="tiktok">Tiktok</option>
            </select>
          </label>
          <label className="text-sm text-gray-700">
            Name
            <input
              value={socialName}
              onChange={(e) => setSocialName(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
          <label className="text-sm text-gray-700 sm:col-span-2">
            Description
            <input
              value={socialDesc}
              onChange={(e) => setSocialDesc(e.target.value)}
              className="mt-1 w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </label>
        </div>
        <div className="mt-4">
          <button
            onClick={handleMintSocial}
            className="rounded-md bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600"
          >
            Mint Social
          </button>
          {socialStatus && (
            <div className="mt-3 text-sm text-gray-700">{socialStatus}</div>
          )}
          {socialMintedId && (
            <div className="mt-1 text-sm text-gray-900">
              Minted Token ID:{" "}
              <span className="font-semibold">{socialMintedId}</span>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

export default MintingPage;
