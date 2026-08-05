// "use client";

// export default function Buttons({
//   children,
//   href = "#",
//   variant = "primary",
// }) {
//   const baseClass = `
//     group
//     relative
//     overflow-hidden
//     rounded-xl
//     px-7
//     py-3
//     font-semibold
//     transition-all
//     duration-300
//     hover:scale-105
//   `;

//   const variants = {
//     primary: `
//       bg-gradient-to-r
//       from-purple-600
//       to-fuchsia-600
//       text-white
//       hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]
//     `,

//     secondary: `
//       border
//       border-purple-500/40
//       text-white
//       hover:bg-purple-500/10
//       hover:border-purple-400
//       hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
//     `,
//   };

//   return (
//     <a
//       href={href}
//       className={`${baseClass} ${variants[variant]}`}
//     >
//       {/* Glow */}
//       <span
//         className="
//         absolute
//         inset-0
//         -translate-x-full
//         bg-gradient-to-r
//         from-transparent
//         via-white/30
//         to-transparent
//         transition-transform
//         duration-700
//         group-hover:translate-x-full
//       "
//       />

//       <span className="relative z-10">
//         {children}
//       </span>
//     </a>
//   );
// }