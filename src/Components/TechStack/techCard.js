export default function TechCard({ icon, name }) {
  return (
    <div
      className="
  group
  rounded-2xl
  border
  border-white/10
  bg-white/5
  p-8
  transition-all
  duration-300
  hover:-translate-y-3
  hover:border-purple-500/40
  hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]
"
    >

      <div
        className="
  text-5xl
  text-purple-400
  transition-transform
  duration-300
  group-hover:scale-110
"
      >


        {icon}

      </div>

      <h3 className="mt-5 text-xl font-semibold">

        {name}

      </h3>

    </div>
  );
}