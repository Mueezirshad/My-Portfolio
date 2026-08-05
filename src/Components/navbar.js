export default function Navbar() {
  return (
  <nav className="fixed font-glitch z-50 top-0 left-0 w-full bg-purple/30 backdrop-none">
    <div className="max-w-7xl mx-auto flex justify-between gap-2 items-center px-8 py-6">

      <h1 className="text-2xl font-bold text-white">
        Moeez Irshad
      </h1>

      <ul className="flex gap-8 text-white">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </div>
  </nav>
);
}