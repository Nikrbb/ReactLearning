import CustomCollapse from "./components/CustomCollapse";
import Collapse from "./components/Collapse";
const text = 'collapse me';
function App() {
  return (
      <>
          <div className="d-flex gap-5 justify-content-center position-relative mt-4" style={{top: "100px"}}>
              <div className="me-4">
                  <CustomCollapse text={ text } opened={ false } />
              </div>
              <div className="ms-4">
                  <Collapse text={ text } opened={ false } />
              </div>
          </div>
      </>
  );
}

export default App;
