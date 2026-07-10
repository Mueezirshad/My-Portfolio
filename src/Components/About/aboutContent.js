export default function AboutContent() {
  return (
    <div>

      <p className="mb-3 font-medium text-purple-400">
        About Me
      </p>

      <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
        Passionate About Building Modern Web Experiences
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        I'm Moeez Irshad, a Full Stack Developer passionate about
        building fast, responsive and user-friendly web applications
        using modern technologies like React, Next.js, Node.js,
        Express.js and MongoDB.
      </p>
<div className="mt-10 space-y-5">

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <h3 className="font-semibold text-white">
      🎓 Education
    </h3>

    <p className="mt-2 text-gray-400">
      Saylani Mass IT Training Program
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <h3 className="font-semibold text-white">
      💻 Specialization
    </h3>

    <p className="mt-2 text-gray-400">
      React • Next.js • Node.js • MongoDB
    </p>
  </div>

</div>
    </div>
  );
}