import { create } from "zustand";
import { devtools } from "zustand/middleware";

const drumStore = (set) => ({
  currentDrumKit: "",
  currentDrumKitDescription: "Heater Kit",

  volume: 1.0,
  power: true,

  setCurrentDrumKit: (currentDrumKit) =>
    set(() => ({
      currentDrumKit: currentDrumKit,
    })),

  setCurrentDrumKitDescription: (currentDrumKitDescription) =>
    set(() => ({
      currentDrumKitDescription: currentDrumKitDescription,
    })),

  setSelectedDrumKit: (selectedDrumKit) =>
    set(() => ({
      selectedDrumKit: selectedDrumKit,
    })),

  setVolume: (volume) =>
    set(() => ({
      volume: volume,
    })),

  setPower: (power) =>
    set(() => ({
      power: power,
    })),
});

export const useDrumStore = create(devtools(drumStore));
