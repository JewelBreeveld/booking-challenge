import React, { Component } from "react";
import PickupTime from "./PickupTime";
import ChooseVehicle from "./ChooseVehicle";

class BookingForm extends Component {
  render() {
    return (
      <form>
        {/*1. pickup => inputfield*/}
        <input type="text" name="name" placeholder="Address" required />
        {/*2. via => inputfield*/}
        <input type="text" name="name" placeholder="Address" />
        {/* dropoff => inputfield */}
        <input type="text" name="name" placeholder="Address" required />
        {/* ASAP or Date/Time Component */}
        <PickupTime />
        {/* Vehicle Component */}
        <ChooseVehicle />
        {/* Name passenger => inputfield */}
        <input type="text" name="name" placeholder="Full name" required />
        {/* Phone passenger => inputfield */}
        <input type="text" name="name" placeholder="Phone-number" required />
        {/* Email passenger */}
        <input type="text" name="name" placeholder="E-mail" required />
        {/* Submit form button*/}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BookingForm;
