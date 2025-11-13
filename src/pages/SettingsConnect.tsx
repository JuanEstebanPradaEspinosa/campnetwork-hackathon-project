import Section from "../components/Section";
import { CampButton } from "@campnetwork/origin/react";

function SettingsConnect() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Settings & Connect
        </h1>
        <p className="mt-3 text-gray-700">
          Manage your connection and future integrations. This is a scaffold –
          wire actual actions later.
        </p>
      </div>

      <Section className="w-full">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-orange-200/60 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Connect with Camp
            </div>
            <p className="mt-1 text-sm text-gray-600">
              Placeholder for CampModal-based auth. For now, use the Camp button
              in the navbar.
            </p>
            <div className="mt-3">
              <CampButton />
            </div>
          </div>

          <div className="rounded-xl border border-orange-200/60 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">Link API</div>
            <p className="mt-1 text-sm text-gray-600">
              Configure API keys and webhooks. UI only; no backend wiring yet.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Your API key"
                className="w-full rounded-md border border-orange-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="rounded-md bg-orange-500 px-3 py-2 text-white shadow hover:bg-orange-600">
                Save
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-orange-200/60 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">Mint</div>
            <p className="mt-1 text-sm text-gray-600">
              Add UI to mint assets (tracks, posts, files) with licenses.
              Actions here are placeholders.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50">
                Mint File
              </button>
              <button className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50">
                Mint Spotify Track
              </button>
              <button className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50">
                Mint X Post
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default SettingsConnect;
