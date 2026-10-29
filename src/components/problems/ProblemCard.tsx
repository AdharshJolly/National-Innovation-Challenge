import { useRef } from "react";
import type { ReactNode } from "react";
import type { ProblemStatement } from "../../data/problems";
import { Icon } from "../ui/Icon";

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="pmodal__detail">
      <dt className="t-label">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export function ProblemCard({ p }: { p: ProblemStatement }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `pm-${p.id}`;

  return (
    <article className="problem" data-track={p.track}>
      <span className="problem__num" aria-hidden="true">{p.number}</span>
      {p.theme && <span className="t-label problem__theme">{p.theme}</span>}
      <h3 className="t-h3 t-balance problem__title">{p.title}</h3>
      {p.hook && <p className="problem__hook">{p.hook}</p>}
      <p className="problem__challenge">{p.challenge}</p>
      <button type="button" className="problem__open" onClick={() => dialog.current?.showModal()}>
        View full brief <Icon name="arrow" size={16} />
      </button>

      <dialog
        ref={dialog}
        className="pmodal"
        data-track={p.track}
        aria-labelledby={titleId}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        <div className="pmodal__panel">
          <header className="pmodal__head">
            <div>
              <p className="t-label pmodal__kicker">
                Problem {p.number}
                {p.theme ? ` · ${p.theme}` : ""}
              </p>
              <h2 id={titleId} className="t-h2 t-balance">{p.title}</h2>
              {p.hook && <p className="problem__hook">{p.hook}</p>}
            </div>
            <button type="button" className="pmodal__close" aria-label="Close" onClick={() => dialog.current?.close()}>
              <Icon name="close" size={22} />
            </button>
          </header>
          <dl className="pmodal__body">
            {p.problem && <Detail label="The problem">{p.problem}</Detail>}
            <Detail label="The challenge">{p.challenge}</Detail>
            {p.explore && (
              <Detail label="Explore">
                <Chips items={p.explore} />
              </Detail>
            )}
            {p.hardware && <Detail label="Hardware">{p.hardware}</Detail>}
            {p.software && <Detail label="Software">{p.software}</Detail>}
            {p.approaches && <Detail label="Many ways to solve it">{p.approaches}</Detail>}
            {p.safety && <Detail label="Build it safely">{p.safety}</Detail>}
            {p.tools && (
              <Detail label="Free tools">
                <Chips items={p.tools} />
              </Detail>
            )}
            {p.data && (
              <Detail label="Free data">
                <Chips items={p.data} />
              </Detail>
            )}
            {p.partner && <Detail label="Industry partner">{p.partner}</Detail>}
          </dl>
        </div>
      </dialog>
    </article>
  );
}
