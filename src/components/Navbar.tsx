import { NavLink } from "react-router-dom";
import { CampModal } from "@campnetwork/origin/react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-orange-200/40 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-orange-600 text-white shadow">
            CN
          </div>
          <span className="text-lg font-semibold text-gray-900">
            Camp Network
          </span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`
            }
            end
          >
            Welcome
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`
            }
          >
            Settings
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <CampModal />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { useModal, useWallet } from "@getpara/react-sdk";
// import { truncate } from "../utils/utils";
// import { useAuthState } from "@campnetwork/origin/react";

// // Reusable button component
// const NavButton = ({
//   children,
//   onClick,
// }: {
//   children?: React.ReactNode;
//   onClick: () => void;
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="px-4 py-2 bg-[#F6F0E3]/15 border border-[#4C4536CC] text-[#4C4536] backdrop-blur-sm hover:bg-[#F6F0E3]/25 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
//     >
//       {children}
//     </button>
//   );
// };

// const Navbar: React.FC<{
//   galleryView: boolean;
//   onGalleryToggle: (isRemix: boolean) => void;
// }> = ({ galleryView, onGalleryToggle }) => {
//   const { openModal } = useModal();
//   const { data: wallet } = useWallet();
//   const { authenticated } = useAuthState();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-4 md:px-16 py-4 md:py-8 fixed w-full top-0 z-50 bg-white/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none">
//       <button
//         className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10"
//         aria-label="Toggle menu"
//         onClick={() => setMenuOpen((open) => !open)}
//       >
//         <span
//           className={`block w-6 h-0.5 bg-[#4C4536] mb-1 transition-all duration-300 ${
//             menuOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         ></span>
//         <span
//           className={`block w-6 h-0.5 bg-[#4C4536] mb-1 transition-all duration-300 ${
//             menuOpen ? "opacity-0" : ""
//           }`}
//         ></span>
//         <span
//           className={`block w-6 h-0.5 bg-[#4C4536] transition-all duration-300 ${
//             menuOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         ></span>
//       </button>

//       <div className="hidden md:flex gap-6 items-center">
//         <div className="flex flex-col items-center gap-2">
//           <NavButton onClick={() => onGalleryToggle(true)}>Gallery</NavButton>
//         </div>
//         <div className="relative">
//           <NavButton onClick={() => onGalleryToggle(false)}>Remix</NavButton>
//         </div>

//         <div className="relative">
//           <NavButton
//             onClick={() => {
//               openModal();
//             }}
//           >
//             {wallet?.address ? (
//               <span className="text-[#4C4536]">{truncate(wallet.address)}</span>
//             ) : (
//               <>Connect</>
//             )}
//           </NavButton>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white/50 shadow-lg flex flex-col items-center gap-4 py-4 md:hidden animate-fade-in z-50">
//           <NavButton
//             onClick={() => {
//               onGalleryToggle(false);
//               setMenuOpen(false);
//             }}
//           >
//             Gallery
//           </NavButton>
//           <NavButton
//             onClick={() => {
//               onGalleryToggle(true);
//               setMenuOpen(false);
//             }}
//           >
//             Remix
//           </NavButton>
//           <NavButton
//             onClick={() => {
//               openModal();
//               setMenuOpen(false);
//             }}
//           >
//             {wallet?.address ? (
//               <span className="text-[#4C4536]">{truncate(wallet.address)}</span>
//             ) : (
//               <>Connect</>
//             )}
//           </NavButton>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
