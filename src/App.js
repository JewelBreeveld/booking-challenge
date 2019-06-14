import React from "react";
import BookingForm from "./components/BookingForm";
import "./style.scss";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Your coding starts here</h1>
        <BookingForm />
      </div>
    );
  }
}
