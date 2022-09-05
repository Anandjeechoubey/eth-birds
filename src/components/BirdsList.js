import React from "react";

const BirdsList = ({ birds }) => {
  return (
    <div className="m-8 border rounded-lg p-6">
      <h2 className="text-lg font-bold">BirdsList</h2>
      <div className="grid grid-cols-4 gap-4">
        {birds.map((bird) => (
          <div
            key={bird.id}
            className="border rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="flex flex-col">
              <div className="flex mb-2 gap-2 items-center justify-between">
                <span className="font-bold">Name</span>
                <span>{bird.name}</span>
              </div>
              <div className="flex mb-2 gap-2 items-center justify-between">
                <span className="font-bold">Power</span>
                <span>{bird.power}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirdsList;
