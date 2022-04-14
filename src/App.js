import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
//import Contact from './components/Contact';
//import Portfolio from './components/Portfolio';

import './App.css';
import './index.css';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Check out these sites to see my work:',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
            <About></About>
      </main>
    </div>
  );
}

export default App;