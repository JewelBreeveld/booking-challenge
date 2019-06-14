import React, { Component } from "react";
import PickupTime from "./PickupTime";
import ChooseVehicle from "./ChooseVehicle";

class BookingForm extends Component {
  state = {};

  handleChange = event => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form>
        {/*1. pickup => inputfield*/}
        <input
          type="text"
          name="pickupAdress"
          placeholder="Address"
          required
          value={this.state.value}
          onChange={this.handleChange}
        />
        {/*2. via => inputfield*/}
        <input
          type="text"
          name="viaAdress"
          placeholder="Address"
          onChange={this.handleChange}
        />
        {/* dropoff => inputfield */}
        <input
          type="text"
          name="dropoffAddress"
          placeholder="Address"
          required
          onChange={this.handleChange}
        />
        {/* ASAP or Date/Time Component */}
        <PickupTime />
        {/* Vehicle Component */}
        <ChooseVehicle />
        {/* Name passenger => inputfield */}
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          required
          onChange={this.handleChange}
        />
        {/* Phone passenger => inputfield */}
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone-number"
          required
          onChange={this.handleChange}
        />
        {/* Email passenger */}
        <input
          type="text"
          name="Email"
          placeholder="E-mail"
          required
          onChange={this.handleChange}
        />
        {/* Submit form button*/}
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
      </form>
    );
  }
}

export default BookingForm;
