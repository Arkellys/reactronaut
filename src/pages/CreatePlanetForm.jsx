const CreatePlanetForm = () => {
  return (
    <div id="createPlanetForm">
      <h1>New planet</h1>

      {/* Add your code here... */}

      <input placeholder="Name" type="text" name="name" required />
      <textarea placeholder="Description" name="description" required />

      <div id="characteristics">
        <input placeholder="Type" type="text" name="type" required />
        <input placeholder="Population" type="text" name="population" required />
        <input placeholder="Diameter" type="text" name="diameter" required />
      </div>

      <div id="actions">
        {/* ...and here. */}
      </div>
    </div>
  );
};

export default CreatePlanetForm;