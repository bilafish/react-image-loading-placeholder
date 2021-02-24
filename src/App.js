import "./App.css";
import ImageLoader from "./components/ImageLoader";
import LargeImg from "./assets/pexels-burst-373912.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageLoader imgSrc={LargeImg} />
        <p>Display of loading placeholder when image is loading</p>
      </header>
    </div>
  );
}

export default App;
