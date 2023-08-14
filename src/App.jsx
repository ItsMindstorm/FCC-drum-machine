import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="animate-fade-in">
      <div className="w-full mx-auto text-center pb-2">
        <h1 className="text-pink-200 font-bold">Drum Machine</h1>
         <h3 className="text-pink-200 text-xs font-sans font-bold">
            Thank you K-dev on youtube for the inspiration          </h3>
	  <h3 className="text-pink-200 text-xs font-sans-font-bold">  to use
             <code>Array.map</code> for the pads in my code
	      </h3>

      </div>
      <div
        id="drum-machine"
        className="outer-container w-100 md:w-3/4 max-w-lg mx-auto"
      >
        <Buttons />
      </div>
    </div>
  );
}

export default App;
