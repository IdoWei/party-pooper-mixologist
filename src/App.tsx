import React, { useState } from 'react'
import './App.css';
import AppBottomNavigation from './BottomNavigation';
import { BottomNavigationTabs } from './BottomNavigation';
import DrinksPage from './pages/drinks-page/DrinksPage';
import MixerPage from './pages/mixer-page/MixerPage';

const mapTabToPage = {
  [BottomNavigationTabs.MIXER_TAB.label]: MixerPage,
  [BottomNavigationTabs.DRINKS_TAB.label]: DrinksPage
}

const App = () => {
  const [PageToRender, setPageToRender] = useState(mapTabToPage[BottomNavigationTabs.MIXER_TAB.label])

  return (
    <div className="app">
      <div data-testid="page-section" className="page">
        {PageToRender}
      </div>
      <div data-testid="bottom-navigation-section">
        <AppBottomNavigation onTabChanged={(value) => {setPageToRender(mapTabToPage[value])}}/>
      </div>
    </div>
  );
}

export default App;
