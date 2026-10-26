
import './App.css';

// import the CharacterCounter component
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

// create the main App component
function App() {
  // display the CharacterCounter component
  return (
    <CharacterCounter
      minWords={25}
      maxWords={100}
      targetReadingTime={1}
    />
  );
}

// export the App component
export default App;
