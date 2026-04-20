import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";

import { CountryToolbar, type RegionFilter } from "./CountryToolbar";

function ToolbarHarness() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("");

  return (
    <CountryToolbar
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedRegion={selectedRegion}
      onRegionChange={setSelectedRegion}
    />
  );
}

describe("CountryToolbar", () => {
  it("keeps the search field in sync with user input", async () => {
    const user = userEvent.setup();
    render(<ToolbarHarness />);

    const input = screen.getByPlaceholderText("Search for a country...");
    await user.type(input, "can");

    expect(input).toHaveValue("can");
  });

  it("shows America label and selects it", async () => {
    const user = userEvent.setup();
    render(<ToolbarHarness />);

    await user.click(screen.getByRole("button", { name: "Filter by Region" }));
    await user.click(screen.getByRole("option", { name: "America" }));

    expect(screen.getByRole("button", { name: "America" })).toBeInTheDocument();
  });
});
