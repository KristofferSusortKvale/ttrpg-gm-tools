import React from 'react';
import './App.css';
import { DicePoolVisual } from './components/dice/DicePoolVisual';
import { WatchWrapper } from './components/progress/WatchWrapper';
import { Notes } from './components/documents/Notes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Tools">
        <DicePoolVisual />
        <WatchWrapper />
      </div>
      <div className="Documents">
        <Notes />
      </div>
    </div>
  );
}

export default App;
