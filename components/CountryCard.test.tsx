import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CountryCard } from "./CountryCard";
import type { CountryListItem } from "@/lib/types/country";

const baseCountry: CountryListItem = {
  name: { common: "France", official: "French Republic" },
  cca3: "FRA",
  region: "Europe",
  population: 123456,
  flags: { png: "https://flagcdn.com/w320/fr.png", svg: "https://flagcdn.com/fr.svg" },
};

describe("CountryCard", () => {
  it("renders core country details and link", () => {
    render(<CountryCard country={{ ...baseCountry, capital: ["Paris"] }} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/country/FRA");
    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText("123,456")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Paris")).toBeInTheDocument();
  });

  it('shows "N/A" when capital is missing', () => {
    render(<CountryCard country={{ ...baseCountry, capital: undefined }} />);
    expect(screen.getByText("N/A")).toBeInTheDocument();
  });
});
