
import './App.css';
import Alert from "./Components/Alert";
function App() {
  return (
      <>
        <Alert type="warning" text="what is love?" />
        <Alert type="primary" text="Baby don`t hurt me" />
        <Alert type="success" text="don`t hurt me" />
        <Alert type="danger" text="no more" />
      </>

  );
}

export default App;
