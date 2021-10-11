import React from 'react';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App'>
      <h1>CV Application | The Odin Project</h1>
      <Info />
      <Education />
      <Experience />
    </div>
  )
}

export default App;