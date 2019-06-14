import React, { Component } from "react";
import PickupTime from "./PickupTime";
import ChooseVehicle from "./ChooseVehicle";

class BookingForm extends Component {
  render() {
    return (
      <form>
        {/*1. pickup => inputfield*/}
        <input type="text" name="name" placeholder="Address" />
        {/*2. via => inputfield*/}
        <input type="text" name="name" placeholder="Address" />
        {/* dropoff => inputfield */}
        <input type="text" name="name" placeholder="Address" />
        {/* ASAP or Date/Time Component */}
        <PickupTime />
        {/* Vehicle Component */}
        <ChooseVehicle />
        {/* Name passenger => inputfield */}
        <input type="text" name="name" placeholder="Full name" />
        {/* Phone passenger => inputfield */}
        <input type="text" name="name" placeholder="Phone-number" />
        {/* Email passenger */}
        <input type="text" name="name" placeholder="E-mail" />
        {/* Submit form button*/}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BookingForm;
