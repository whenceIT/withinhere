// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// Components
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";
import WhatIs from "./components/WhatIs";
import WhyIs from "./components/WhyIs";
import HowDoes from "./components/HowDose";
import WhatShouldWeDo from "./components/WhatShouldWeDo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Spotlight />
       <WhatIs />
       <WhyIs />
       <HowDoes />
      <WhatShouldWeDo />
      <Footer />
    </>
  );
}

export default App;

