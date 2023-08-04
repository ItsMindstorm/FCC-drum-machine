import { useEffect } from "react";
import { useDrumStore } from "../store";
import { HeaterKit } from "./HeaterKit";
import Options from "./Options";

function Buttons() {
  const setCurrentDrumKit = useDrumStore((store) => store.setCurrentDrumKit);
  const setCurrentDrumKitDescription = useDrumStore(
    (store) => store.setCurrentDrumKitDescription
  );

  const setvolume = useDrumStore((store) => store.volume);
  const power = useDrumStore((store) => store.power);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playKit(event.key.toUpperCase());
    });
  }, [setvolume, power]);

  function playKit(selector) {
    const audioclip = document.getElementById(selector);

    if (power === false) {
      audioclip.volume = "0";
    } else {
      audioclip.volume = setvolume;
    }

    audioclip.play();

    setCurrentDrumKit(selector);

    function findDrumKit() {
      function matchesDescription(selector, text) {
        return selector === text;
      }

      const playedDrumKit = HeaterKit.find((element) =>
        matchesDescription(selector, element.text)
      );

      if (playedDrumKit) {
        setCurrentDrumKitDescription(playedDrumKit.description);
      }
    }

    findDrumKit();
  }

  return (
    <>
      <div className="pad bg-red-800 rounded w-4/4 grid grid-cols-3 grid-rows-3 place-content-center mx-auto">
        {HeaterKit.map((kits) => (
          <div
            className="drum-pad w-70 drop-shadow-md"
            id={kits.src}
            onClick={() => {
              playKit(kits.text);
            }}
            key={crypto.randomUUID()}
          >
            <button
              type="button"
              className="pad-button bg-pink-200 p-10 w-3/4 m-5 rounded-lg inline-block border-solid border-4 border-gray-400 hover:border-gray-700 hover:bg-pink-300 cursor-pointer"
            >
              <h1 className="font-semibold font-sans">{kits.text}</h1>
              <audio
                className="clip"
                src={kits.src}
                id={kits.text}
                key={crypto.randomUUID()}
              ></audio>
            </button>
          </div>
        ))}
      </div>
      <Options />
    </>
  );
}

export default Buttons;
