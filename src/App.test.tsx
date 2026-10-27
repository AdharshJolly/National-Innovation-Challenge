import { render, screen } from "@testing-library/react";
import App from "./App";

describe("homepage", () => {
  it("renders hero, all sections and footer landmarks", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/National\s*Innovation\s*Challenge\s*2027/);
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "From idea to podium" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /THREE TRACKS. ONE FINALE./ })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
