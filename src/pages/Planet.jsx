import { useParams } from "react-router-dom";

import Spinner from "@components/Spinner";
import Image from "@components/Image";

import { ENDPOINTS } from "@config/constants";
import useGet from "@hooks/useGet";
import useDelete from "@hooks/useDelete";
import Button from "@components/Buttons";

const Planet = () => {
  const { id } = useParams();

  const { isLoading, data: planet } = useGet(ENDPOINTS.PLANETS, id);
  const { mutate: deletePlanet, isLoading: isDeleting } = useDelete();

  if (isLoading || isDeleting) return <Spinner />;

  const handleDelete = () => {
    deletePlanet({ endpoint: ENDPOINTS.PLANETS, id })
  };

  const { name, image, description, characteristics } = planet;
  const { diameter, population, type } = characteristics;

  return (
    <div id="planet" className="page">
      <h1>{name}</h1>

      <Image name={image} />

      <p>
        {description}
      </p>

      <ul>
        <li>
          <h6>Type</h6>
          {type}
        </li>
        <li>
          <h6>Population</h6>
          {population}
        </li>
        <li>
          <h6>Diameter</h6>
          {diameter}
        </li>
      </ul>

      <Button
        color="danger"
        onClick={handleDelete}
        label="Destroy"
      />
    </div>
  )
};

export default Planet;