import React, { Component } from "react";

class PickupTime extends Component {
  state = { isChecked: false };

  handleChange = () => {
    !this.state.isChecked
      ? this.setState({
          isChecked: true
        })
      : this.setState({
          isChecked: false
        });
  };

  render() {
    return (
      <div>
        <input
          name="pickup-asap"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
        {this.state.isChecked ? (
          "Pickup time: asap"
        ) : (
          <input type="datetime-local" />
        )}
      </div>
    );
  }
}

export default PickupTime;
