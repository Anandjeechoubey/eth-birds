import React from "react";

const Create = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="m-8 border rounded-lg p-6">
      <h3 className="text-lg font-bold">Create new Bird</h3>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 my-4 gap-12">
          <div className="flex flex-col">
            <div className="flex mb-2 gap-2 items-center justify-between">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            {/* input for power */}

            <div className="flex mb-2 gap-2 items-center justify-between">
              <label htmlFor="power">Power</label>
              <input type="number" name="power" id="power" />
            </div>
            {/* input for health */}

            <div className="flex mb-2 gap-2 items-center justify-between">
              <label htmlFor="health">Health</label>
              <input type="number" name="health" id="health" />
            </div>
          </div>
          <div className="flex flex-col text-start">
            {/* input for age */}

            <div className="flex mb-2 gap-2 items-center justify-between">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" id="age" />
            </div>
            <div className="flex mb-2 gap-2 items-center justify-between">
              <label htmlFor="bird-color">Color</label>
              <input
                type="text"
                name="bird-color"
                id="bird-color"
                placeholder="e.g. #FFFFFF"
              />
            </div>
          </div>
        </div>
        <input
          className="bg-slate-700 text-white px-4 py-2 rounded-lg mt-2"
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
};

export default Create;
