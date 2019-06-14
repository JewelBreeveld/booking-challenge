import React, { Component } from "react";

class ChooseVehicle extends Component {
  render() {
    return (
      <div>
        <h5>Please select your vehicle of choice</h5>
        <select>
          <option>Nissan Leaf</option>
          <option>Tesla Model S</option>
          <option>Tesla Model X</option>
        </select>
      </div>
    );
  }
}

export default ChooseVehicle;
