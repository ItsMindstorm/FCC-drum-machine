import ReactSwitch from "react-switch";
import { useDrumStore } from "../store";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Options() {
  const currentKitDescription = useDrumStore(
    (state) => state.currentDrumKitDescription
  );
  const setVolume = useDrumStore((state) => state.setVolume);
  const volume = useDrumStore((state) => state.volume);
  const setPower = useDrumStore((state) => state.setPower);

  const [checked, setChecked] = useState(true);

  const handleChecked = (checked) => {
    if (checked === true) {
      setPower(true);
      setChecked(true);
    } else {
      setPower(false);
      setChecked(false);
    }
  };

  return (
    <>
      <div className="settings w-3/4 pt-5 grid grid-rows-3 grid-cols-1 content-center justify-self-center gap-2 text-center mx-auto">
        <div id="power">
          <ReactSwitch onChange={handleChecked} checked={checked} />
        </div>
        <div id="volume-slider">
          <input
            type="range"
            name="volume-slider"
            className="hover:opacity-80"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(e) => {
              setVolume(e.target.valueAsNumber);
            }}
          />
          <p className="text-green-300 text-xs">Current volume: {volume}</p>
        </div>

        <div id="display" className="mx-auto">
          <h1 className="text-green-300 text-lg font-sans font-bold">
            {currentKitDescription}
          </h1>
	    <h1 className="text-green-300 text-lg font-sans font-bold">Made with <FontAwesomeIcon icon={faHeart} className="px-2" /> by Yves</h1>
        </div>
      </div>
    </>
  );
}

export default Options;
