import AboutContent from "./aboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto min-h-screen px-6 py-24"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        

        <AboutContent />
      </div>
    </section>
  );
}