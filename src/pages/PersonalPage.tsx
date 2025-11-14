import { useState } from "react";
import Section from "../components/Section";
import { useAuth } from "@campnetwork/origin/react";

function PersonalPage() {
  const auth = useAuth();
  const { origin, jwt } = auth;

  const [uploads, setUploads] = useState<string>("");
  const [usage, setUsage] = useState<string>("");
  const [consentStatus, setConsentStatus] = useState<string>("");
  const [jwtDisplay, setJwtDisplay] = useState<string>(jwt ?? "");

  const getUploads = async () => {
    try {
      if (!origin) {
        setUploads("Origin not available.");
        return;
      }
      const res = await origin.getOriginUploads();
      setUploads(JSON.stringify(res, null, 2));
    } catch (e) {
      setUploads(e instanceof Error ? e.message : "Failed to fetch uploads");
    }
  };

  const getUsage = async () => {
    try {
      if (!origin) {
        setUsage("Origin not available.");
        return;
      }
      const res = await origin.getOriginUsage();
      setUsage(JSON.stringify(res, null, 2));
    } catch (e) {
      setUsage(e instanceof Error ? e.message : "Failed to fetch usage");
    }
  };

  const setConsent = async (consent: boolean) => {
    try {
      if (!origin) {
        setConsentStatus("Origin not available.");
        return;
      }
      await origin.setOriginConsent(consent);
      setConsentStatus(`Consent set to ${consent}`);
    } catch (e) {
      setConsentStatus(
        e instanceof Error ? e.message : "Failed to set consent"
      );
    }
  };

  const fetchJwt = async () => {
    try {
      // Prefer live getJwt if available
      const token =
        auth.origin && typeof auth.origin.getJwt === "function"
          ? await auth.origin.getJwt()
          : jwt;
      setJwtDisplay(token ?? "");
    } catch (e) {
      setJwtDisplay(e instanceof Error ? e.message : "Failed to get JWT");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Personal Data & Usage
        </h1>
        <p className="mt-3 text-gray-700">
          Retrieve uploads, usage stats, manage consent, and view your JWT.
        </p>
      </div>

      <Section className="max-w-3xl">
        <div className="text-sm font-semibold text-gray-900">
          Origin Uploads
        </div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={getUploads}
            className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
          >
            Fetch Uploads
          </button>
        </div>
        {uploads && (
          <pre className="mt-3 max-h-80 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-800">
            {uploads}
          </pre>
        )}
      </Section>

      <Section className="max-w-3xl">
        <div className="text-sm font-semibold text-gray-900">Origin Usage</div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={getUsage}
            className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
          >
            Fetch Usage
          </button>
        </div>
        {usage && (
          <pre className="mt-3 max-h-80 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-800">
            {usage}
          </pre>
        )}
      </Section>

      <Section className="max-w-3xl">
        <div className="text-sm font-semibold text-gray-900">Consent</div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setConsent(true)}
            className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
          >
            Allow
          </button>
          <button
            onClick={() => setConsent(false)}
            className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-200"
          >
            Revoke
          </button>
        </div>
        {consentStatus && (
          <div className="mt-3 text-sm text-gray-700">{consentStatus}</div>
        )}
      </Section>

      <Section className="max-w-3xl">
        <div className="text-sm font-semibold text-gray-900">JWT</div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={fetchJwt}
            className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
          >
            Get JWT
          </button>
        </div>
        {jwtDisplay && (
          <pre className="mt-3 max-h-80 overflow-auto rounded-md bg-gray-50 p-3 text-xs text-gray-800">
            {jwtDisplay}
          </pre>
        )}
      </Section>
    </div>
  );
}

export default PersonalPage;
