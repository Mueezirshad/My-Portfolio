import Buttons from "../Ui/buttons";

export default function HeroButtons() {
  return (

<div className="mt-8 flex flex-wrap gap-4">
  <Buttons href="#projects">
    View Projects
  </Buttons>

  <Buttons
    href="/resume.pdf"
    variant="secondary"y
  >
    Download Resume
  </Buttons>
</div>
  );
}