import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { HomeShell } from "./HomeShell";
import type { CountryListItem } from "@/lib/types/country";

const makeCountry = (
  name: string,
  region: string,
  cca3: string,
): CountryListItem => ({
    name: { common: name, official: name },
    cca3,
    region,
    population: 1000,
    flags: { png: "https://flagcdn.com/w320/fr.png", svg: "https://flagcdn.com/fr.svg" },
  });

describe("HomeShell", () => {
  it("filters countries by search query", async () => {
    const user = userEvent.setup();
    const countries = [
      makeCountry("France", "Europe", "FRA"),
      makeCountry("Brazil", "Americas", "BRA"),
    ];

    render(<HomeShell countries={countries} />);
    await user.type(screen.getByPlaceholderText("Search for a country..."), "fra");

    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.queryByText("Brazil")).not.toBeInTheDocument();
  });

  it("filters countries by selected region", async () => {
    const user = userEvent.setup();
    const countries = [
      makeCountry("France", "Europe", "FRA"),
      makeCountry("Brazil", "Americas", "BRA"),
    ];

    render(<HomeShell countries={countries} />);
    await user.click(screen.getByRole("button", { name: "Filter by Region" }));
    await user.click(screen.getByRole("option", { name: "America" }));

    expect(screen.getByText("Brazil")).toBeInTheDocument();
    expect(screen.queryByText("France")).not.toBeInTheDocument();
  });
});
