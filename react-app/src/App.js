import './App.css';
import Card from "./Components/Card";
const title = 'Fucking title'
const text = 'Shitty description'
function App() {
  return (
      <>
        <Card title={title} />
        <Card text={text} />
        <Card title={title} text={text}/>
      </>
  );
}

export default App;
