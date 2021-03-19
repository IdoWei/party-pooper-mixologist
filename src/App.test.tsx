import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import BottomNavigationDriver from "./BottomNavigation.driver";
import { BottomNavigationTabs } from "./BottomNavigation";

it("renders page section", async () => {
  render(<App />);
  const pageSection = await screen.findByTestId("page-section");
  expect(pageSection).toBeInTheDocument();
});

it("renders bottom navigation", async () => {
  render(<App />);
  const bottomNavigation = await screen.findByTestId(
    "bottom-navigation-section"
  );
  expect(bottomNavigation).toBeInTheDocument();
});

it("renders default (mixer) page", async () => {
  render(<App />);
  const mixerPage = await screen.findByTestId("mixer-page-root");

  expect(mixerPage).toBeInTheDocument();
});

it("renders Drinks page after changing to Drinks Tab", async () => {
  render(<App />);
  const bottomNavigationDriver = new BottomNavigationDriver();
  const drinksTab = await bottomNavigationDriver.getTabByTestId(
    BottomNavigationTabs.DRINKS_TAB.testId
  );

  drinksTab.click();

  const drinksPage = await screen.findByTestId("drinks-page-root");

  expect(drinksPage).toBeInTheDocument();
});
