import React from 'react'
import './App.css';
import AppBottomNavigation from './BottomNavigation';

function App() {
  return (
    <div className="app">
      <div data-testid="page-section" className="page">he</div>
      <div data-testid="bottom-navigation-section">
        <AppBottomNavigation onTabChanged={(value) => {}}/>
      </div>
    </div>
  );
}

export default App;
