import React from "react";
import { LavaLamp5 } from "./models/LavaLamp5";

export const MainScene = () => {
  console.log("MainScene");
  return (
    <>
      <LavaLamp5 position={[0, 0.07, 0]} />
    </>
  );
};
