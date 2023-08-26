import { Link } from "react-router-dom";

import Image from "@components/Image";
import Spinner from "@components/Spinner";
import Icon from "@components/Icon";

import useGet from "@hooks/useGet";
import { ENDPOINTS } from "@config/constants";
import { getPath } from "@config/router";

const SolarSystem = () => {
  const { isLoading: isLoadingPlanet, data: planets } = useGet(ENDPOINTS.PLANETS);
  const { isLoading: isLoadingSun, data: sun } = useGet(ENDPOINTS.SUN);

  if (isLoadingPlanet || isLoadingSun) return <Spinner />;

  return (
    <div id="solarSystem">
      <h1 id="appTitle"><span>Reactronaut</span><br /> Solar System</h1>

      <ul>
        <li>
          <Link to={getPath.sun()}>
            <Image name={sun.images.default} />
            <span>{sun.name}</span>
          </Link>
        </li>

        {planets.map(({ id, name, image }) => (
          <li key={id}>
            <Link to={getPath.planets(id)}>
              <Image name={image} />
              <span>{name}</span>
            </Link>
          </li>
        ))}

        <li id="newPlanet">
          <Link to={getPath.createPlanet()}>
            <div id="create"><span><Icon name="plus" /></span></div>
            <span>New planet</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SolarSystem;