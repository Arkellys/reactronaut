import { useState } from "react";

import Spinner from "@components/Spinner";
import Image from "@components/Image";

import { ENDPOINTS } from "@config/constants";
import useGet from "@hooks/useGet";
import ToggleSwitch from "@components/ToggleSwitch";

const Sun = () => {
  const { isLoading, data: sun } = useGet(ENDPOINTS.SUN);

  const [isUltraviolet, toggleUltraviolet] = useState(false);

  if (isLoading) return <Spinner />;

  const { name, images, description } = sun;
  const displayedImage = isUltraviolet ? "ultraviolet" : "default";

  return (
    <div id="sun" className="page">
      <h1>{name}</h1>

      <Image name={images[displayedImage]} />

      <p>
        {description}
      </p>

      <ToggleSwitch
        checked={isUltraviolet}
        labelTrue="Ultraviolet"
        labelFalse="Normal"
        onChange={toggleUltraviolet}
      />
    </div>
  );
};

export default Sun;