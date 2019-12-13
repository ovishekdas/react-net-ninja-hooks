import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
