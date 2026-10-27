import { Reveal } from "../ui/Reveal";

export function ClosingSection() {
  return (
    <section className="section closing" data-surface="dark" id="register" aria-labelledby="closing-title">
      <Reveal className="container closing__inner">
        <h2 id="closing-title" className="closing__title">
          THREE TRACKS. <span>ONE FINALE.</span>
        </h2>
        <p className="closing__venue">CHRIST (DEEMED TO BE UNIVERSITY) · KENGERI CAMPUS</p>
      </Reveal>
    </section>
  );
}
