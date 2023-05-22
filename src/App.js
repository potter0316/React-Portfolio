import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
     return (
      <div>
        <Header></Header>
        <main>
          <About></About>
          <Resume></Resume>
        </main>
        <Footer></Footer>
        </div>);

}
export default App;
