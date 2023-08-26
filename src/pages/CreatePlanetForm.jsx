import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Image from "@components/Image";

import images from "@config/images";
import useCreate from "@hooks/useCreate";
import { ENDPOINTS } from "@config/constants";
import Button from "@components/Buttons";
import { getPath } from "@config/router";

const CreatePlanetForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const imageNames = Object.keys(images).filter(imageName => !imageName.includes("sun"));
  const [selectedImage, setSelectedImage] = useState(imageNames[0]);

  const { mutate: create, isLoading } = useCreate();

  const handleCreate = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { type, diameter, population, ...data } = Object.fromEntries(formData.entries());

    create({
      endpoint: ENDPOINTS.PLANETS,
      data: {
        ...data,
        characteristics: {
          type,
          diameter,
          population
        },
        image: selectedImage
      }
    }, {
      onSuccess: ({ id }) => {
        queryClient.invalidateQueries({ queryKey: [ENDPOINTS.PLANETS] });
        navigate(getPath.planets(id));
      }
    });
  }

  return (
    <form id="createPlanetForm" onSubmit={handleCreate}>
      <h1>New planet</h1>

      <ul>
        {imageNames.map(image => (
          <li
            key={image}
            className={selectedImage === image ? "selected" : ""}
            onClick={() => setSelectedImage(image)}
          >
            <Image name={image} />
          </li>
        ))}
      </ul>

      <input placeholder="Name" type="text" name="name" required />
      <textarea placeholder="Description" name="description" required />

      <div id="characteristics">
        <input placeholder="Type" type="text" name="type" required />
        <input placeholder="Population" type="text" name="population" required />
        <input placeholder="Diameter" type="text" name="diameter" required />
      </div>

      <div id="actions">
        <Button
          onClick={() => navigate(getPath.solarSystem())}
          variant="lined"
          label="Cancel"
        />

        <Button
          type="submit"
          label="Create"
          disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default CreatePlanetForm;