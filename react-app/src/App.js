import './App.css';
import DefinitionsList from "./Components/Definitions";
const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];
function App() {
  return (
      <DefinitionsList data={definitions} />
  );
}

export default App;
