import Section from "../components/Section";
import { CampModal, useLinkModal } from "@campnetwork/origin/react";
import { useState } from "react";

function SocialsPage() {
  const {
    isLinkingOpen,
    // openTwitterModal,
    // openSpotifyModal,
    // openTiktokModal,
    // linkTwitter,
    // linkSpotify,
    // linkTiktok,
    // linkTelegram,
    // unlinkTwitter,
    // unlinkSpotify,
    // unlinkTiktok,
    closeModal,
  } = useLinkModal();

  const [info, setInfo] = useState<string>("");

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Manage Social Connections
        </h1>
        <p className="mt-3 text-gray-700">
          Open modals to link or unlink Twitter, Spotify, Tiktok, or link
          Telegram directly.
        </p>
      </div>

      <Section className="max-w-3xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-orange-200/60 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">Twitter</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                // onClick={() => openTwitterModal(true)}
                className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
              >
                Open Modal
              </button>
              <button
                // onClick={() => linkTwitter()}
                className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
              >
                Link
              </button>
              <button
                // onClick={() => unlinkTwitter()}
                className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-200"
              >
                Unlink
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-orange-200/60 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">Spotify</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                // onClick={openSpotifyModal}
                className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
              >
                Open Modal
              </button>
              <button
                // onClick={() => linkSpotify()}
                className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
              >
                Link
              </button>
              <button
                // onClick={() => unlinkSpotify()}
                className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-200"
              >
                Unlink
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-orange-200/60 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">Tiktok</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                // onClick={openTiktokModal}
                className="rounded-md border border-orange-300 bg-white px-3 py-2 text-orange-700 hover:bg-orange-50"
              >
                Open Modal
              </button>
              <button
                // onClick={() => linkTiktok()}
                className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
              >
                Link
              </button>
              <button
                // onClick={() => unlinkTiktok()}
                className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-200"
              >
                Unlink
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-orange-200/60 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">Telegram</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={async () => {
                  try {
                    //  await linkTelegram();
                    setInfo("Telegram linked (if available).");
                  } catch (e) {
                    setInfo(
                      e instanceof Error ? e.message : "Failed to link Telegram"
                    );
                  }
                }}
                className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
              >
                Link Telegram
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-sm text-gray-700">
            Modal open: {isLinkingOpen ? "Yes" : "No"}
          </span>
          {isLinkingOpen && (
            <button
              onClick={closeModal}
              className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 hover:bg-gray-200"
            >
              Close Modal
            </button>
          )}
        </div>

        {info && <div className="mt-3 text-sm text-gray-700">{info}</div>}
      </Section>

      {/* Render modal to ensure portal mounts in this page context as well */}
      <div className="mx-auto">
        <CampModal />
      </div>
    </div>
  );
}

export default SocialsPage;
