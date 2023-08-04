import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div className="w-full mx-auto text-center">
        <h1 className="text-pink-200 font-bold pb-1">Drum Machine</h1>
      </div>
      <div
        id="drum-machine"
        className="outer-container w-100 md:w-3/4 max-w-lg mx-auto"
      >
        <Buttons />
      </div>
    </>
  );
}

export default App;
