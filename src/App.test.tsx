import { render, screen } from "@testing-library/react";
import App from "./App";

describe("homepage", () => {
  it("renders hero, all sections and footer landmarks", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/NATIONAL\s*INNOVATION\s*CHALLENGE/);
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getByRole("heading", { name: /from idea to podium/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /THREE TRACKS. ONE FINALE./ })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
