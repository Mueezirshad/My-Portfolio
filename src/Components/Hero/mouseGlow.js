// "use client";

// import { useState } from "react";

// export default function MouseGlow() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   return (
//     <div
//       onMouseMove={(e) =>
//         setPosition({
//           x: e.clientX,
//           y: e.clientY,
//         })
//       }
//       className="absolute inset-0 overflow-hidden"
//     >
//       <div
//         className="pointer-events-none absolute h-42 w-42 rounded-full bg-purple-500/20 blur-3xl transition-all duration-300"
//         style={{
//           left: position.x - 140,
//           top: position.y - 140,
//         }}
//       />
//     </div>
//   );
// }