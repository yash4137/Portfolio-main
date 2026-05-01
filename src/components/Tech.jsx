import React from "react";

import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto flex flex-row flex-wrap justify-center gap-10`}>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
