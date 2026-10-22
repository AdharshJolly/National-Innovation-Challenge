export function JourneyStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <li className="journey-step">
      <span className="journey-step__node" aria-hidden="true" />
      <span className="journey-step__num t-mono">{number}</span>
      <h3 className="t-h4 journey-step__title">{title.toUpperCase()}</h3>
      <p className="t-body-sm journey-step__text">{text}</p>
    </li>
  );
}
