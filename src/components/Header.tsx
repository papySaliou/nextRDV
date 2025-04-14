'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full ">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="RendezVous+" className="w-24 h-auto" />
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:space-x-6 font-light text-lg">
          <Link href="/" className="hover:text-[#1998D3]">Accueil</Link>
          <Link href="/mes-rendezvous" className="hover:text-[#1998D3]">Mes rendez-vous</Link>
          <Link href="/mon-compte" className="hover:text-[#1998D3]">Mon compte</Link>
          <Link href="/a-propos" className="hover:text-[#1998D3]">A Propos</Link>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/connexion">
            <button className="rounded bg-black px-4 py-2 text-white">Connexion</button>
          </Link>
          <Link href="/inscription">
            <button className="rounded bg-[#1998D3] px-4 py-2 text-white hover:bg-[#1478A6]">Inscription</button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg font-light">
          <Link href="/" className="block hover:text-[#1998D3]">Accueil</Link>
          <Link href="/mes-rendezvous" className="block hover:text-[#1998D3]">Mes rendez-vous</Link>
          <Link href="/mon-compte" className="block hover:text-[#1998D3]">Mon compte</Link>
          <Link href="/inscription" className="block">
            <button className="w-full rounded bg-black py-2 text-white mt-2">Connexion</button>
          </Link>
          <Link href="/inscription" className="block">
            <button className="w-full rounded bg-[#1998D3] py-2 text-white hover:bg-[#1478A6]">Inscription</button>
          </Link>
        </div>
      )}
    </header>
  );
}



// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="">
//       <nav className=" px-5 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/logo.png" alt="RendezVous+" className="w-30 h-30" />
//         </div>

//         {/* Hamburger menu (mobile) */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop nav */}
//         <div className="hidden md:flex md:items-center md:space-x-6 font-light text-lg">
//           <Link href="/" className="hover:text-[#1998D3]">Accueil</Link>
//           <Link href="/mes-rendezvous" className="hover:text-[#1998D3]">Mes rendez-vous</Link>
//           <Link href="/mon-compte" className="hover:text-[#1998D3]">Mon compte</Link>
//         </div>

//         {/* Desktop buttons */}
//         <div className="hidden md:flex space-x-8 px-10">
//           <Link href="/inscription">
//             <button className="rounded bg-black px-4 py-2 text-white">Connexion</button>
//           </Link>
//           <Link href="/inscription">
//             <button className="rounded bg-[#1998D3] px-4 py-2 text-white hover:bg-[#1478A6]">Inscription</button>
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden  pb-4 space-y-2 text-lg font-light">
//           <Link href="/" className="block hover:text-[#1998D3]">Accueil</Link>
//           <Link href="/mes-rendezvous" className="block hover:text-[#1998D3]">Mes rendez-vous</Link>
//           <Link href="/mon-compte" className="block hover:text-[#1998D3]">Mon compte</Link>
//           <Link href="/inscription" className="block">
//             <button className="w-full rounded bg-black  py-2 text-white mt-2">Connexion</button>
//           </Link>
//           <Link href="/inscription" className="block">
//             <button className="w-full rounded bg-[#1998D3]  py-2 text-white hover:bg-[#1478A6]">Inscription</button>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
