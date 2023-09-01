import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import Buttons from './components/Buttons/Buttons';
import './index.css'
function App() {
  const [isA4Format, setIsA4Format] = useState(false);

  return (
    <div>
      <Buttons isA4Format={isA4Format} setIsA4Format={setIsA4Format} />
      <div className={isA4Format ? 'a4-format mb-5 disable-interactions' : ''}>
        <Header isA4Format={isA4Format} />
        <Main isA4Format={isA4Format} />
        <Footer isA4Format={isA4Format} />
      </div>
    </div>
  );
}

export default App;
