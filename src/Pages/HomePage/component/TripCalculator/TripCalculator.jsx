import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TripCalculator = () => {
  const destinations = [
    {
      id: 1,
      destination: "Goa",
      base_Price: 2000,
      starting_Point: ["Goa", "Mumbai", "Pune", "Delhi"],
      accommodation: ["Hotel", "Resort", "Home Stay"],
      transportation: ["Bus", "Train", "Car"],
    },
    {
      id: 2,
      destination: "Manali",
      base_Price: 3000,
      starting_Point: ["Manali", "Delhi", "Chandigarh", "Shimla"],
      accommodation: ["Hotel", "Resort", "Home Stay"],
      transportation: ["Bus", "Train", "Car"],
    },
    {
      id: 3,
      destination: "Ladakh",
      base_Price: 4000,
      starting_Point: ["Ladakh", "Delhi", "Manali", "Srinagar"],
      accommodation: ["Hotel", "Resort", "Home Stay"],
      transportation: ["Bus", "Car", "Bike"],
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );
  const [selectedStartingPoint, setSelectedStartingPoint] = useState("");
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [selectedTransportation, setSelectedTransportation] = useState("");

  const handleDestinationChange = (event) => {
    const selected = destinations.find(
      (dest) => dest.destination === event.target.value
    );
    setSelectedDestination(selected);
    setSelectedStartingPoint("");
    setSelectedAccommodation("");
    setSelectedTransportation("");
  };

  const handleStartingPointChange = (event) => {
    setSelectedStartingPoint(event.target.value);
  };

  const handleAccommodationChange = (event) => {
    setSelectedAccommodation(event.target.value);
  };

  const handleTransportationChange = (event) => {
    setSelectedTransportation(event.target.value);
  };

  const calculateTripCost = () => {
    if (
      !selectedStartingPoint ||
      !selectedAccommodation ||
      !selectedTransportation
    ) {
      return 0;
    }

    let totalCost = selectedDestination.base_Price;

    if (selectedAccommodation === "Hotel") totalCost += 1000;
    if (selectedAccommodation === "Resort") totalCost += 1500;
    if (selectedAccommodation === "Home Stay") totalCost += 500;

    if (selectedTransportation === "Bus") totalCost += 500;
    if (selectedTransportation === "Train") totalCost += 1000;
    if (selectedTransportation === "Car") totalCost += 2000;
    if (selectedTransportation === "Bike") totalCost += 300;

    return totalCost;
  };

  return (
    <>
      <div className="container">
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="destinationSelect">
            Select Destination
          </label>
          <select
            className="form-select"
            id="destinationSelect"
            onChange={handleDestinationChange}
            value={selectedDestination.destination}
          >
            {destinations.map((dest) => (
              <option key={dest.id} value={dest.destination}>
                {dest.destination}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="startingPointSelect">
            Starting Point
          </label>
          <select
            className="form-select"
            id="startingPointSelect"
            onChange={handleStartingPointChange}
            value={selectedStartingPoint}
          >
            <option value="" disabled>
              Select Starting Point
            </option>
            {selectedDestination.starting_Point.map((point, index) => (
              <option key={index} value={point}>
                {point}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="accommodationSelect">
            Accommodation Type
          </label>
          <select
            className="form-select"
            id="accommodationSelect"
            onChange={handleAccommodationChange}
            value={selectedAccommodation}
          >
            <option value="" disabled>
              Select Accommodation
            </option>
            {selectedDestination.accommodation.map((acc, index) => (
              <option key={index} value={acc}>
                {acc}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="transportationSelect">
            Transportation
          </label>
          <select
            className="form-select"
            id="transportationSelect"
            onChange={handleTransportationChange}
            value={selectedTransportation}
          >
            <option value="" disabled>
              Select Transportation
            </option>
            {selectedDestination.transportation.map((trans, index) => (
              <option key={index} value={trans}>
                {trans}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <h5>Estimated Trip Cost: ₹{calculateTripCost()}</h5>
        </div>
      </div>
    </>
  );
};

export default TripCalculator;
