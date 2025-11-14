import { useAuth } from "@campnetwork/origin/react";
import { assignImage } from "../utils/assignImage";
import type { Address } from "viem";

export type LicenseTerms = {
  price: bigint;
  duration: number;
  royaltyBps: number;
  paymentToken: Address;
};

interface MintButtonProps {
  file: File;
  imageId: string;
  meta: Record<string, string>;
}

export default function MintButton({ file, imageId, meta }: MintButtonProps) {
  const { origin, jwt } = useAuth();

  const handleMint = async () => {
    if (!origin || !jwt) throw new Error("User not authenticated");

    const licence = {
      price: 0n,
      duration: 0,
      royaltyBps: 0,
      paymentToken: "0x0000000000000000000000000000000000000000",
    } as LicenseTerms;

    const parentId = [4n]; // optional: define if this is a derivative
    await origin.mintFile(file, meta, licence, parentId);
    await assignImage(imageId, jwt);
  };

  return <button onClick={handleMint}>Mint NFT</button>;
}
