import Carousel from "./Components/Carousel";
let imgArray = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/4.jpeg", "/images/5.jpeg", "/images/6.jpeg", "/images/7.jpeg"]
function App() {
  return (
    <div className="App">
     <Carousel images={imgArray}/>
    </div>
  );
}

export default App;
