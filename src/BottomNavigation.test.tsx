import React from "react";
import { render, screen } from "@testing-library/react";
import AppBottomNavigation, { BottomNavigationTabs } from "./BottomNavigation";
import BottomNavigationDriver from './BottomNavigation.driver';
import { BottomNavigation } from '@material-ui/core/BottomNavigation';

describe("Bottom Navigation", () => {
  let driver: BottomNavigationDriver;
  beforeEach(() => {
    driver =  new BottomNavigationDriver();
  })

  it("renders mixer tab", async () => {
    render(<AppBottomNavigation onTabChanged={jest.fn()} />);
    const mixerTab = await driver.getTabByTestId(
      BottomNavigationTabs.MIXER_TAB.testId
    );
    expect(mixerTab).toBeInTheDocument();
  });

  it("renders drinks tab", async () => {
    render(<AppBottomNavigation onTabChanged={jest.fn()} />);
    const drinksTab = await driver.getTabByTestId(
      BottomNavigationTabs.DRINKS_TAB.testId
    );
    expect(drinksTab).toBeInTheDocument();
  });

  it('calls onTabChanged when clicking on tab', async () => {
    const onTabChanged = jest.fn();
    render(<AppBottomNavigation onTabChanged={onTabChanged} />);
    const drinksTab = await driver.getTabByTestId(
      BottomNavigationTabs.DRINKS_TAB.testId
    );
    
    drinksTab.click();

    expect(onTabChanged).toHaveBeenCalledWith(BottomNavigationTabs.DRINKS_TAB.label)
  })
});
